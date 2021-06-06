<template>
<b-modal ref="thisModalRef" :modal-class="my-modal" size="lg" hide-header hide-footer no-close-on-backdrop hide-header-close>
    //...
</b-modal>
</template>
<script>
export default {
  data () {
    return {
      mymodal: ['mymodal']
    }
  },
  methods: {
    hideModal () {
      this.$refs.thisModalRef.hide()
    },
    showModal () {
      this.$refs.thisModalRef.show()
    }
  }
}
</script>

<style scoped>
  .mymodal > div {
    position: absolute;
    top: 300px;
    right: 100px;
    background-color: yellow;
  }
</style>