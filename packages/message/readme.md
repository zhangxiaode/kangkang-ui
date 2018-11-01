<template>
  <transition>
    <div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
    }
  },
  mounted () {
    this.$message.success('this is message')
    this.$message.error('this is message')
    this.$message.info('this is message')
    this.$message.warning('this is message')
  }
}
</script>
