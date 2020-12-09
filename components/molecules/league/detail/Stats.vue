<template lang="pug">
  div
    div.mt-s
      button(value="batter" @click="changeType($event.target.value)" :class="{'no-active': !isBatter, 'active': isBatter}").mr-s.-changeType 野手成績
      button(value="pitcher" @click="changeType($event.target.value)" :class="{'no-active': isBatter, 'active': !isBatter}").mr-m.-changeType 投手成績
      span チーム切替：
      select(:value="selectedTeam" @change="setStats($event.target.value)").mt-s.-select-box
        option(v-for="(team, index) in teams" :value="team" :label="team")
      input(type="checkbox").ml-m
      span.ml-s 規定投球回/規定打席未満を含む
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Stats extends Vue {
  private isBatter = true
  private selectedTeam = 'すべて'
  private teams = ['すべて', '横浜メッツ', 'Fullters', '球運会', 'シャドウズ']

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
  font-size: 16px
.active
  background: #66cdaa
.no-active
  background: #fff
</style>
