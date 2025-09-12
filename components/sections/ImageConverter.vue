<template>
    <div class="tw-min-h-screen tw-bg-gradient-to-br tw-from-blue-50 tw-to-indigo-100 tw-p-4">
        <div class="tw-max-w-6xl tw-mx-auto">
            <h1 class="tw-text-4xl tw-font-bold tw-text-center tw-text-gray-800 tw-mb-4">
                Hybrid Image Converter
            </h1>
            <p class="tw-text-center tw-text-gray-600 tw-mb-8">
                Choose between fast client-side or powerful server-side processing
            </p>

            <!-- Processing Mode Selection -->
            <div class="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-mb-8">
                <h2 class="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-4">Processing Mode</h2>

                <div class="tw-grid tw-md:grid-cols-2 tw-gap-4">
                    <label
                        class="tw-flex tw-items-start tw-p-4 tw-border tw-rounded-lg tw-cursor-pointer tw-transition-all tw-duration-200"
                        :class="processingMode === 'client' ? 'tw-border-blue-500 tw-bg-blue-50' : 'tw-border-gray-200 hover:tw-border-gray-300'">
                        <input type="radio" v-model="processingMode" value="client" class="tw-mt-1 tw-mr-3">
                        <div>
                            <h3 class="tw-font-semibold tw-text-gray-800">Client-side (Canvas)</h3>
                            <p class="tw-text-sm tw-text-gray-600 tw-mt-1">
                                ✅ Private - files never leave your device<br>
                                ✅ Works offline<br>
                                ✅ Instant processing<br>
                                ⚠️ Limited formats (PNG, JPEG, WebP)
                            </p>
                        </div>
                    </label>

                    <label
                        class="tw-flex tw-items-start tw-p-4 tw-border tw-rounded-lg tw-cursor-pointer tw-transition-all tw-duration-200"
                        :class="processingMode === 'server' ? 'tw-border-blue-500 tw-bg-blue-50' : 'tw-border-gray-200 hover:tw-border-gray-300'">
                        <input type="radio" v-model="processingMode" value="server" class="tw-mt-1 tw-mr-3">
                        <div>
                            <h3 class="tw-font-semibold tw-text-gray-800">Server-side (Sharp)</h3>
                            <p class="tw-text-sm tw-text-gray-600 tw-mt-1">
                                ✅ More formats (AVIF, HEIF, TIFF)<br>
                                ✅ Better compression<br>
                                ✅ Handles large files<br>
                                ⚠️ Requires internet connection
                            </p>
                        </div>
                    </label>
                </div>
            </div>

            <!-- Upload Area -->
            <div class="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-8 tw-mb-8">
                <div @drop="handleDrop" @dragover.prevent @dragenter.prevent
                    class="tw-border-2 tw-border-dashed tw-border-gray-300 tw-rounded-lg tw-p-8 tw-text-center tw-transition-colors tw-duration-200 hover:tw-border-blue-400 hover:tw-bg-blue-50"
                    :class="{ 'tw-border-blue-400 tw-bg-blue-50': isDragging }">
                    <input ref="fileInput" type="file" accept="image/*" multiple @change="handleFileSelect"
                        class="tw-hidden">

                    <div class="tw-mb-4">
                        <svg class="tw-mx-auto tw-h-12 tw-w-12 tw-text-gray-400" stroke="currentColor" fill="none"
                            viewBox="0 0 48 48">
                            <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <p class="tw-text-lg tw-text-gray-600 tw-mb-2">
                        Drop images here or
                        <button @click="$refs.fileInput.click()"
                            class="tw-text-blue-600 tw-font-semibold hover:tw-text-blue-700">
                            browse
                        </button>
                    </p>
                    <p class="tw-text-sm tw-text-gray-400">
                        Supports {{ processingMode === 'client' ? 'PNG, JPG, GIF, WebP' : 'PNG, JPG, GIF, WebP, AVIF, HEIF, TIFF and more' }}
                    </p>
                </div>
            </div>

            <!-- Global Conversion Settings -->
            <div v-if="images.length > 0" class="tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-mb-8">
                <h2 class="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-4">Global Settings</h2>

                <div class="tw-grid tw-md:grid-cols-3 tw-gap-4 tw-items-end">
                    <div>
                        <label class="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-2">
                            Convert all to:
                        </label>
                        <select v-model="globalFormat"
                            class="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded-md tw-focus:ring-2 tw-focus:ring-blue-500">
                            <option value="png">PNG</option>
                            <option value="jpeg">JPEG</option>
                            <option value="webp">WebP</option>
                            <option v-if="processingMode === 'server'" value="avif">AVIF</option>
                            <option v-if="processingMode === 'server'" value="tiff">TIFF</option>
                            <option v-if="processingMode === 'server'" value="heif">HEIF</option>
                        </select>
                    </div>

                    <div v-if="globalFormat === 'jpeg' || globalFormat === 'webp' || globalFormat === 'avif'">
                        <label class="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-2">
                            Quality: {{ Math.round(globalQuality * 100) }}%
                        </label>
                        <input v-model.number="globalQuality" type="range" min="0.1" max="1" step="0.1"
                            class="tw-w-full tw-h-2 tw-bg-gray-200 tw-rounded-lg tw-appearance-none tw-cursor-pointer">
                    </div>

                    <div class="tw-flex tw-gap-2">
                        <button @click="applyGlobalSettings"
                            class="tw-bg-blue-600 tw-text-white tw-py-2 tw-px-4 tw-rounded-md tw-font-medium tw-transition-colors tw-duration-200 hover:tw-bg-blue-700">
                            Apply to All
                        </button>

                        <button @click="convertAllImages" :disabled="batchConverting"
                            class="tw-bg-purple-600 tw-text-white tw-py-2 tw-px-6 tw-rounded-md tw-font-medium tw-transition-colors tw-duration-200 hover:tw-bg-purple-700 disabled:tw-bg-gray-400">
                            <span v-if="!batchConverting">Convert All</span>
                            <span v-else class="tw-flex tw-items-center">
                                <svg class="tw-animate-spin tw-h-4 tw-w-4 tw-mr-2" fill="none" viewBox="0 0 24 24">
                                    <circle class="tw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                        stroke-width="4"></circle>
                                    <path class="tw-opacity-75" fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                    </path>
                                </svg>
                                Converting...
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Images Grid -->
            <div v-if="images.length > 0" class="tw-grid tw-gap-6 tw-md:grid-cols-2 tw-lg:grid-cols-3">
                <div v-for="(image, index) in images" :key="index"
                    class="tw-bg-white tw-rounded-xl tw-shadow-lg tw-overflow-hidden tw-transition-transform tw-duration-200 hover:tw-scale-105">
                    <!-- Image Preview -->
                    <div
                        class="tw-h-48 tw-bg-gray-100 tw-flex tw-items-center tw-justify-center tw-overflow-hidden tw-relative">
                        <img :src="image.preview" :alt="image.name"
                            class="tw-max-w-full tw-max-h-full tw-object-contain">
                        <!-- Processing Mode Badge -->
                        <div class="tw-absolute tw-top-2 tw-right-2 tw-px-2 tw-py-1 tw-rounded tw-text-xs tw-font-medium"
                            :class="processingMode === 'client' ? 'tw-bg-green-100 tw-text-green-800' : 'tw-bg-blue-100 tw-text-blue-800'">
                            {{ processingMode === 'client' ? 'Client' : 'Server' }}
                        </div>
                    </div>

                    <!-- Image Info and Controls -->
                    <div class="tw-p-4">
                        <h3 class="tw-font-semibold tw-text-gray-800 tw-truncate tw-mb-2">
                            {{ image.name }}
                        </h3>

                        <div class="tw-flex tw-items-center tw-justify-between tw-text-sm tw-text-gray-600 tw-mb-3">
                            <span>{{ formatFileSize(image.size) }}</span>
                            <span class="tw-uppercase tw-font-medium">{{ image.originalType }}</span>
                        </div>

                        <!-- Format Selection -->
                        <div class="tw-mb-4">
                            <label class="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-2">
                                Convert to:
                            </label>
                            <select v-model="image.targetFormat"
                                class="tw-w-full tw-p-2 tw-border tw-border-gray-300 tw-rounded-md tw-focus:ring-2 tw-focus:ring-blue-500">
                                <option value="png">PNG</option>
                                <option value="jpeg">JPEG</option>
                                <option value="webp">WebP</option>
                                <option v-if="processingMode === 'server'" value="avif">AVIF</option>
                                <option v-if="processingMode === 'server'" value="tiff">TIFF</option>
                                <option v-if="processingMode === 'server'" value="heif">HEIF</option>
                                <option value="gif" v-if="image.originalType !== 'gif' && processingMode === 'client'">
                                    GIF</option>
                            </select>
                        </div>

                        <!-- Quality Slider -->
                        <div v-if="image.targetFormat === 'jpeg' || image.targetFormat === 'webp' || image.targetFormat === 'avif'"
                            class="tw-mb-4">
                            <label class="tw-block tw-text-sm tw-font-medium tw-text-gray-700 tw-mb-2">
                                Quality: {{ Math.round(image.quality * 100) }}%
                            </label>
                            <input v-model.number="image.quality" type="range" min="0.1" max="1" step="0.1"
                                class="tw-w-full tw-h-2 tw-bg-gray-200 tw-rounded-lg tw-appearance-none tw-cursor-pointer">
                        </div>

                        <!-- Conversion Results -->
                        <div v-if="image.conversionResults"
                            class="tw-bg-gray-50 tw-p-3 tw-rounded-md tw-mb-4 tw-text-sm">
                            <div class="tw-flex tw-justify-between tw-items-center tw-mb-2">
                                <span class="tw-text-gray-600">Original:</span>
                                <span class="tw-font-medium">{{ formatFileSize(image.conversionResults.originalSize)
                                    }}</span>
                            </div>
                            <div class="tw-flex tw-justify-between tw-items-center tw-mb-2">
                                <span class="tw-text-gray-600">Converted:</span>
                                <span class="tw-font-medium">{{ formatFileSize(image.conversionResults.convertedSize)
                                    }}</span>
                            </div>
                            <div class="tw-flex tw-justify-between tw-items-center">
                                <span class="tw-text-gray-600">Savings:</span>
                                <span class="tw-font-medium"
                                    :class="image.conversionResults.savings > 0 ? 'tw-text-green-600' : 'tw-text-red-600'">
                                    {{ image.conversionResults.savings > 0 ? '-' : '+' }}{{
                                        Math.abs(image.conversionResults.savings) }}%
                                </span>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="tw-flex tw-gap-2 tw-mb-2">
                            <button @click="convertImage(index)" :disabled="image.converting"
                                class="tw-flex-1 tw-bg-blue-600 tw-text-white tw-py-2 tw-px-4 tw-rounded-md tw-font-medium tw-transition-colors tw-duration-200 hover:tw-bg-blue-700 disabled:tw-bg-gray-400 disabled:tw-cursor-not-allowed">
                                <span v-if="!image.converting">Convert</span>
                                <span v-else class="tw-flex tw-items-center tw-justify-center">
                                    <svg class="tw-animate-spin tw-h-4 tw-w-4 tw-mr-2" fill="none" viewBox="0 0 24 24">
                                        <circle class="tw-opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            stroke-width="4"></circle>
                                        <path class="tw-opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                    Converting...
                                </span>
                            </button>

                            <button @click="removeImage(index)"
                                class="tw-bg-red-500 tw-text-white tw-py-2 tw-px-4 tw-rounded-md tw-font-medium tw-transition-colors tw-duration-200 hover:tw-bg-red-600">
                                Remove
                            </button>
                        </div>

                        <!-- Error Display -->
                        <div v-if="image.error"
                            class="tw-bg-red-50 tw-border tw-border-red-200 tw-rounded-md tw-p-3 tw-mb-2">
                            <p class="tw-text-red-600 tw-text-sm">{{ image.error }}</p>
                        </div>

                        <!-- Download Link -->
                        <a v-if="image.convertedUrl" :href="image.convertedUrl" :download="image.convertedName"
                            class="tw-block tw-w-full tw-bg-green-600 tw-text-white tw-text-center tw-py-2 tw-px-4 tw-rounded-md tw-font-medium tw-transition-colors tw-duration-200 hover:tw-bg-green-700">
                            Download {{ image.targetFormat.toUpperCase() }}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Empty State -->
            <div v-if="images.length === 0" class="tw-text-center tw-py-12">
                <p class="tw-text-gray-500 tw-text-lg">No images selected. Drop some images above to get started!</p>
            </div>

            <!-- Download All Button -->
            <div v-if="hasConvertedImages" class="tw-text-center tw-mt-8">
                <button @click="downloadAll"
                    class="tw-bg-green-600 tw-text-white tw-py-3 tw-px-8 tw-rounded-lg tw-font-medium tw-text-lg tw-transition-colors tw-duration-200 hover:tw-bg-green-700">
                    Download All Converted Images
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const images = ref([])
const isDragging = ref(false)
const processingMode = ref('client')
const globalFormat = ref('png')
const globalQuality = ref(0.9)
const batchConverting = ref(false)

