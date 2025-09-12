// server/api/batch-convert.post.js
import sharp from 'sharp'

export default defineEventHandler(async (event) => {
    try {
        const formData = await readMultipartFormData(event)

        const format = formData.find(item => item.name === 'format')?.data?.toString() || 'jpeg'
        const quality = parseInt(formData.find(item => item.name === 'quality')?.data?.toString()) || 90

        // Get all image files
        const imageFiles = formData.filter(item => item.name === 'images[]')

        if (imageFiles.length === 0) {
            throw createError({
                statusCode: 400,
                statusMessage: 'No images provided'
            })
        }

        // Process images with a concurrency limit to avoid memory issues
        const BATCH_SIZE = 5
        const results = []

        for (let i = 0; i < imageFiles.length; i += BATCH_SIZE) {
            const batch = imageFiles.slice(i, i + BATCH_SIZE)

            const batchResults = await Promise.all(
                batch.map(async (file, batchIndex) => {
                    const globalIndex = i + batchIndex

                    try {
                        let sharpInstance = sharp(file.data)
                        const metadata = await sharpInstance.metadata()

                        // Apply format-specific processing
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
                                    palette: true
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
                                    compression: 'lzw'
                                })
                                break

                            case 'heif':
                                sharpInstance = sharpInstance.heif({
                                    quality,
                                    compression: 'av1'
                                })
                                break
                        }

                        const convertedBuffer = await sharpInstance.toBuffer()
                        const extension = format === 'jpeg' ? 'jpg' : format
                        const baseName = file.filename ?
                            file.filename.substring(0, file.filename.lastIndexOf('.')) :
                            `image-${globalIndex}`

                        return {
                            index: globalIndex,
                            filename: `${baseName}.${extension}`,
                            originalSize: file.data.length,
                            convertedSize: convertedBuffer.length,
                            width: metadata.width,
                            height: metadata.height,
                            data: convertedBuffer.toString('base64'),
                            compressionRatio: ((file.data.length - convertedBuffer.length) / file.data.length * 100).toFixed(1),
                            success: true
                        }

                    } catch (error) {
                        console.error(`Conversion failed for image ${globalIndex}:`, error)
                        return {
                            index: globalIndex,
                            filename: file.filename || `image-${globalIndex}`,
                            error: error.message,
                            success: false
                        }
                    }
                })
            )

            results.push(...batchResults)
        }

        const successCount = results.filter(r => r.success).length
        const totalSize = results.reduce((sum, r) => sum + (r.originalSize || 0), 0)
        const convertedSize = results.reduce((sum, r) => sum + (r.convertedSize || 0), 0)

        return {
            success: true,
            results: results.sort((a, b) => a.index - b.index), // Ensure correct order
            totalProcessed: imageFiles.length,
            successCount,
            failureCount: imageFiles.length - successCount,
            totalOriginalSize: totalSize,
            totalConvertedSize: convertedSize,
            overallCompressionRatio: totalSize > 0 ? ((totalSize - convertedSize) / totalSize * 100).toFixed(1) : '0'
        }

    } catch (error) {
        console.error('Batch conversion error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: `Batch conversion failed: ${error.message}`
        })
    }
})