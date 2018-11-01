<template>
  <transition>
    <div>
      <Zxd-dialog
        :modal="true"
        position="center"
        title="Basic Modal"
        width="30%"
        :visible.sync="dialogVisible"
        :onOk="ok"
        :onCancel="cancel"
      >
        <span>dialog content</span>
        <span slot="footer" class="dialog-footer">
          <Zxd-button @click="dialogVisible = false">取 消</Zxd-button>
          <Zxd-button type="primary" @click="dialogVisible = false">确 定</Zxd-button>
        </span>
      </Zxd-dialog>
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
