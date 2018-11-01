<template>
  <div class="banner">
    <Zxd-scroll :total="scrollData.length" :scrollData="scrollData">
      <div class="scrollItem" v-for="(item,index) in scrollData" :key="index">
        <img :src="item" alt="">
      </div>
    </Zxd-scroll>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      scrollData: [
        require('@/assets/slideImg1.jpg'),
        require('@/assets/slideImg2.jpg'),
        require('@/assets/slideImg3.jpg'),
        require('@/assets/slideImg4.jpg'),
        require('@/assets/slideImg5.jpg')
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .banner{
    height:150px;overflow:hidden;
    background:url(../assets/bannerBg.png) repeat-x center center;
    background-size:auto 150px;
    .scrollItem{
      float:left;height:100%;
    }
    img{
      width:auto;height:100%;
      margin:0 5px;
    }
  }
</style>
