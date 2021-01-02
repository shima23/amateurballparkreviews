<template lang="pug">
  div.mt-s.teams
    h2 所属チーム
    div.-list
      nuxt-link(v-for="(item, index) in teamList" :key="index" tag="div" to="#")
        TeamCard(:teamName="item.teamName").-list-item
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { LeagueTeam } from '~/types/api'
import TeamCard from '~/components/molecules/card/TeamCard.vue'

@Component
export default class Teams extends Vue {
  private teamList: Array<LeagueTeam> = this.getTeamList()

  private getTeamList(): Array<LeagueTeam> {
    const leagueResponse = this.$store.getters['modules/league/leagueResponse']
    return leagueResponse.leagueTeam
  }
}
</script>
<style lang="sass" scoped>
.teams
  .-list
    display: flex
    flex-wrap: wrap
    align-content: flex-start
  　.-list-item
      text-decoration: none
      cursor: pointer
</style>
