<template lang="pug">
  div.-top
   h2 お知らせ
   div.-news
     p(v-for="(item, key) in news" :key="key") {{item}}
   h2 最近の試合
   div
   h2 タイトル争い
   h3 打率
   h3 本塁打
   h3 打点
   h3 勝利数
   h3 防御率
   h3 奪三振
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class LeagueDetailTop extends Vue {
  @Prop({ default: [] }) private news?: string[]
}
</script>
<style lang="sass">
.-top
  .-news
    padding: 8px
    min-height: 150px
    border: 1px solid
</style>