const hasConvertedImages = computed(() => {
    return images.value.some(img => img.convertedUrl)
})

const handleDrop = (e) => {
    e.preventDefault()
    isDragging.value = false
    const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'))
    processFiles(files)
}

const handleFileSelect = (e) => {
    const files = Array.from(e.target.files)
    processFiles(files)
    e.target.value = ''
}

const processFiles = (files) => {
    files.forEach(file => {
        const reader = new FileReader()
        reader.onload = (e) => {
            const imageObj = {
                file: file,
                name: file.name,
                size: file.size,
                originalType: file.type.split('/')[1],
                preview: e.target.result,
                targetFormat: 'png',
                quality: 0.9,
                converting: false,
                convertedUrl: null,
                convertedName: null,
                conversionResults: null,
                error: null
            }
            images.value.push(imageObj)
        }
        reader.readAsDataURL(file)
    })
}

const applyGlobalSettings = () => {
    images.value.forEach(image => {
        image.targetFormat = globalFormat.value
        if (globalFormat.value === 'jpeg' || globalFormat.value === 'webp' || globalFormat.value === 'avif') {
            image.quality = globalQuality.value
        }
    })
}

// Client-side conversion using Canvas
const convertImageClient = async (image) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()

    await new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = reject
        img.src = image.preview
    })

    canvas.width = img.width
    canvas.height = img.height

    if (image.targetFormat === 'jpeg') {
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    ctx.drawImage(img, 0, 0)

    const mimeType = `image/${image.targetFormat}`
    const quality = (image.targetFormat === 'jpeg' || image.targetFormat === 'webp') ? image.quality : undefined

    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob)
            const extension = image.targetFormat === 'jpeg' ? 'jpg' : image.targetFormat
            const baseName = image.name.substring(0, image.name.lastIndexOf('.')) || image.name

            resolve({
                url,
                name: `${baseName}.${extension}`,
                size: blob.size
            })
        }, mimeType, quality)
    })
}

