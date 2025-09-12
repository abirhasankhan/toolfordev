// server/api/convert-image.post.js
import sharp from 'sharp'

export default defineEventHandler(async (event) => {
    try {
        const formData = await readMultipartFormData(event)

        if (!formData || formData.length === 0) {
            throw createError({
                statusCode: 400,
                statusMessage: 'No file provided'
            })
        }

        const file = formData.find(item => item.name === 'image')
        const format = formData.find(item => item.name === 'format')?.data?.toString() || 'jpeg'
        const quality = parseInt(formData.find(item => item.name === 'quality')?.data?.toString()) || 90

        if (!file) {
            throw createError({
                statusCode: 400,
                statusMessage: 'No image file found'
            })
        }

        let sharpInstance = sharp(file.data)

        // Get image metadata
        const metadata = await sharpInstance.metadata()

        // Apply format-specific options
        switch (format.toLowerCase()) {
            case 'jpeg':
            case 'jpg':
                sharpInstance = sharpInstance.jpeg({
                    quality,
                    progressive: true,
                    mozjpeg: true
                })
                break

            case 'png':
                sharpInstance = sharpInstance.png({
                    compressionLevel: 9,
                    progressive: true,
                    palette: true // Use palette when possible for smaller files
                })
                break

            case 'webp':
                sharpInstance = sharpInstance.webp({
                    quality,
                    effort: 6,
                    nearLossless: quality >= 95
                })
                break

            case 'avif':
                sharpInstance = sharpInstance.avif({
                    quality,
                    effort: 9,
                    chromaSubsampling: '4:2:0'
                })
                break

            case 'tiff':
                sharpInstance = sharpInstance.tiff({
                    quality,
                    compression: 'lzw',
                    predictor: 'horizontal'
                })
                break

            case 'heif':
                sharpInstance = sharpInstance.heif({
                    quality,
                    compression: 'av1'
                })
                break

            default:
                throw createError({
                    statusCode: 400,
                    statusMessage: `Unsupported format: ${format}`
                })
        }

        const convertedBuffer = await sharpInstance.toBuffer()

        return {
            success: true,
            originalFormat: metadata.format,
            originalSize: file.data.length,
            convertedSize: convertedBuffer.length,
            width: metadata.width,
            height: metadata.height,
            data: convertedBuffer.toString('base64'),
            compressionRatio: ((file.data.length - convertedBuffer.length) / file.data.length * 100).toFixed(1)
        }

    } catch (error) {
        console.error('Image conversion error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: `Image conversion failed: ${error.message}`
        })
    }
})


