## button使用

``` javascript
<template>
  <transition>
    <div>
      <Kk-button @click="handleClick">default</Kk-button>
      <Kk-button type="primary">primary</Kk-button>
      <Kk-button type="primary" disabled>disabled</Kk-button>
      <Kk-button type="primary" size='large'>large</Kk-button>
      <Kk-button type="primary" size='small'>small</Kk-button>
      <Kk-button type="primary" circle>circle</Kk-button>
      <Kk-button type="primary" size='large' circle>circle</Kk-button>
      <Kk-button type="primary" size='small' circle>circle</Kk-button>
    </div>
  </transition>
</template>
```