// Server-side conversion using Sharp
const convertImageServer = async (image) => {
    const formData = new FormData()
    formData.append('image', image.file)
    formData.append('format', image.targetFormat)
    if (image.targetFormat === 'jpeg' || image.targetFormat === 'webp' || image.targetFormat === 'avif') {
        formData.append('quality', Math.round(image.quality * 100))
    }

    const response = await $fetch('/api/convert-image', {
        method: 'POST',
        body: formData
    })

    if (!response.success) {
        throw new Error('Server conversion failed')
    }

    // Convert base64 to blob
    const binaryString = atob(response.data)
    const bytes = new Uint8Array(binaryString.length)
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i)
    }
    const blob = new Blob([bytes], { type: `image/${image.targetFormat}` })
    const url = URL.createObjectURL(blob)

    const extension = image.targetFormat === 'jpeg' ? 'jpg' : image.targetFormat
    const baseName = image.name.substring(0, image.name.lastIndexOf('.')) || image.name

    return {
        url,
        name: `${baseName}.${extension}`,
        size: response.convertedSize,
        metadata: response
    }
}

const convertImage = async (index) => {
    const image = images.value[index]
    image.converting = true
    image.error = null

    try {
        let result
        if (processingMode.value === 'client') {
            result = await convertImageClient(image)
        } else {
            result = await convertImageServer(image)
        }

        image.convertedUrl = result.url
        image.convertedName = result.name

        // Calculate conversion results
        image.conversionResults = {
            originalSize: image.size,
            convertedSize: result.size,
            savings: Math.round(((image.size - result.size) / image.size) * 100)
        }

    } catch (error) {
        console.error('Conversion failed:', error)
        image.error = processingMode.value === 'server'
            ? 'Server conversion failed. Please try client-side mode or check your internet connection.'
            : 'Client conversion failed. This format may not be supported in your browser.'
    } finally {
        image.converting = false
    }
}

