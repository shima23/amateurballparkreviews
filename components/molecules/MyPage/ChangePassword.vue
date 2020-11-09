<template>
  <div class="change-password">
    <div class="title">
      <span>パスワード変更</span>
    </div>
    <div class="input-password">
      <p>現在のパスワード</p>
      <v-text-field v-model="mailAddress" :type="'password'"></v-text-field>
      <p>新しいパスワード</p>
      <v-text-field v-model="mailAddress" :type="'password'"></v-text-field>
      <v-btn elevation="1" v-on:click="click()">変更する</v-btn>
    </div>
  </div>
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
.change-password
    padding: 20px
    background: #ffffff
.title
    font-size: 24px !important
    padding-bottom: 10px
    border-bottom: 1px #e0e0e0 solid
.input-password
    padding: 16px 0
</style>
