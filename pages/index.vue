<template lang="pug">
  div.top
    div.contents
      p.home-text1 Let's enjoy Baseball.
      p.home-text2 Amateur Ballpark Reviewsは、草野球(軟式野球)プレイヤーのための「みんなで作る」球場レビューサイトです。
      div(@click="selectSearch()").circle
        p.menu-title
          v-icon(color="#ffffff") mdi-magnify
          | 球場検索
        p.menu-text ・条件を入力し、野球場を検索
        p.menu-text ・各球場のレビューを閲覧・投稿できます
      div.circle
        p.menu-title
          v-icon(color="#ffffff") mdi-star-outline
          | 球場ランキング
        p.menu-text ・ユーザーが評価した人気球場ランキング
      div.circle
        p.menu-title 
          v-icon(color="#ffffff") mdi-feather
          | 野球場レポート
        p.menu-text ・みんなで作る1つの野球場ブログ
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)

@Component
export default class Account extends Vue {
  private selectSearch() {
    this.$router.push('/ballpark')
  }
}
</script>
<style lang="sass">
.top
  background: url("../static/ballpark.jpg") no-repeat center center fixed #000000
  -webkit-background-size: cover
  -moz-background-size: cover
  -o-background-size: cover
  background-size: cover
  opacity: 0.8
  min-height: 100%

.home-text1
  font-size: 50px
  color: #ffffff
  font-family: 'Open Sans', sans-serif
  font-weight: bold

.home-text2
  font-size: 16px
  color: #ffffff
  font-family: 'Open Sans', sans-serif
  font-weight: bold

.contents
  padding-top: 50px
  padding-left: 50px

.circle
  width: 300px
  height: 120px
  border-radius: 20px
  box-shadow: 5px 10px 20px rgba(0,0,0,0.25)
  line-height: 5px
  background: rgba(0,0,0,0.9)
  margin-left: auto
  margin-right: 20px
  margin-top: 20px
  padding-top: 10px

.circle:hover
  cursor: pointer
  background-color: #555555
  border: solid 1px #999999

.menu-title
  font-size: 20px
  padding-left: 5px
  color: #ffffff

.menu-text
  font-size: 12px
  padding-left: 10px
  color: #ffffff

body
  height: 100%
</style>
