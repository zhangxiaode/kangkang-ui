## button使用

``` javascript
<template>
  <div>
    <Kk-Pagination
      @sizeChange="handleSizeChange" // 每页个数改变时执行
      @currentChange="handleCurrentChange" // 页码改变时执行
      :currentPage="currentPage" // 当前页码
      :pageSizes="[10, 20, 30, 40]" // 每页个数列表
      :pageSize="pageSize" // 每页显示个数
      :layout="['total', 'sizes', 'prev', 'pager', 'next', 'jumper']" // 显示内容：total数据总数；sizes每页个数；prev上一页；pager页码；next下一页；jumper页码跳转
      :total="total" // 数据总个数
      disabled // 是否允许操作
      size="default"  // large default small
    ></Kk-Pagination>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 100
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val.pageSize} 条`)
      console.log(`当前页: ${val.currentPage}`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
```
