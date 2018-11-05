## dialog
``` javascript
<template>
  <transition>
    <div>
      <Kk-Dialog
        modal="true"
        position="center"
        title="Basic Modal"
        width="30%"
        // visible.sync="dialogVisible"
        onOk="ok"
        onCancel="cancel"
      >
        <span>dialog content</span>
        <span slot="footer" class="dialog-footer">
          <Kk-button click="dialogVisible = false">取 消</Kk-button>
          <Kk-button type="primary" click="dialogVisible = false">确 定</Kk-button>
        </span>
      </Kk-Dialog>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'demo',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>
```
