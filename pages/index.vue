<template>
  <div id="top">
    <div id="contents">
      <p id="home-text1">Let's enjoy Baseball.</p>
      <p id="home-text2">Amateur Ballpark Reviewsは、草野球(軟式野球)プレイヤーのための「みんなで作る」球場レビューサイトです。</p>
      <div class="circle" v-on:click="selectSearch()">
        <p class="menu-title"><v-icon color="#ffffff">mdi-magnify</v-icon> 球場検索</p>
        <p class="menu-text">・条件を入力し、野球場を検索</p>
        <p class="menu-text">・各球場のレビューを閲覧・投稿できます</p>
      </div>
      <div class="circle">
        <p class="menu-title"><v-icon color="#ffffff">mdi-star-outline</v-icon> 球場ランキング</p>
        <p class="menu-text">・ユーザーが評価した人気球場ランキング</p>
      </div>
      <div class="circle">
        <p class="menu-title"><v-icon color="#ffffff">mdi-feather</v-icon> 野球場レポート</p>
        <p class="menu-text">・みんなで作る1つの野球場ブログ</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)

@Component
export default class Account extends Vue {

  private selectSearch() {
    this.$router.push("/ballpark")
  }
}

</script>
<style lang="sass">
  #top
    background: url("../static/ballpark.jpg") no-repeat center center fixed #000000
    -webkit-background-size: cover
    -moz-background-size: cover
    -o-background-size: cover
    background-size: cover
    opacity: 0.8
    min-height: 100%

  #home-text1
    font-size: 50px
    color: #ffffff
    font-family: 'Open Sans', sans-serif
    font-weight: bold
  
  #home-text2
    font-size: 16px
    color: #ffffff
    font-family: 'Open Sans', sans-serif
    font-weight: bold
  
  #contents
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