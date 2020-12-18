<template lang="pug">
  div.stats
    div.mt-s
      span.mr-xs 年度切替：
      select(:value="selectedYear" @change="setStanding($event.target.value)").mt-s.-select-box
        option(v-for="(year, index) in yearList" :value="year" :label="year")
      button(value="batter" @click="changeType($event.target.value)" :class="{'no-active': !isBatter, 'active': isBatter}").ml-m.-changeType 野手成績
      button(value="pitcher" @click="changeType($event.target.value)" :class="{'no-active': isBatter, 'active': !isBatter}").ml-m.-changeType 投手成績
      span.ml-m チーム切替：
      select(:value="selectedTeam" @change="setStats($event.target.value)").mt-s.-select-box
        option(v-for="(team, index) in teams" :value="team" :label="team")
      input(type="checkbox").ml-m
      span.ml-s 規定投球回/規定打席未満を含む
      Batting(v-if="isBatter").mt-m
      Pitching(v-else).mt-m
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import Batting from '~/components/molecules/league/detail/Batting.vue'
import Pitching from '~/components/molecules/league/detail/Pitching.vue'

@Component
export default class Stats extends Vue {
  private isBatter = true
  private selectedTeam = 'すべて'
  private teams = ['すべて', '横浜メッツ', 'Fullters', '球運会', 'シャドウズ']
  private selectedYear = ''
  private yearList: Array<string> = ['2019', '2020']

  private changeType(type: string) {
    if (type === 'batter') {
      this.isBatter = true
    } else {
      this.isBatter = false
    }
  }

  private setStats(team: string) {}
}
</script>
<style lang="sass">
.stats
  font-size: 13px
.-changeType
  border: 1px solid
  border-radius: 4px
  padding: 4px 16px
.-team-btn
  border: 1px solid
  border-radius: 4px
  padding: 0px 4px
.-select-box
  border: 1px solid
  border-radius: 4px
  padding-top: 4px
  padding-buttom: 4px
  padding-left: 8px
  font-size: 13px
.active
  background: #66cdaa
.no-active
  background: #fff
</style>
