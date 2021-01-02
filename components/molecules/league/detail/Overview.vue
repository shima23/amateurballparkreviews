<template lang="pug">
  div.mt-s.overview
    section
      h1 リーグ概要
      div(v-html="overview").mt-m
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Overview extends Vue {
  @Prop({ default: '<p>リーグ概要が登録されていません。</p>' })
  private overview?: string
}
</script>
<style lang="sass" scoped>
.overview
</style>
