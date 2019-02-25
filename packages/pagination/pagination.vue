<template>
  <div :class="['kk-pagination', {'kk-pagination-large': size == 'large','kk-pagination-small': size == 'small'}]">
    <div :class="['kk-pagination-Wrap', {'kk-pagination-disabled': disabled}]">
      <div v-if="layout.includes('total')" class="kk-pagination-total">共{{this.total}}条</div>
      <div v-if="layout.includes('sizes')" class="kk-pagination-sizes">
        <select name="" id="" v-model="page_size" @change="sizeChange" :disabled="disabled" :class="{'isDisabled': disabled}">
          <option v-for="(item,index) in pageSizes" :key="index" :value="item">{{item}}</option>
        </select>
      </div>
      <div v-if="layout.includes('prev')" :class="['kk-pagination-prev',{'isDisabled': disabled}]" @click="toPrev">
        <Kk-Icon icon="return" :color="disabled ? '#c0c4cc' : 'rgba(0,0,0,.65)'" :size="size == 'small' ? 14 : size == 'large' ? 24 : 20"></Kk-Icon>
      </div>
      <div v-if="layout.includes('pager')" class="kk-pagination-pager">
        <ul>
          <li v-for="(item,index) in pagerList" :key="index" :class="{'iconfont': typeof(item) != 'number', 'actived': item == current_page,'isDisabled': disabled}" @click="currentChange(item)" v-html="item"></li>
        </ul>
      </div>
      <div v-if="layout.includes('next')" :class="['kk-pagination-next',{'isDisabled': disabled}]" @click="toNext">
        <Kk-Icon icon="enter" :color="disabled ? '#c0c4cc' : 'rgba(0,0,0,.65)'" :size="size == 'small' ? 14 : size == 'large' ? 24 : 20"></Kk-Icon>
      </div>
      <div v-if="layout.includes('jumper')" class="kk-pagination-jumper">
        前往<input type="text" :class="{'isDisabled': disabled}" :disabled="disabled" v-model="current_page2" @keyup.enter="currentChange(current_page2)">页
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'Kk-Pagination',
  data () {
    return {
      page_size: 10,
      current_page: 1,
      current_page2: 1
    }
  },
  computed: {
    pagerList () {
      var pagerSize = Math.ceil(this.total/this.page_size)
      if(pagerSize > 7) {
        if(this.current_page < 5) {
          return [1,2,3,4,5,6,'&#xe735;',pagerSize]
        } else if(this.current_page >= 5 && this.current_page < 7) {
          return [1,'&#xe735;',this.current_page-2,this.current_page-1,this.current_page,this.current_page+1,this.current_page+2,'&#xe735;',pagerSize]
        }  else if(this.current_page >= 7) {
          return [1,'&#xe735;',pagerSize-5,pagerSize-4,pagerSize-3,pagerSize-2,pagerSize-1,pagerSize]
        }
      } else {
        var pagerList = []
        for(let i = 1; i <= pagerSize; i++) {
          pagerList.push(i)
        }
        return pagerList
      }
    }
  },
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSizes: {
      type: Array,
      default: []
    },
    pageSize: {
      type: Number,
      default: 10
    },
    layout: {
      type: Array,
      default: ['pager']
    },
    total: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    }
  },
  mounted () {
    this.page_size = this.pageSize
    this.current_page = this.currentPage
  },
  methods: {
    sizeChange () {
      if(!this.disabled){
        if(this.current_page > Math.ceil(this.total/this.page_size)) {
          this.current_page = Math.ceil(this.total/this.page_size)
          this.current_page2 = Math.ceil(this.total/this.page_size)
        }
        this.$emit('sizeChange',{pageSize:this.page_size,currentPage:this.current_page})
      }
    },
    currentChange (item) {
      if(!this.disabled){
        if(typeof(item) == 'number') {
          if(item && item <= Math.ceil(this.total/this.page_size)) {
            this.current_page = item
            this.current_page2 = item
            this.$emit('currentChange',this.current_page)
          } else if(item && item > Math.ceil(this.total/this.page_size)) {
            this.current_page = Math.ceil(this.total/this.page_size)
            this.current_page2 = Math.ceil(this.total/this.page_size)
            this.$emit('currentChange',this.current_page)
          }
        }
      }
    },
    toPrev() {
      if(!this.disabled){
        if(this.current_page > 1) {
          this.current_page--
          this.current_page2--
          this.$emit('currentChange',this.current_page)
        }
      }
    },
    toNext() {
      if(!this.disabled){
        if(this.current_page < Math.ceil(this.total/this.page_size)) {
          this.current_page++
          this.current_page2++
          this.$emit('currentChange',this.current_page)
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
  .kk-pagination{
    text-align:center;color:rgba(0,0,0,.65);font-size:14px;
    height:32px;
    -moz-user-select: none;
    -o-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .kk-pagination-total{
      margin-right:8px;line-height:32px;
    }
    .kk-pagination-sizes{
      margin:0 8px;
      select{
        border-color:#d9d9d9;border-radius:4px;
        color:rgba(0,0,0,.65);
        width:60px;height:32px;
        cursor:pointer;
      }
    }
    .kk-pagination-prev{
      width:30px;height:30px;line-height:30px;text-align:center;
      transition: all .3s cubic-bezier(.645,.045,.355,1);
      border:solid 1px #d9d9d9;border-radius:4px;
      margin:0 4px;cursor:pointer;
      &:hover{
        border-color:#1890ff;color:#1890ff;
      }
      .kk-icon{
        margin:5px;
      }
    }
    .kk-pagination-pager{
      ul{
        overflow:hidden;
      }
      li{
        float:left;width:30px;height:30px;line-height:30px;text-align:center;
        border:solid 1px #d9d9d9;border-radius:4px;
        margin:0 4px;cursor:pointer;
        transition: all .3s cubic-bezier(.645,.045,.355,1);
        &:hover{
          border-color:#1890ff;color:#1890ff;
        }
        &.actived{
          background:#1890ff;color:#fff;
        }
      }
    }
    .kk-pagination-next{
      width:30px;height:30px;line-height:30px;text-align:center;
      transition: all .3s cubic-bezier(.645,.045,.355,1);
      border:solid 1px #d9d9d9;border-radius:4px;
      margin:0 4px;cursor:pointer;
      &:hover{
        border-color:#1890ff;color:#1890ff;
      }
      .kk-icon{
        margin:5px;
      }
    }
    .kk-pagination-jumper{
      margin-left:8px;
      input{
        width:26px;padding:0 11px;height:30px;line-height:30px;
        border:solid 1px #d9d9d9;border-radius:4px;
        margin:0 8px;
      }
    }
    .kk-pagination-Wrap{
      display:inline-block;height:32px;
      overflow:hidden;
      > div{
        float:left;
      }
      &.kk-pagination-disabled{
        cursor:not-allowed;
        color: #c0c4cc;
        .isDisabled{
          cursor:not-allowed;
          color: #c0c4cc;
          background:#fff;
          &:hover{
            border-color:#c0c4cc;
          }
        }
      }
    }
    &.kk-pagination-large{
      font-size:16px;height:38px;
      .kk-pagination-Wrap{
        height:38px;
      }
      .kk-pagination-total{
        line-height:38px;
      }
      .kk-pagination-sizes select{
        width:60px;height:38px;
      }
      .kk-pagination-prev{
        width:36px;height:36px;line-height:30px;
        .kk-icon{
          margin:6px;
        }
      }
      .kk-pagination-pager li{
        width:36px;height:36px;line-height:36px;
      }
      .kk-pagination-next{
        width:36px;height:36px;line-height:36px;
        .kk-icon{
          margin:6px;
        }
      }
      .kk-pagination-jumper input{
        height:36px;line-height:36px;
      }
    }
    &.kk-pagination-small{
      font-size:12px;height:24px;
      .kk-pagination-Wrap{
        height:24px;
      }
      .kk-pagination-total{
        line-height:24px;
      }
      .kk-pagination-sizes select{
        width:60px;height:24px;
      }
      .kk-pagination-prev{
        width:22px;height:22px;line-height:22px;
        .kk-icon{
          margin:4px;
        }
      }
      .kk-pagination-pager li{
        width:22px;height:22px;line-height:22px;
      }
      .kk-pagination-next{
        width:22px;height:22px;line-height:22px;
        .kk-icon{
          margin:4px;
        }
      }
      .kk-pagination-jumper input{
        height:22px;line-height:22px;
      }
    }
  }
</style>
