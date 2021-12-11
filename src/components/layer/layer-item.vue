<template>
  <div>
    <div class="va-layer__item">
      <i class="icon icon-ellipsis-v handle" />
      <span class="text">{{ modelValue.name }}</span>
    </div>
    <div v-if="modelValue.expanded" class="va-expanded__wrapper">
      <div v-for="property in changedProperties" :key="property" class="va-expanded__item">
        <span class="text">{{ getLabelFromProperty(property) }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTimeline } from "../useTimeline";

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { changedProperties, getLabelFromProperty } = useTimeline(props);

    return {
      changedProperties,
      getLabelFromProperty,
    };
  },
});
</script>
