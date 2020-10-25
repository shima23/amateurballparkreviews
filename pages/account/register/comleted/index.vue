<template>
    <v-container>
        <div class="account">
          <Breadcrumbs :breadcrumbs="breadcrumbs" />
          <h1>会員登録完了</h1>
          <p>会員登録が完了しました。</p>
          <p>
            登録いただいたメールアドレス宛に仮パスワードを送信しましたので、
            <br>
            画面右上のログイン画面より、ログインしてください。
          </p>
          <v-btn elevation="1">ホームへ戻る</v-btn>
        </div>
    </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'
import Breadcrumbs, {
  Breadcrumb,
} from '../../../../components/molecules/Breadcrumbs.vue'

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
    this.$router.push({ path: `/`})
  }
}
</script>
<style lang="sass" scoped>
.account
</style>