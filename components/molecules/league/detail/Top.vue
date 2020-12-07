<template lang="pug">
  div.-top
    div.-carouseles
      v-carousel(height="400px").mt-s
        v-carousel-item(
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition")
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
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    },
  ]
}
</script>
<style lang="sass">
.-top
  .-carouseles
    width: 640px
  .-stats
    display: flex
    justify-content: wrap
</style>
