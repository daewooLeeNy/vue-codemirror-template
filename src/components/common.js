import { body, beautify, executeFunction } from '../util/utils'

export default {
  props: ['codeName', 'readOnly', 'executable', 'externalExecuatble'],
  data () {
    return {
      code: '',
      error: '',
      editorOptions: {
        mode: 'text/javascript',
        readOnly: true
      },
      enableExecute: true
    }
  },
  created () {
    if (this.$props['codeName'] && this.snippets[this.$props['codeName']]) {
      this.code = beautify(body(this.snippets[this.$props['codeName']]))
    }

    if (this.$props['readOnly'] !== undefined) {
      this.editorOptions.readOnly = this.$props['readOnly']
    }

    if (this.$props['executable'] !== undefined) {
      this.enableExecute = this.$props['executable']
    }
  },
  methods: {
    execute () {
      var result = executeFunction.call(this, this.code)
      if (result !== true) {
        this.error = result
      }
    },
    showError () {
      alert(this.error.stack)
    },
    edit () {
      this.editorOptions.readOnly = !this.editorOptions.readOnly
    },
    isExecutable () {
      return this.enableExecute
    }
  }
}
