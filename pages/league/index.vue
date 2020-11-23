<template lang="pug">
  v-container
    div.-prefectures
      Breadcrumbs(:breadcrumbs="breadcrumbs")
      secion
        div
          h2 リーグを探す
          div.-search
            div.-t-header
              h2 地域から探す
            div
              table
                tr(v-for="(item, index) in areaList")
                  th {{item.area}}
                  td
                    span(v-for="pref in item.prefs" @click="onClick") {{ pref }}
        div
          h2 リーグを登録する
          button 登録する
          p ※リーグ登録にはログイン及びチーム登録が必要です
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)

@Component
export default class League extends Vue {
  private breadcrumbs = [
    {
      text: 'ホーム',
      disabled: false,
      href: '/',
    },
    {
      text: 'リーグ検索',
      disabled: true,
      href: '',
    },
  ]

  private areaList = [
    {
      area: '北海道・東北',
      prefs: ['北海道', '青森', '岩手', '宮城', '秋田', '山形', '福島'],
    },
    {
      area: '関東',
      prefs: ['東京', '神奈川', '埼玉', '千葉', '茨城', '栃木', '群馬', '山梨'],
    },
    {
      area: '信越・北陸',
      prefs: ['新潟', '長野', '富山', '石川', '福井'],
    },
    {
      area: '東海',
      prefs: ['愛知', '岐阜', '静岡', '三重'],
    },
    {
      area: '近畿',
      prefs: ['大阪', '兵庫', '京都', '滋賀', '奈良', '和歌山'],
    },
    {
      area: '中国',
      prefs: ['鳥取', '島根', '岡山', '広島', '山口'],
    },
    {
      area: '四国',
      prefs: ['徳島', '香川', '愛媛', '高知'],
    },
    {
      area: '九州・沖縄',
      prefs: ['福岡', '佐賀', '長崎', '熊本', '大分', '宮崎', '鹿児島', '沖縄'],
    },
  ]

  private onClick() {
    alert('aaa')
  }
}
</script>
<style lang="sass">
.-prefectures
  font-size: 14px !important
  h1
    font-size: 20px
  table
      width: 100%
      border: 1px solid #808080
      padding: 12px
      text-align: left
      background: url("../../static/japanesemap.png") center no-repeat
      background-size: contain
  th
      padding-right: 24px
  td
      padding: 4px
  span
      padding: 0 4px
      cursor: pointer
  span:hover
      font-weight: bold
      text-decoration: underline
  .-search
      width: 450px
  .-t-header
      width: 100%
      padding: 2px
      border-top: 1px solid #808080
      border-left: 1px solid #808080
      border-right: 1px solid #808080
      background: #8fbc8f
  .-t-header h2
      font-size: 16px
</style>
