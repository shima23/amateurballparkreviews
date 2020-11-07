<template>
  <v-container>
    <div class="account">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <h1>会員登録</h1>
      <v-text-field v-model="mailAddress" label="メールアドレス"></v-text-field>
      <v-text-field v-model="nickname" label="ニックネーム"></v-text-field>
      <v-btn elevation="1" v-on:click="register()">登録する</v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'
import Breadcrumbs, {
  Breadcrumb,
} from '../../../components/molecules/Breadcrumbs.vue'

Vue.use(Router)

@Component
export default class Account extends Vue {
  private breadcrumbs = [
    {
      text: 'ホーム',
      disabled: false,
      href: '/',
    },
    {
      text: '会員登録',
      disabled: true,
      href: '',
    },
  ]

  data() {
    return {
      mailAddress: '',
      nickname: '',
    }
  }

  private register() {
    this.$router.push({ path: `/account/register/comleted` })
  }
}
</script>
<style lang="sass" scoped></style>
