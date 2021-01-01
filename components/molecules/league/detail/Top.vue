<template lang="pug">
  div.-top
    div.-game
      div.-carouseles
        v-carousel(height="400px").mt-m
          v-carousel-item(
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition")
      div.mt-m.ml-m.-latest-game
        p 2020/12/01
        p 長浜公園野球場
        p 
          span 横浜メッツ
          span 1 
          span -
          span 1
          span 球運会
    h2.mt-m League Leaders
    div.mb-xxl.-stats
      StatsCard(v-for="(leaderStats, i) in leaderStatsList" :key="i" :leaderStats="leaderStats").mt-s.mr-s
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import StatsCard from '~/components/molecules/league/detail/StatsCard.vue'
import { LeaderStats } from '~/types/types'

@Component
export default class LeagueDetailTop extends Vue {
  @Prop({ default: [] }) private leaderStatsList?: LeaderStats[]

  private items = [
    {
      src: '/no_image.png',
    },
    {
      src: '/no_image.png',
    },
    {
      src: '/no_image.png',
    },
    {
      src: '/no_image.png',
    },
  ]
}
</script>
<style lang="sass">
.-top
  h2
    font-weight: normal
  .-game
    display: flex
    justify-content: wrap
    .-carouseles
      width: 640px
    .-latest-game
      width: 300px
      min-height: 150px
      border: 1px solid
  .-stats
    display: flex
    justify-content: wrap
</style>
