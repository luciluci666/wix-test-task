<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps<{
  variant: any;
  id: number;
}>();

const currentVariant = ref(props.variant);

const emit = defineEmits<{
  (e: "change", id: number, key: string, value: string): void;
}>();

const onChange = (key: string) => {
  emit("change", props.id, key, currentVariant.value[key]);
};

watch(
  () => props.variant,
  (newVariant) => {
    currentVariant.value = newVariant;
  },
  { immediate: true },
);
</script>

<template>
  <el-form class="form">
    <el-form-item label="SKU" label-position="top">
      <el-input v-model="currentVariant.sku" @input="onChange('sku')" />
    </el-form-item>
    <div class="pickers">
      <el-radio-group
        v-model="currentVariant.choices.Size"
        aria-label="Size"
        disabled
      >
        <el-radio-button value="Large">large</el-radio-button>
        <el-radio-button value="Medium">medium</el-radio-button>
        <el-radio-button value="Small">small</el-radio-button>
      </el-radio-group>
      <el-radio-group
        v-model="currentVariant.choices.Color"
        aria-label="Color"
        disabled
      >
        <el-radio-button value="Green">green</el-radio-button>
        <el-radio-button value="Red">red</el-radio-button>
        <el-radio-button value="Blue">blue</el-radio-button>
      </el-radio-group>
    </div>
    <el-form-item label="Price" label-position="left">
      <el-input v-model="currentVariant.price" @input="onChange('price')" />
    </el-form-item>
    <el-switch
      v-model="currentVariant.visible"
      size="large"
      active-text=""
      inactive-text=""
    />
  </el-form>
</template>

<style scoped>
.form {
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
}

.pickers {
  display: flex;
  gap: 1rem;
}
</style>

<style>
.el-radio-button__original-radio:disabled:checked + .el-radio-button__inner {
  background-color: #409eff !important;
  color: white;
}
</style>
