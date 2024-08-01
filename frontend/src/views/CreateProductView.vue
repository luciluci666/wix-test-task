<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import ProductApi from '@/api/productApi'
import ProductVariantForm from '../components/ProductVariantForm.vue'

const router = useRouter()
const formRef = ref()
const product = reactive({
    name: '',
    productType: 'physical',
    description: '',
    sku: '',
    variants: [],
   priceData: { currency: 'USD',
    price: 100,}
})
const goBack = () => {
    router.push('/products')
}

const submitForm = async () => {
  if (!formRef.value) return
  await ProductApi.createProduct(product)
    await router.push('/products')
}

</script>

<template>
    <el-page-header @back="goBack" style="margin-bottom: 1.5rem;">
        <template #content>
            <span class="text-large font-600 mr-3"> Create product </span>
        </template>
    </el-page-header>

    <main>
        <el-form ref="formRef" label-width="auto" :model="product" >
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
            <el-form-item>
                <el-button type="primary" @click="submitForm()">
                    Create
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