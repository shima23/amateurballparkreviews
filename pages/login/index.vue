<template lang="pug">
  v-container
    div
      Breadcrumbs(:breadcrumbs="breadcrumbs")
      h1 ログイン
      v-text-field(v-model="loginRequestDto.mailAddress" label="メールアドレス")
      v-text-field(v-model="loginRequestDto.password" :type="'password'" label="パスワード")
      v-btn(elevation="1" @click="login()") ログイン
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'
import Breadcrumbs from '../../components/molecules/Breadcrumbs.vue'
import { LoginRequestDto } from '~/types/types'

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

  private loginRequestDto: LoginRequestDto = {
    mailAddress: '',
    password: '',
  }

  private async login() {
    let response = await this.$auth.loginWith('local', {
      data: {
        mailAddress: this.loginRequestDto.mailAddress,
        password: this.loginRequestDto.password,
      },
    })
  }
}
</script>
<style lang="sass" scoped></style>
