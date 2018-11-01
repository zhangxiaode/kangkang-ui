## Install
```shell
npm install element-ui -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import kk from 'kangkang-ui'

Vue.use(kk)

// or
import {
  Button
  // ...
} from 'kangkang-ui'

Vue.component(Button.name, Button)
```

## slide使用方法
``` javascript
<Kk-slider class="homeSlid" :sliderList="sliderList" effect="left" autoPlay=true vis=3></Kk-slider>

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
```
