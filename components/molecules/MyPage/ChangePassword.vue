<template lang="pug">
  div.-change-password
    div.-title
      span パスワード変更
    div.-input-password
      p 現在のパスワード
        v-text-field(v-model="reqDto.oldPassword" :type="'password'")
      p 新しいパスワード
        v-text-field(v-model="reqDto.newPassword" :type="'password'")
    div
      v-btn(elevation="1" @click="chengePassword()") 変更する
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import { ChangePasswordRequestDto } from '~/types/types'

@Component({})
export default class ChangePassword extends Vue {
  private reqDto: ChangePasswordRequestDto = {
    oldPassword: '',
    newPassword: '',
  }

  private async chengePassword() {
    const url = 'http://0.0.0.0:8080/password/change'
    var config = {
      headers: {
        Authorization: this.$auth.getToken('local'),
      },
    }
    const response = await axios.post(url, this.reqDto, config)
  }
}
</script>
<style lang="sass" scoped>
.-change-password
    padding: 24px
    background: #ffffff
.-title
    font-size: 24px !important
    padding-bottom: 12px
    border-bottom: 1px #e0e0e0 solid
.-input-password
    padding: 16px 0
</style>
