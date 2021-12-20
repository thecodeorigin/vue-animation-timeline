<script lang="ts">
import { defineComponent } from "vue";
import VueAnimationTimeline from "@/package/vue-timeline-animation.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    VueAnimationTimeline,
  },
});
</script>

<template>
  <div id="app">
    <VueAnimationTimeline />
  </div>
</template>
