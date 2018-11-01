<template>
  <div class="zxd-scroll" ref="zxdScroll">
    <div class="scrollWrap" @mouseover="move(false)" @mouseout="move(true)" :style="{width: wrapWidth + 'px', left: lef + 'px'}">
      <div class="scrollItem" ref="scrollItem" v-for="(item,index) in newScrollData" :key="index">
        <img :src="item" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Zxd-scroll',
  data () {
    return {
      wrapWidth: 0,
      newScrollData: [],
      lef: 0,
      timer: ''
    }
  },
  computed: {
    total () {
      return this.newScrollData.length
    },
    scrollWidth () {
      return this.$refs.zxdScroll.offsetWidth
    }
  },
  props: [ 'scrollData' ],
  mounted () {
    setTimeout(() => {
      this.wrapWidth = 0
      this.$refs.scrollItem.forEach(element => {
        this.wrapWidth += element.offsetWidth
      })
      if (this.wrapWidth > this.scrollWidth) {
        this.initDate(true)
        this.move(true)
      } else {
        this.initDate(false)
      }
    }, 1000)
  },
  methods: {
    initDate (status) {
      var newData = this.scrollData
      if (status) {
        this.scrollData.map(element => {
          newData.push(element)
        })
      }
      this.newScrollData = newData
    },
    move (status) {
      if (status) {
        this.timer = setInterval(() => {
          this.lef--
          if (this.lef <= -this.wrapWidth / 2) {
            this.lef = 0
          }
        }, 30)
      } else {
        clearInterval(this.timer)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .zxd-scroll{
    position:relative;width:100%;height:100%;
    .scrollWrap{
      height:100%;white-space: nowrap;
      position:relative;left:0;
      .scrollItem{
        display:inline-block;height:100%;
      }
      img{
        width:auto;height:100%;
        margin:0 5px;
      }
    }
  }
</style>
