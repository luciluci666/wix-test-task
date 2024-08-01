<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { setNestedProperty } from '../utils/object.utils'
import ProductApi from '@/api/productApi'
import ProductVariantForm from '../components/ProductVariantForm.vue'


const route = useRoute()
const router = useRouter()
const formRef = ref()
const product = ref({
    name: '',
    productType: 'physical',
    description: '',
    sku: '',
    variants: [],
    priceData: {
        currency: '',
        price: 0,
    }
})

const productId: string = route.params.id;

onMounted(async () => {
    const productDto = await ProductApi.getProduct(productId)
    for (const key in product.value) {
        product.value[key] = productDto[key]
    }
})


const goBack = () => {
    router.push('/products')
}

const submitForm = async () => {
    if (!formRef.value) return
    product.value.variants = product.value.variants.map((variant) => {
        return {
            ...variant,
            price: parseFloat(variant.price),
        }
    })
    await ProductApi.updateProduct(productId, product.value)
    await router.push('/products')
}

const onVariantFormChange = (id: number | string, key: string, value: string) => {
    /*
    if (key.includes('.')) {
        setNestedProperty(product.value.variants[id], key, value)
        return;
    }*/
    product.value.variants[id][key] = value;
}

const deleteVariant = (id: number | string) => {
    product.value.variants = product.value.variants.filter((variant, index) => index !== id)
}

</script>

<template>
    <el-page-header @back="goBack" style="margin-bottom: 1.5rem;">
        <template #content>
            <span class="text-large font-600 mr-3"> Edit product </span>
        </template>
    </el-page-header>

    <main>
        <el-form ref="formRef" label-width="auto" :model="product">
            <el-form-item label="Name" label-position="left">
                <el-input v-model="product.name" />
            </el-form-item>
            <el-form-item label="Description" label-position="left">
                <el-input v-model="product.description" />
            </el-form-item>
            <el-form-item label="Price" label-position="left">
                <el-input v-model="product.priceData.price" />
            </el-form-item>
            <el-form-item label="SKU" label-position="left">
                <el-input v-model="product.sku" />
            </el-form-item>
            <div class="flex">
                <h3>Variants</h3>
            </div>

            <div v-if="product.variants.length" class="">
                <product-variant-form v-for="(variant, index) in product.variants" :key="index" :id="index"
                    :deleteVariant="deleteVariant" @change="onVariantFormChange" :variant="variant" />
            </div>

            <el-form-item>
                <el-button type="primary" @click="submitForm()">
                    Update
                </el-button>
            </el-form-item>
        </el-form>
    </main>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.flex {
    display: flex;
    gap: 1rem;
    align-items: center;
}
</style>