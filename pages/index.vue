<template lang="pug">
  div.top
    section.-header
      h1 Let's enjoy Baseball.
      p JB-Links
    section
      h1.-contents-title What's New
      div.-whats-new
        div.-news
          p 2020/11/15
            span.-message 施設リーグ検索にお問い合わせフォームを追加しました
          p 2020/11/10
            span.-message 公式ブログ更新（11/10）
          p 2020/10/28
            span.-message サイトリニューアルのお知らせ
          p 2020/09/24
            span.-message 利用規約を一部更新しました
          div.-before-news
            nuxt-link(to="/news")
              p 過去のお知らせはこちら
    section
      h1.-contents-title Contents
      div.-contents-card
        div.-card
          div.-contents-image
            img(src="../static/logo/team-logo.png").-image
          p チーム検索
        div.-card
          div.-contents-image
            img(src="../static/logo/team-logo.png").-image
          p チーム登録/チーム管理
        div.-card
          div.-contents-image
            img(src="../static/logo/player-logo.png").-image
          p メンバー募集
        div.-card
          div.-contents-image
            img(src="../static/logo/league-logo.png").-image
          p リーグ検索
        div.-card
          div.-contents-image
            img(src="../static/logo/player-search-logo.png").-image
          p 選手検索
        div.-card
          div.-contents-image
            img(src="../static/logo/ballpark-logo.png").-image
          p 球場検索
        div.-card
          div.-contents-image
            img(src="../static/logo/score-logo.png").-image
          p メンバー表/スコアシート生成
        div.-card
          div.-contents-image
            img(src="../static/logo/blog-logo.png").-image
          p 公式ブログ
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)

@Component
export default class Top extends Vue {
  private selectSearch() {
    this.$router.push('/ballpark')
  }
}
</script>
<style lang="sass">
.top
  .-header
    background: url("../static/ballpark.jpg")
    background-size: cover
    height: 480px
    padding: 100px
    box-sizing: border-box
    color: #fff
  .-contents-title
    text-align: center
    padding: 8px
    background: #ffffff
  .-whats-new
    display: flex
    justify-content: center
    align-items: center
    background: #e6e6e6
    height: auto
    min-height: 300px
    .-news
      padding: 24px
      width: 66%
      height: auto
      background: #ffffff
      font-size: 14px
      .-message
        padding-left: 36px
      .-before-news
        font-size: 14px
        text-align: right
  .-contents-card
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    padding: 3%
    box-sizing: border-box
    background: #e6e6e6
  .-contents-card div
    width: 23%
    height: 300px
    margin: 0 0 2.5vw
    padding: 1%
    box-sizing: border-box
    background: #ffffff
    text-align: center
    border-radius: 16px
    .-contents-image
      width: 100%
      height: auto
      max-height: 100px
    .-image
      width: 33%
      height: 33%
  .-card
  .-card:hover
     background: #696969
     color: #ffffff
     cursor: pointer
</style>