const convertAllImages = async () => {
    batchConverting.value = true

    if (processingMode.value === 'server') {
        // Server-side batch processing
        try {
            const formData = new FormData()
            images.value.forEach(image => {
                formData.append('images[]', image.file, image.name)
            })
            formData.append('format', globalFormat.value)
            formData.append('quality', Math.round(globalQuality.value * 100))

            const response = await $fetch('/api/batch-convert', {
                method: 'POST',
                body: formData
            })

            if (response.success) {
                response.results.forEach((result, index) => {
                    const image = images.value[index]
                    if (result.success) {
                        // Convert base64 to blob
                        const binaryString = atob(result.data)
                        const bytes = new Uint8Array(binaryString.length)
                        for (let i = 0; i < binaryString.length; i++) {
                            bytes[i] = binaryString.charCodeAt(i)
                        }
                        const blob = new Blob([bytes], { type: `image/${globalFormat.value}` })

                        image.convertedUrl = URL.createObjectURL(blob)
                        image.convertedName = result.filename
                        image.conversionResults = {
                            originalSize: result.originalSize,
                            convertedSize: result.convertedSize,
                            savings: Math.round(((result.originalSize - result.convertedSize) / result.originalSize) * 100)
                        }
                    } else {
                        image.error = result.error
                    }
                })
            }
        } catch (error) {
            console.error('Batch conversion failed:', error)
            // Fallback to individual conversions
            for (let i = 0; i < images.value.length; i++) {
                if (!images.value[i].convertedUrl) {
                    await convertImage(i)
                }
            }
        }
    } else {
        // Client-side individual conversions
        applyGlobalSettings()
        for (let i = 0; i < images.value.length; i++) {
            if (!images.value[i].convertedUrl) {
                await convertImage(i)
            }
        }
    }

    batchConverting.value = false
}

const removeImage = (index) => {
    const image = images.value[index]
    if (image.convertedUrl) {
        URL.revokeObjectURL(image.convertedUrl)
    }
    images.value.splice(index, 1)
}

const downloadAll = () => {
    images.value.forEach(image => {
        if (image.convertedUrl) {
            const link = document.createElement('a')
            link.href = image.convertedUrl
            link.download = image.convertedName
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    })
}

const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

// Cleanup on unmount
onUnmounted(() => {
    images.value.forEach(image => {
        if (image.convertedUrl) {
            URL.revokeObjectURL(image.convertedUrl)
        }
    })
})
</script>