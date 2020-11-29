<template lang="pug">
  div.-prefectures
    Content(maxWidth="960px").mt-s
      Breadcrumbs(:breadcrumbs="breadcrumbs")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'
import Content from '~/components/molecules/wrapper/Content.vue'

Vue.use(Router)

@Component
export default class League extends Vue {
  private breadcrumbs = [
    {
      text: 'ホーム',
      disabled: false,
      href: '/',
    },
    {
      text: '私設リーグ',
      disabled: false,
      href: '',
    },
    {
      text: 'リーグ検索',
      disabled: true,
      href: '',
    },
  ]
}
</script>
<style lang="sass">
.-prefectures
</style>
