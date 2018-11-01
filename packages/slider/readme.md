<template>
  <div>
    <Zxd-slider class="homeSlid" :sliderList="sliderList" effect="left" autoPlay=true vis=6>
    </Zxd-slider>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      sliderList: [
        {
          img: require('@/assets/slideImg1.jpg'),
          txt: '效果图1'
        },
        {
          img: require('@/assets/slideImg2.jpg'),
          txt: '效果图2'
        },
        {
          img: require('@/assets/slideImg3.jpg'),
          txt: '效果图3'
        },
        {
          img: require('@/assets/slideImg4.jpg'),
          txt: '效果图4'
        },
        {
          img: require('@/assets/slideImg5.jpg'),
          txt: '效果图5'
        },
        {
          img: require('@/assets/slideImg6.jpg'),
          txt: '效果图6'
        },
        {
          img: require('@/assets/slideImg7.jpg'),
          txt: '效果图7'
        },
        {
          img: require('@/assets/slideImg8.jpg'),
          txt: '效果图8'
        },
        {
          img: require('@/assets/slideImg9.jpg'),
          txt: '效果图9'
        },
        {
          img: require('@/assets/slideImg10.jpg'),
          txt: '效果图10'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.homeSlid{
  width:1200px;height:140px;margin:0 auto;
}
</style>
