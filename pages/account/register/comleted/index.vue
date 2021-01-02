<template lang="pug">
  v-container
    div.account
      Breadcrumbs(:breadcrumbs="breadcrumbs")
      h1 会員登録完了
      p 会員登録が完了しました。
      p 登録いただいたメールアドレス宛に仮パスワードを送信しましたので、画面右上のログイン画面より、ログインしてください。
      v-btn(elevation="1") ホームへ戻る
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'
import Breadcrumbs, {
  Breadcrumb,
} from '~/components/molecules/breadcrumb/Breadcrumbs.vue'

Vue.use(Router)

@Component
export default class AccountCompleted extends Vue {
  private breadcrumbs = [
    {
      text: 'ホーム',
      disabled: false,
      href: '/',
    },
    {
      text: '会員登録',
      disabled: false,
      href: '/account/register',
    },
    {
      text: '会員登録完了',
      disabled: true,
      href: '',
    },
  ]

  private selectBtn() {
    this.$router.push({ path: `/` })
  }
}
</script>
<style lang="sass" scoped></style>
