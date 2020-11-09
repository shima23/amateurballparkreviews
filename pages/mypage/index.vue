<template>
  <div class="custom-container">
    <div class="test">
      <img src="https://i.imgur.com/RUcLg1s.png" class="image" />
      <div>{{ nickname }}</div>
      <div>{{ mailAddress }}</div>
    </div>
    <div class="user-infomation">
      <div class="side-bar">
        <ul>
          <li
            v-for="(item, key) in menuList"
            :key="key"
            v-on:click="clickMenu(item.index)"
          >
            <a href="#">{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="menu-child">
        <Profile v-if="$data.activeMenu === 0" />
        <ChangePassword v-if="$data.activeMenu === 3" />
        <Suspend v-if="$data.activeMenu === 4" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Profile from '~/components/molecules/MyPage/Profile.vue'
import ChangePassword from '~/components/molecules/MyPage/ChangePassword.vue'
import Suspend from '~/components/molecules/MyPage/Suspend.vue'

@Component({
  components: {
    Profile,
    ChangePassword,
    Suspend,
  },
})
export default class Mypage extends Vue {
  data() {
    return {
      nickname: this.$auth.user.nickname,
      mailAddress: this.$auth.user.mailAddress,
      activeMenu: 0,
    }
  }

  private menuList = [
    {
      index: 0,
      name: 'プロフィール',
    },
    {
      index: 1,
      name: '投稿管理',
    },
    {
      index: 2,
      name: 'フレンド管理',
    },
    {
      index: 3,
      name: 'パスワード変更',
    },
    {
      index: 4,
      name: '退会する',
    },
  ]

  private clickMenu(index: number) {
    this.$data.activeMenu = index
  }
}
</script>
<style lang="sass" scoped>
.custom-container
  min-height: 100%
  padding-bottom: 16px
  background: #efefef !important
.test
  width: 100%
  background: linear-gradient(#757f9a, #d7dde8)
  min-height: 300px
  margin: 0 auto
  padding-top: 20px
  text-align: center
.image
  max-width: 200px
  max-height: 200px
  border-radius: 130px
.user-infomation
  display: flex
  flex-direction: row
  width: 1200px
  padding-top: 10px
  margin: 0 auto
.side-bar
.menu-child
  width: 100%
  padding-left: 16px
ul
  width: 240px
  margin: 0
  padding: 0
  list-style-type: none
  background-color: #ffffff
li
  border-bottom: 5px solid #efefef
  font-size: 14px
li a
  display: block
  padding: 8px 16px
  text-decoration: none
  color: #000000
li:last-child
  border-bottom: none
li a.active
  color: #ffffff
  background-color: #AAAAAA
li a:hover:not(.active)
  color: #ffffff
  background-color: #1b2538
</style>
