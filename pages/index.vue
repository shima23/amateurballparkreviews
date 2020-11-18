<template lang="pug">
  div.top
    section.-header
      h1 Let's enjoy Baseball.
      p JB-Links
      nuxt-link(v-if="!$auth.loggedIn" to="/account/register").-btn-icon 無料会員登録
    section
      h1.-contents-title What's New
      div.-whats-new
        div.-news
          p(v-for="(item, index) in news") {{item.date}}
            span.-message {{item.text}}
          div.-before-news
            nuxt-link(to="/news")
              p 過去のお知らせはこちら
    section
      h1.-contents-title Contents
      div.-contents-card
        div(v-for="(item, index) in contentsCard").-card
          div.-contents-image
            img(:src="item.imgSrc").-image
            p {{item.title}}
            p {{item.text}}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)

@Component
export default class Top extends Vue {
  private contentsCard = [
    {
      imgSrc: '/_nuxt/static/logo/team.png',
      title: 'チーム検索',
      text: '登録されているチームを検索します',
      to: '',
    },
    {
      imgSrc: '/_nuxt/static/logo/team.png',
      title: 'チーム登録/チーム管理',
      text: 'あなたの所属するチームを新規登録、および管理します',
      to: '',
    },
    {
      imgSrc: '/_nuxt/static/logo/player.png',
      title: 'メンバー募集',
      text: '新規メンバーの募集を確認できます',
      to: '',
    },
    {
      imgSrc: '/_nuxt/static/logo/league.png',
      title: 'リーグ検索',
      text: '地域・レベルから私設リーグを検索します',
      to: '',
    },
    {
      imgSrc: '/_nuxt/static/logo/player-search.png',
      title: '選手検索',
      text: '登録されている選手を検索します',
      to: '',
    },
    {
      imgSrc: '/_nuxt/static/logo/ballpark.png',
      title: '球場検索',
      text: '全国の球場を検索します',
      to: '',
    },
    {
      imgSrc: '/_nuxt/static/logo/score.png',
      title: 'メンバー表/スコアシート生成',
      text: 'メンバー表やスコアシートの雛形をPDF形式で出力します',
      to: '',
    },
    {
      imgSrc: '/_nuxt/static/logo/blog.png',
      title: '公式ブログ',
      text: 'JB-Links運営の広報がお伝えする公式ブログです！',
      to: '',
    },
  ]
  private news = [
    {
      date: '2020/11/15',
      text: '施設リーグ検索にお問い合わせフォームを追加しました',
    },
    {
      date: '2020/11/10',
      text: '公式ブログ更新（11/10）',
    },
    {
      date: '2020/10/28',
      text: 'サイトリニューアルのお知らせ',
    },
    {
      date: '2020/09/24',
      text: '利用規約を一部更新しました',
    },
  ]

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
  .-btn-icon
    max-width: 240px
    padding: 16px
    background: rgba(255,255,255,0.1)
    text-decoration: none
    font-size: 20px
    color: #000000
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
      margin-bottom: 24px
  .-card
  .-card:hover
     background: #696969
     color: #ffffff
     cursor: pointer
</style>
