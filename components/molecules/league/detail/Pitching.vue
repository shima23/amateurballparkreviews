<template lang="pug">
  div.pitching
    table.mt-s.-p-stats-table
      tr
        th(v-for="(coloum, index) in coloums") {{coloum}} 
      tr(v-for="(pitchingStats, index) in pitchingStatsList")
        td {{pitchingStats.order}}
        td {{pitchingStats.player}}
        td {{pitchingStats.teamName}}
        td {{pitchingStats.pitched}}
        td {{pitchingStats.win}}
        td {{pitchingStats.lose}}
        td {{pitchingStats.era}}
        td {{pitchingStats.winRate}}
        td {{pitchingStats.inning}}
        td {{pitchingStats.hits}}
        td {{pitchingStats.hr}}
        td {{pitchingStats.so}}
        td {{pitchingStats.bb}}
        td {{pitchingStats.db}}
        td {{pitchingStats.run}}
        td {{pitchingStats.er}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { PitchingStats } from '~/types/types'

@Component
export default class Pitching extends Vue {
  private coloums = [
    '順位',
    '選手名',
    'チーム名',
    '登板',
    '勝利',
    '敗戦',
    '防御率',
    '勝率',
    '投球回',
    '被安打',
    '被本塁打',
    '奪三振',
    '与四球',
    '与死球',
    '失点',
    '自責点',
  ]

  private pitchingStatsList: Array<PitchingStats> = []

  created() {
    const pitchingStats: PitchingStats = {
      order: 1,
      player: '藤井',
      teamName: '横浜メッツ',
      pitched: '9',
      win: '5',
      lose: '1',
      era: '1.74',
      winRate: '.800',
      inning: '53.2',
      hits: '43',
      hr: '1',
      so: '35',
      bb: '21',
      db: '2',
      run: '11',
      er: '10',
    }
    const pitchingStats2: PitchingStats = {
      order: 2,
      player: '久保',
      teamName: 'Flutters',
      pitched: '7',
      win: '1',
      lose: '3',
      era: '2.38',
      winRate: '.250',
      inning: '28.1',
      hits: '29',
      hr: '2',
      so: '15',
      bb: '10',
      db: '1',
      run: '8',
      er: '8',
    }
    this.pitchingStatsList.push(pitchingStats)
    this.pitchingStatsList.push(pitchingStats2)
  }
}
</script>
<style lang="sass">
.pitching
  .-p-stats-table
    font-size: 13px
  td
    height: auto
    padding: 4px 0
</style>
