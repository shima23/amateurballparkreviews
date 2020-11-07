<template>
  <v-container>
    <div class="account">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <h1>ログイン</h1>
      <v-text-field v-model="mailAddress" label="メールアドレス"></v-text-field>
      <v-text-field
        v-model="password"
        :type="'password'"
        label="パスワード"
      ></v-text-field>
      <v-btn elevation="1" v-on:click="login()">ログイン</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'
import Breadcrumbs, {
  Breadcrumb,
} from '../../components/molecules/Breadcrumbs.vue'

Vue.use(Router)

@Component
export default class Login extends Vue {
  private breadcrumbs = [
    {
      text: 'ホーム',
      disabled: false,
      href: '/',
    },
    {
      text: 'ログイン',
      disabled: true,
      href: '',
    },
  ]

  data() {
    return {
      mailAddress: '',
      password: '',
    }
  }

  private async login() {
    let response = await this.$auth.loginWith('local', {
      data: {
        mailAddress: this.$data.mailAddress,
        password: this.$data.password,
      },
    })
  }
}
</script>
<style lang="sass" scoped></style>
