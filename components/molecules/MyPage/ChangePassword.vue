<template lang="pug">
  div.-change-password
    div.-title
      span パスワード変更
    div.-input-password
      p 現在のパスワード
        v-text-field(v-model="mailAddress" :type="'password'")
      p 新しいパスワード
        v-text-field(v-model="mailAddress" :type="'password'")
    div
      v-btn(elevation="1" @click="click()") 変更する
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class ChangePassword extends Vue {
  data() {
    return {}
  }

  private click() {}
}
</script>
<style lang="sass" scoped>
.-change-password
    padding: 20px
    background: #ffffff
.-title
    font-size: 24px !important
    padding-bottom: 10px
    border-bottom: 1px #e0e0e0 solid
.-input-password
    padding: 16px 0
</style>
