<template lang="pug">
  Content(maxWidth="960px").mt-s.-leagueDetailPage
    Breadcrumbs(:breadcrumbs="breadcrumbs")
    h1 {{leagueDto.leagueName}}
    ul.mt-s.-nav
      li(v-for="(item, key) in menuList" :key="key" @click="clickMenu(item.index)") {{ item.name }}
    Top(v-if="activeMenu === 0" :leaderStatsList="leagueDto.leaderStatsList")
    Overview(v-if="activeMenu === 1" :description="leagueDto.description")
    Teams(v-if="activeMenu === 2")
    Standings(v-if="activeMenu === 4")
    Stats(v-if="activeMenu===5")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { LeagueDto } from '~/types/types'
import { LeagueResponse } from '~/types/api'
import { Breadcrumb } from '~/components/molecules/breadcrumb/Breadcrumbs.vue'
import axios from 'axios'
import Content from '~/components/molecules/wrapper/Content.vue'
import Top from '~/components/molecules/league/detail/Top.vue'
import Overview from '~/components/molecules/league/detail/Overview.vue'
import Standings from '~/components/molecules/league/detail/Standings.vue'
import Stats from '~/components/molecules/league/detail/Stats.vue'
import Teams from '~/components/molecules/league/detail/Teams.vue'

@Component
export default class LeagueDetailPage extends Vue {
  private breadcrumbs = [
    { text: 'ホーム', disabled: false, href: '/' },
    { text: '私設リーグ', disabled: false, href: '/league' },
    { text: 'リーグ検索', disabled: false, href: '/league/search' },
    { text: 'リーグ詳細', disabled: true, href: '' },
  ]

  private activeMenu = 0

  private menuList = [
    { index: 0, name: 'リーグトップ' },
    { index: 1, name: 'リーグ概要' },
    { index: 2, name: '所属チーム' },
    { index: 3, name: '日程表' },
    { index: 4, name: '順位表' },
    { index: 5, name: '個人成績' },
    { index: 6, name: '過去のお知らせ' },
  ]

  private leagueInfo: any

  private leagueDto = {
    leagueName: '',
    description: '',
    leaderStatsList: [
      {
        title: '打率',
        rank1user: '高島',
        rank1team: '横浜メッツ',
        rank1stats: '.421',
        rank2user: '田中',
        rank2team: 'Flutters',
        rank2stats: '.404',
        rank3user: '織田',
        rank3team: 'シャドウズ',
        rank3stats: '.398',
      },
      {
        title: '本塁打',
        rank1user: '田中',
        rank1team: 'Flutters',
        rank1stats: '6本',
        rank2user: '織田',
        rank2team: 'シャドウズ',
        rank2stats: '3本',
        rank3user: '村田',
        rank3team: '球運会',
        rank3stats: '2本',
      },
      {
        title: '勝利数',
        rank1user: '藤井',
        rank1team: '横浜メッツ',
        rank1stats: '4勝',
        rank2user: '河田',
        rank2team: '球運会',
        rank2stats: '3勝',
        rank3user: '沢井',
        rank3team: '横浜メッツ',
        rank3stats: '2勝',
      },
      {
        title: '防御率',
        rank1user: '藤井',
        rank1team: '横浜メッツ',
        rank1stats: '1.84',
        rank2user: '久保',
        rank2team: 'Flutters',
        rank2stats: '2.38',
        rank3user: '河田',
        rank3team: '球運会',
        rank3stats: '3.55',
      },
    ],
  }

  created() {
    this.getLeague()
  }

  private async getLeague() {
    const response = await this.$store.dispatch('modules/league/getLeague', {
      leagueId: this.$route.params.id,
      token: this.$auth.getToken('local'),
    })
    if (response.status === 200) {
      this.leagueInfo = this.$store.getters['modules/league/leagueResponse']
      this.leagueDto.leagueName = this.leagueInfo.league.leagueName
      this.leagueDto.description = this.leagueInfo.league.description
    }
  }

  private clickMenu(index: number) {
    this.$data.activeMenu = index
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
  .-nav li:hover
    color: #fff
    background-color: #a9a9a9
    cursor: pointer
</style>
