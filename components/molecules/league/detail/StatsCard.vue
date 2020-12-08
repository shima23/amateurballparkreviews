<template lang="pug">
  div.stats-card
    h2.mb-s {{leaderStats.title}}
    p
      span 1 {{leaderStats.rank1user}} {{leaderStats.rank1team}} {{leaderStats.rank1stats}}
    p
      span 2 {{leaderStats.rank2user}} {{leaderStats.rank2team}} {{leaderStats.rank2stats}}
    p
      span 3 {{leaderStats.rank3user}} {{leaderStats.rank3team}} {{leaderStats.rank3stats}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { LeaderStats } from '~/types/types'

@Component
export default class LeagueDetailStatsCard extends Vue {
  @Prop({ default: {} }) private leaderStats?: LeaderStats
}
</script>
<style lang="sass">
.stats-card
  width: 320px
  padding: 8px
  background-color: #fff
  border: 1px solid #cdcdcd
  border-left: 8px solid #808080
  border-radius: 4px
  h2
    font-size: 20px
    font-weight: normal
</style>
