// server/api/image-info.post.js - Get image metadata without conversion
import sharp from 'sharp'

export default defineEventHandler(async (event) => {
    try {
        const formData = await readMultipartFormData(event)
        const file = formData.find(item => item.name === 'image')

        if (!file) {
            throw createError({
                statusCode: 400,
                statusMessage: 'No image file found'
            })
        }

        const metadata = await sharp(file.data).metadata()

        return {
            success: true,
            format: metadata.format,
            width: metadata.width,
            height: metadata.height,
            channels: metadata.channels,
            depth: metadata.depth,
            density: metadata.density,
            hasAlpha: metadata.hasAlpha,
            hasProfile: metadata.hasProfile,
            isProgressive: metadata.isProgressive,
            size: file.data.length,
            megapixels: ((metadata.width * metadata.height) / 1000000).toFixed(2)
        }

    } catch (error) {
        console.error('Image info error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: `Failed to get image info: ${error.message}`
        })
    }
})