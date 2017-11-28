<template>
</template>

<script>
export default {
  name: 'code-snippets',
  data () {
    return {
      'snippets': {
        'basic': function () {
          window.alert(['S', 'a', 'm', 'p', 'l', 'e'].join(''))
        }
      }
    }
  }
}
</script>
