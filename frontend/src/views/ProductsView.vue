<script lang="ts" setup>
import { ref, onMounted } from "vue";
import ProductApi from "@/api/productApi";
import { useRouter } from "vue-router";
import type { Product } from "@/interfaces/productInterface";
import ProductViewVariants from "@/components/ProductViewVariants.vue";

const router = useRouter();
const products = ref<Product[]>([]);

onMounted(async () => {
  products.value = await ProductApi.getProducts();
});

const deleteProduct = async (id: string) => {
  await ProductApi.deleteProduct(id);
  products.value = products.value.filter((product) => product.id !== id);
};
</script>

<template>
  <main class="column">
    <div class="flex">
      <div class="">
        <el-text class="mx-1" size="large" type="primary">All Products</el-text>
        - Manage all your products in one place!
      </div>
      <el-button
        @click="() => router.push('/products/create')"
        type="primary"
        plain
        >Create Product</el-button
      >
    </div>

    <el-table ref="multipleTableRef" :data="products" style="width: 100%">
      <el-table-column type="expand">
        <template #default="scope">
          <ProductViewVariants :variants="scope.row.variants" />
        </template>
      </el-table-column>
      <el-table-column label="Picture" width="180">
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <el-image :src="scope.row.media?.mainMedia?.image?.url" />
          </div>
        </template>
      </el-table-column>
      <el-table-column property="name" label="Title" width="120" />
      <el-table-column property="description" label="Description" width="250" />
      <el-table-column property="sku" label="SKU" />
      <el-table-column property="priceData.formatted.price" label="Price" />
      <el-table-column label="Action" width="120">
        <template #default="scope">
          <el-button
            type="primary"
            @click="() => router.push(`/products/${scope.row.id}`)"
            icon="Edit"
            circle
          />
          <el-button
            type="danger"
            @click="() => deleteProduct(scope.row.id)"
            icon="Delete"
            circle
          />
        </template>
      </el-table-column>
    </el-table>
  </main>
</template>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 3rem;
}

.flex {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
