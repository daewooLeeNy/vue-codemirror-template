<template>
  <div class="">
    <slot name="desc"></slot>

    <template v-if="isExecutable()">
      <div class="actions">
        <md-button type="button" name="button" @click="execute" class="md-primary" :disabled="!isExecutable()">Execute</md-button>
        <md-button type="button" name="button" v-if="error" @click="showError" class="md-warn" :disabled="!inApp">Show error</md-button>
        <md-button type="button" name="button" @click="edit" class="md-primary">
          <template v-if="editorOptions.readOnly">
            Edit
          </template>
          <template v-else>
            Editing
          </template>
      </md-button>
    </div>
    </template>

    <codemirror v-model="code" :options="editorOptions"></codemirror>
  </div>
</template>

<script>
import common from './common'

export default {
  name: 'code-base',
  props: ['snippet'],
  mixins: [common],
  data () {
    return {
    }
  },
  created () {
    this.code = this.$props.snippet
  },
  methods: {
    execute () {
      common.methods.execute.call(this)
      this.$emit('execute', this)
    }
  }
}
</script>
<style>
.CodeMirror {
  border: 1px solid #eee;
  height: auto;
  text-align: left;
}
.actions{
  text-align: left
}
</style>
