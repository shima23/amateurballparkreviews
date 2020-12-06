<template lang="pug">
  Content(maxWidth="960px").mt-s.-leagueDetailPage
    Breadcrumbs(:breadcrumbs="breadcrumbs")
    h1 {{leagueDto.leagueName}}
    ul.mt-s.-nav
      li リーグトップ
      li リーグ概要
      li 所属チーム
      li 日程表
      li 順位表
      li 個人成績
    Top(:news="leagueDto.news")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { LeagueDto } from '~/types/types'
import { Breadcrumb } from '~/components/molecules/Breadcrumbs.vue'
import Content from '~/components/molecules/wrapper/Content.vue'
import Top from '~/components/molecules/league/detail/Top.vue'

@Component
export default class LeagueDetailPage extends Vue {
  private breadcrumbs = [
    { text: 'ホーム', disabled: false, href: '/' },
    { text: '私設リーグ', disabled: false, href: '/league' },
    { text: 'リーグ検索', disabled: false, href: '/league/search' },
    { text: 'リーグ詳細', disabled: true, href: '' },
  ]

  private leagueDto = {
    leagueName: '',
    news: [
      '[2020/10/20]お知らせお知らせお知らせお知らせお知らせ',
      '[2020/10/20]お知らせお知らせお知らせお知らせお知らせ',
    ],
  }

  created() {
    this.leagueDto.leagueName = '横浜プラネットリーグ'
  }
}
</script>
<style lang="sass">
.-leagueDetailPage
  .-nav
    list-style: none
    display: flex
    justify-content:flex-start
  .-nav li
    width: 160px
    text-align: center
    background: #333
    height: 50px
    line-height: 50px
    margin-right: 2px
    color: #fff
</style>
