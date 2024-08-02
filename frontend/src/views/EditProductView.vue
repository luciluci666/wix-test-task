<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import ProductApi from "@/api/productApi";
import ProductVariantForm from "../components/ProductVariantForm.vue";
import type { Product } from "@/interfaces/productInterface";

const route = useRoute();
const router = useRouter();
const formRef = ref();
const product = ref<Product>({
  name: "",
  productType: "physical",
  description: "",
  sku: "",
  variants: [],
  priceData: {
    currency: "",
    price: 0,
  },
});

const productId: string = route.params.id as string;

onMounted(async () => {
  const productDto = await ProductApi.getProduct(productId);
  for (const key in product.value) {
    (product.value as any)[key] = productDto[key as keyof Product];
  }
});

const goBack = () => {
  router.push("/products");
};

const submitForm = async () => {
  if (!formRef.value) return;
  product.value.variants = product.value?.variants?.map((variant): any => {
    return {
      ...variant,
      price: parseFloat(variant.price),
    };
  });
  await ProductApi.updateProduct(productId, product.value);
  await router.push("/products");
};

const onVariantFormChange = (id: number, key: string, value: any) => {
  (product.value.variants[id] as any)[key] = value;
};
</script>

<template>
  <el-page-header @back="goBack" style="margin-bottom: 1.5rem">
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
        <product-variant-form
          v-for="(variant, index) in product.variants"
          :key="index"
          :id="index"
          @change="onVariantFormChange"
          :variant="variant"
        />
      </div>

      <el-form-item>
        <el-button type="primary" @click="submitForm()"> Update </el-button>
      </el-form-item>
    </el-form>
  </main>
</template>

<script lang="ts" setup></script>

<style scoped>
.flex {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
