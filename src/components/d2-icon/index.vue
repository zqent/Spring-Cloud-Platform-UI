<template>
  <i class="fa" :class="`fa-${name}`"  aria-hidden="true"></i>
</template>

<script>
import './font-awesome-6.0.0/css/all.min.css'
export default {
  name: 'd2-icon',
  props: {
    name: {
      type: String,
      required: false,
      default: 'font-awesome'
    }
  }
}
</script>
