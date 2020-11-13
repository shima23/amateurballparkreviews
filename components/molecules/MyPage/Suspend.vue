<template lang="pug">
  div.-suspend
    div.-title
      span 退会する
    div.-description
      p 一度退会すると、ユーザーは復元できません。よろしいですか？
    div
      v-btn(elevation="1" @click="click()") 退会する
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Suspend extends Vue {
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.-suspend
    padding: 20px
    background: #ffffff
.-title
    font-size: 24px !important
    padding-bottom: 10px
    border-bottom: 1px #e0e0e0 solid
.-description
    padding-top: 16px
</style>
