<template>
  <svg aria-hidden="true">
    <use :xlink:href="icon"></use>
  </svg>
</template>

<script>
export default {
  name: 'd2-icon-svg',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    icon () {
      return `#d2-${this.name}`
    }
  }
}
</script>
<style>
.d2-icon-svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>