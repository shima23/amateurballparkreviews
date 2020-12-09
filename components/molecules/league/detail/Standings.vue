<template lang="pug">
  div
    span.mr-xs 年度切替：
    select(:value="selectedYear" @change="setStanding($event.target.value)").mt-s.-select-box
      option(v-for="(year, index) in yearList" :value="year" :label="year")
    table.mt-s
      tr
        th 順位
        th チーム名
        th 試合数
        th 勝利
        th 敗戦
        th 引分
        th 勝率
        th 得点
        th 失点
        th 打率
        th 防御率
      tr(v-for="(item, key) in standings" :key="key")
        td {{item.order}}
        td {{item.teamNeme}}
        td {{item.games}}
        td {{item.win}}
        td {{item.lose}}
        td {{item.draw}}
        td {{item.winRate}}
        td {{item.battingRuns}}
        td {{item.pitchingRuns}}
        td {{item.teamBattingAvg}}
        td {{item.teamEra}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { StantingTeam, AllStandings } from '~/types/types'

@Component
export default class Standings extends Vue {
  private selectedYear = ''
  private yearList: Array<string> = []
  private standings: Array<StantingTeam> = []
  private allStandings: AllStandings = {
    yearStandingMap: {
      '2020': [
        {
          order: 1,
          teamNeme: '横浜メッツ',
          games: 16,
          win: 11,
          lose: 4,
          draw: 1,
          winRate: '.688',
          battingRuns: 102,
          pitchingRuns: 52,
          teamBattingAvg: '.292',
          teamEra: '2.51',
        },
        {
          order: 2,
          teamNeme: 'Fulluters',
          games: 16,
          win: 10,
          lose: 5,
          draw: 1,
          winRate: '.625',
          battingRuns: 89,
          pitchingRuns: 48,
          teamBattingAvg: '.279',
          teamEra: '2.37',
        },
        {
          order: 3,
          teamNeme: '球運会',
          games: 16,
          win: 7,
          lose: 9,
          draw: 0,
          winRate: '.438',
          battingRuns: 54,
          pitchingRuns: 58,
          teamBattingAvg: '.241',
          teamEra: '3.29',
        },
        {
          order: 4,
          teamNeme: 'シャドウズ',
          games: 16,
          win: 3,
          lose: 13,
          draw: 0,
          winRate: '.188',
          battingRuns: 41,
          pitchingRuns: 92,
          teamBattingAvg: '.224',
          teamEra: '6.42',
        },
      ],
      '2019': [
        {
          order: 1,
          teamNeme: '横浜メッツ',
          games: 16,
          win: 11,
          lose: 4,
          draw: 1,
          winRate: '.688',
          battingRuns: 66,
          pitchingRuns: 39,
          teamBattingAvg: '.292',
          teamEra: '2.51',
        },
        {
          order: 2,
          teamNeme: 'Fulluters',
          games: 16,
          win: 11,
          lose: 4,
          draw: 1,
          winRate: '.688',
          battingRuns: 66,
          pitchingRuns: 39,
          teamBattingAvg: '.292',
          teamEra: '2.51',
        },
      ],
    },
  }

  created() {
    Object.keys(this.allStandings.yearStandingMap).forEach((key) =>
      this.yearList.push(key)
    )
    const today = new Date()
    const year = today.getFullYear().toString()
    this.selectedYear = year
    this.setStanding(year)
  }

  private setStanding(year: string) {
    this.selectedYear = year
    this.standings = []
    const standing = this.allStandings.yearStandingMap[year]
    standing.map((standingTeam: StantingTeam) =>
      this.standings.push(standingTeam)
    )
  }
}
</script>
<style lang="sass">
table
  border-collapse: collapse
  width: 100%
table th, table td
  border: solid 1px black
  text-align: center
table th
  color: #fff
  background: #333
  font-weight: normal
table td
  height: 50px
.-select-box
  border: 1px solid
  border-radius: 8px
  padding: 4px 24px
  font-size: 16px
</style>
