<template>
  <transition>
    <div>
      <Zxd-button @click="handleClick">default</Zxd-button>
      <Zxd-button type="primary">primary</Zxd-button>
      <Zxd-button type="primary" disabled>disabled</Zxd-button>
      <Zxd-button type="primary" size='large'>large</Zxd-button>
      <Zxd-button type="primary" size='small'>small</Zxd-button>
      <Zxd-button type="primary" circle>circle</Zxd-button>
      <Zxd-button type="primary" size='large' circle>circle</Zxd-button>
      <Zxd-button type="primary" size='small' circle>circle</Zxd-button>
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
  }
}
</script>
