## button使用

``` javascript
<template>
  <transition>
    <div>
      <p style="margin:10px 0;">
        <Kk-Button showShadow>default</Kk-Button>
        <Kk-Button showShadow type="primary">primary</Kk-Button>
        <Kk-Button showShadow type="dashed">dashed</Kk-Button>
        <Kk-Button showShadow type="danger">danger</Kk-Button>
      </p>
      <p style="margin:10px 0;">
        <Kk-Button disabled>disabled</Kk-Button>
        <Kk-Button disabled type="primary">primary</Kk-Button>
        <Kk-Button disabled type="dashed">dashed</Kk-Button>
        <Kk-button disabled type="danger">danger</Kk-button>
      </p>
      <p style="background:rgb(190, 200, 200);width:350px;height:40px;padding:20px;margin:10px 0;">
        <Kk-Button showShadow ghost>default</Kk-Button>
        <Kk-Button showShadow ghost type="primary">primary</Kk-Button>
        <Kk-Button showShadow ghost type="dashed">dashed</Kk-Button>
        <Kk-Button showShadow ghost type="danger">danger</Kk-Button>
      </p>
      <p style="background:rgb(190, 200, 200);width:350px;height:40px;padding:20px;margin:10px 0;">
        <Kk-Button disabled ghost>default</Kk-Button>
        <Kk-Button disabled ghost type="primary">primary</Kk-Button>
        <Kk-Button disabled ghost type="dashed">dashed</Kk-Button>
        <Kk-Button disabled ghost type="danger">danger</Kk-Button>
      </p>
      <p style="margin:10px 0;">
        <Kk-Button showShadow circle>default</Kk-Button>
        <Kk-Button showShadow circle type="primary">primary</Kk-Button>
        <Kk-Button showShadow circle type="dashed">dashed</Kk-Button>
        <Kk-Button showShadow circle type="danger">danger</Kk-Button>
      </p>
      <p style="margin:10px 0;">
        <Kk-Button showShadow>default</Kk-Button>
        <Kk-Button showShadow size="large">large</Kk-Button>
        <Kk-Button showShadow size="small">small</Kk-Button>
      </p>
      <p style="margin:10px 0;">
        <Kk-Button showShadow circle>default</Kk-Button>
        <Kk-Button showShadow circle size="large">large</Kk-Button>
        <Kk-Button showShadow circle size="small">small</Kk-Button>
      </p>
      <form action="" style="margin:10px 0;">
        <input type="text">
        <Kk-Button showShadow nativeType="reset">reset</Kk-Button>
        <Kk-Button showShadow nativeType="submit">submit</Kk-Button>
        <Kk-Button showShadow nativeType="button">button</Kk-Button>
      </form>
      <p style="margin:10px 0;">
        <Kk-Button showShadow circle><Kk-Icon color="#fff" class="kkIcon" icon="like"></Kk-Icon>iconBtn</Kk-Button>
      </p>
    </div>
  </transition>
</template>
```
