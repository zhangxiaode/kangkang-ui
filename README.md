<!-- slide使用方法  -->
<Zxd-slider class="homeSlid" :sliderList="sliderList" effect="left" autoPlay=true vis=3></Zxd-slider>
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
        }
      ]
    }
  }
  <!-- slide使用方法 end-->