<template>
  <div class="">
    <section>
      <h2>codeMirror를 통해 코드를 표현하고 간단한 실행을 해볼 수 있습니다.</h2>
      <code-base :snippet="getCode('basic')"></code-base>
    </section>
  </div>
</template>

<script>
import codeSnippets from '../components/CodeSnippets'
import codeBase from '../components/Base'
import {body, beautify} from '../util/utils'

export default {
  name: 'gettingstarted',
  data () {
    return {
    }
  },
  methods: {
    getCode (snippetName) {
      return beautify(body(codeSnippets.data().snippets[snippetName]))
    }
  },
  components: {
    codeBase
  }
}
</script>

<style>

</style>
