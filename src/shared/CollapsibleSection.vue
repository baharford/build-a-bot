<template>
    <div>
        <div class="header">
            <span c-if="open" @click="open = !open">&#x25b2; Collapse</span>
            <span c-if="!open" @click="open = !open">&#x25bC; Expand</span>
        </div>
        <!-- Toggleable Content -->
        <slot v-if="open">
          <div>DefaultContent</div>
        </slot>
    </div>
</template>

<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return { open: true };
  },
};
</script>

<style scoped>
  .header {
      background-color: #bbb;
      padding: 3px;
      cursor: pointer;
  }
</style>
