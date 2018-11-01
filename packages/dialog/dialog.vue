<template>
  <div :class="['zxd-dialog', {'show-dialog': visible}]">
    <div class="zxd-dialog-mask" v-if="modal"></div>
    <div :class="['zxd-dialog-wrap', position ? 'zxd-dialog-' + position : '']" @click.self="close">
      <div class="zxd-dialog-modal" :style="{width: width}">
        <div class="zxd-dialog-title">
          <span>{{ this.title }}</span>
          <i class="close" @click="close"></i>
        </div>
        <div class="zxd-dialog-body">
          <slot></slot>
        </div>
        <div class="zxd-dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Zxd-dialog',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: 'this is title'
    },
    visible: Boolean,
    modal: Boolean,
    position: {
      type: String,
      default: 'center'
    },
    onOk: Function,
    onCancel: Function,
    width: {
      type: String,
      default: 'auto'
    }
  },
  watch: {
    visible () {
    }
  },
  mounted () {
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    open () {
      this.$emit('update:visible', true)
    }
  }
}
</script>

<style scoped lang="less">
.zxd-dialog{
  .zxd-dialog-mask{
    display:none;
  }
  .zxd-dialog-wrap{
    opacity: 0;
    transform: scale(0);
  }
  &.show-dialog{
    .zxd-dialog-mask{
      display:block;
    }
    .zxd-dialog-wrap{
      opacity: 1;
      transform: scale(1);
    }
  }
}
.zxd-dialog-mask{
  position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;
  background:rgba(0,0,0,0.5);
}
.zxd-dialog-wrap{
  display:flex;justify-content: center;align-items: center;
  position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;
  transform-origin: center center;
  overflow:hidden;
  transition:all .5s;
  &.zxd-dialog-top{
    justify-content: center;align-items: flex-start;
  }
  &.zxd-dialog-left{
    justify-content: flex-start;align-items: center;
  }
  &.zxd-dialog-bottom{
    justify-content: center;align-items: flex-end;
  }
  &.zxd-dialog-right{
    justify-content: flex-end;align-items: center;
  }
  &.zxd-dialog-center{
    justify-content: center;align-items: center;
  }
}
.zxd-dialog-modal{
  border-radius:4px;overflow:hidden;background:#fff;
  position: relative;z-index:1001;
  margin:20px;
  .zxd-dialog-title{
    padding:16px 24px;
    i.close{
      float:right;
      width:20px;
      height:20px;
      background:url(../../assets/close.svg) no-repeat center center;
      background-size:16px;
      cursor:pointer;
    }
  }
  .zxd-dialog-body{
    padding:24px;
  }
  .zxd-dialog-footer{
    padding:10px 16px;
    border-top:solid 1px #e8e8e8;
    text-align:right;
    button{
      margin:0 5px;
    }
  }
}
</style>
