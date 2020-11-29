<template lang="pug">
  div.-prefectures
    Content(maxWidth="960px").mt-s
      Breadcrumbs(:breadcrumbs="breadcrumbs")
    Content(maxWidth="100%").-heading
      div.mt-s.flex-p-c
        h1 私設リーグ
      div.mt-xs.flex-p-c
        p Private League
    Content(maxWidth="100%")
      div.mt-xxl.flex-p-c
        h2 About Private League
      div.mt-m.-description
        p JB-Linksでは、草野球の私設リーグ運営を簡単に行うことのできるシステムを提供しています。
        p すでに登録されているリーグの検索、新規にリーグを立ち上げることが可能です。
    Content(maxWidth="100%")
      div.mt-xxl.flex-p-c
        h2 私設リーグを検索する
      div.mt-m.flex-p-c
        p 地域を選択後、検索ページでレベルなどで詳細な検索が可能です。
      div.-search-outer.flex-p-c
        div.-search
          table
            tr(v-for="(item, index) in areaList")
              th {{item.area}}
              td
                span(v-for="pref in item.prefs" @click="onClick") {{ pref }}
    Content(maxWidth="100%")
      div.mt-xxl.flex-p-c
        h2 新しく施設リーグを登録する
      div.mt-m.-description
        p あなたが主宰、または管理する私設リーグを登録します。登録後は、マイページからリーグに関する情報の編集が可能です。
        p ※リーグ登録を行うには、あなたのアカウントがチームに紐づいている必要があります。
      div.mt-xl.flex-p-c
        div.mb-xxl
          button.-btn 登録する
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'
import Content from '~/components/molecules/wrapper/Content.vue'

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
      text: '私設リーグ',
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
    this.$router.push('/league/search')
  }
}
</script>
<style lang="sass">
.-prefectures
  font-size: 14px !important
  .-heading
    padding: 12px 0
    background: #dfeaf2
  h2
    font-size: 24px
  .-description
    text-align: center
  .-register
    margin-left: 48px
  table
      width: 100%
      padding: 12px
      text-align: left
      background: url("../../static/japanesemap.png") center no-repeat
      background-size: contain
  th
      padding-right: 24px
  td
      padding: 8px
  span
      padding: 0 4px
      cursor: pointer
  span:hover
      font-weight: bold
      text-decoration: underline
  .-search-outer
    width: 100%
    background: url("../../static/bg/bg_pattern_00.gif") repeat scroll 0 0 transparent
  .-search
    width: 500px
    margin: 12px
    background: #ffffff
  .-btn
      background: #049de3
      padding: 8px 24px
      color: #ffffff
      border-radius: 24px
      font-size: 20px
  .-btn:hover
      background: #05AFFC
</style>
