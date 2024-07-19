<script setup lang="ts">
import { vMaska } from "maska/vue";
import { computed } from "vue";

interface IProps {
  id: string;
  type?: 'text' | 'number' | 'email' | 'password';
  label?: string;
  placeholder?: string;
  maska?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  id: '',
  type: 'text',
  label: 'Label',
  placeholder: '',
});
const model = defineModel({
  required: true
})

const maskValue = computed(() => props.maska ? props.maska : undefined)
</script>

<template>
  <div class="app-input">
    <label
      :for="props.id"
      class="app-input__label"
    >
      {{ props.label }}
    </label>
    <input
      :id="props.id"
      v-model="model"
      v-maska="maskValue"
      :type="props.type"
      :placeholder="props.placeholder"
      class="app-input__input"
    >
  </div>
</template>

<style scoped lang="scss">
.app-input {
  display: flex;
  flex-direction: column;
  width: 100%;

  &__label {
    margin-bottom: 4px;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
  }

  &__input {
    width: 100%;
    border-radius: 4px;
  }
}
</style>
