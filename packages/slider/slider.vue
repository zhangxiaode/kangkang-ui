<template>
  <div class="zxd-slider" @mouseover="sliderOver" @mouseout="sliderOut">
    <div class="hd">
      <a class="next"></a>
      <ul>
        <li :key="index" v-for="(item,index) in sliderList.length-vis+1" :class="{'on':index==sliderIndex}">{{ item }}</li>
      </ul>
      <a class="prev"></a>
    </div>
    <div class="bd">
      <ul :style="{width: bdWidth + 'px',left: leftWidth + 'px'}">
        <li :key="index" v-for="(item,index) in sliderList">
          <div class="pic">
            <a href="javavscript:;">
              <img :src="item.img">
            </a>
          </div>
          <div class="title">
            <a href="javavscript:;">{{ item.txt }}</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
let sit
export default {
  name: 'Zxd-slider',
  data () {
    return {
      sliderIndex: 0,
      bdWidth: 0,
      leftWidth: 0
    }
  },
  computed: {
  },
  props: ['sliderList', 'effect', 'autoPlay', 'vis'],
  mounted () {
    this.bdWidth = document.getElementsByClassName('zxd-slider')[0].clientWidth / this.vis * this.sliderList.length
    this.leftWidth = -document.getElementsByClassName('zxd-slider')[0].clientWidth / this.vis * this.sliderIndex
    sit = setInterval(() => {
      this.moveLeft()
    }, 2000)
  },
  methods: {
    moveLeft () {
      this.sliderIndex++
      if (this.sliderIndex === this.sliderList.length - this.vis + 1) {
        this.sliderIndex = 0
      }
      this.leftWidth = -document.getElementsByClassName('zxd-slider')[0].clientWidth / this.vis * this.sliderIndex
    },
    sliderOver () {
      clearInterval(sit)
    },
    sliderOut () {
      sit = setInterval(() => {
        this.moveLeft()
      }, 2000)
    }
  }
}
</script>

<style scoped lang="less">
.hd{
  height:20px;overflow:hidden;padding:0 10px;
  .next,.prev{
    float:right; width:5px; height:9px; margin-right:5px; margin-top:6px;
    background:url("../../assets/arrow.png") 0 0 no-repeat;
    overflow:hidden;cursor:pointer;
  }
  ul{
    float:right; overflow:hidden; zoom:1; margin-top:6px; zoom:1;
    li{
      margin-right:5px; text-indent:-999px; cursor:pointer;
      float:left;  width:9px; height:9px; overflow:hidden;
      background:#cccccc;border-radius:4.5rem;
      &.on{
        background:#ff6600;
      }
    }
  }
  .next{
    background-position:0 -50px;
  }
}
.bd{
  overflow:hidden; height:120px;zoom:1;white-space:nowrap;position:relative;
  ul{position:absolute;top:0;left:0;height:120px;transition:all .5s;}
  li{
    margin:0 8px; float:left; overflow:hidden; text-align:center;
    .pic{
      text-align:center;
      a{
        display:block;
        img{
          display:block;width:178px; height:90px;padding:2px; border:1px solid rgba(255,255,255,0.3);
        }
        &:hover{
          img{
            border-color:#999;
          }
        }
      }
    }
    .title{
      line-height:24px;
      a{
        color:#fff;
      }
    }
  }
}
</style>
