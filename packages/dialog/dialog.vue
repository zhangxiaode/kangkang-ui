<template>
  <div :class="['kk-dialog', {'show-dialog': visible}]">
    <div class="kk-dialog-mask" v-if="modal"></div>
    <div :class="['kk-dialog-wrap', position ? 'kk-dialog-' + position : '']" @click.self="close">
      <div class="kk-dialog-modal" :style="{width}">
        <div class="kk-dialog-title">
          <span>{{ this.title }}</span>
          <i class="close" @click="close"></i>
        </div>
        <div class="kk-dialog-body">
          <slot></slot>
        </div>
        <div class="kk-dialog-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Kk-Dialog',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: 'this is title'
    },
    visible: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: false
    },
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
.kk-dialog{
  .kk-dialog-mask{
    display:none;
  }
  .kk-dialog-wrap{
    opacity: 0;
    transform: scale(0);
  }
  &.show-dialog{
    .kk-dialog-mask{
      display:block;
    }
    .kk-dialog-wrap{
      opacity: 1;
      transform: scale(1);
    }
  }
}
.kk-dialog-mask{
  position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;
  background:rgba(0,0,0,0.5);
}
.kk-dialog-wrap{
  display:flex;justify-content: center;align-items: center;
  position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;
  transform-origin: center center;
  overflow:hidden;
  transition:all .5s;
  &.kk-dialog-top{
    justify-content: center;align-items: flex-start;
  }
  &.kk-dialog-left{
    justify-content: flex-start;align-items: center;
  }
  &.kk-dialog-bottom{
    justify-content: center;align-items: flex-end;
  }
  &.kk-dialog-right{
    justify-content: flex-end;align-items: center;
  }
  &.kk-dialog-center{
    justify-content: center;align-items: center;
  }
}
.kk-dialog-modal{
  border-radius:4px;overflow:hidden;background:#fff;
  position: relative;z-index:1001;
  margin:20px;
  .kk-dialog-title{
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
  .kk-dialog-body{
    padding:24px;
  }
  .kk-dialog-footer{
    padding:10px 16px;
    border-top:solid 1px #e8e8e8;
    text-align:right;
    button{
      margin:0 5px;
    }
  }
}
</style>
