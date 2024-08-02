<script lang="ts" setup>
import type { Variant } from "@/interfaces/productInterface";

const props = defineProps<{
  variants: Variant[];
}>();
</script>

<template v="scope">
  <div style="margin: 1rem">
    <h3>Variants</h3>
    <el-table
      :data="
        props.variants.filter((variant: Variant) => variant.variant.visible)
      "
    >
      <el-table-column label="SKU" property="variant.sku" />
      <el-table-column label="Size" property="choices.Size" />
      <el-table-column label="Color" property="choices.Color" />
      <el-table-column
        label="Price"
        property="variant.priceData.formatted.price"
      />
    </el-table>
  </div>
</template>
