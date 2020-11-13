<template lang="pug">
  div.-profile
    div.-title
      span プロフィール
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Profile extends Vue {
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.-profile
    padding: 20px
    background: #ffffff
.-title
    font-size: 24px !important
    padding-bottom: 10px
    border-bottom: 1px #e0e0e0 solid
</style>
