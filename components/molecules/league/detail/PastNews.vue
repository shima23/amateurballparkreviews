<template lang="pug">
  div.mt-s.past-news
    h2 過去のお知らせ
    div.mt-m
      ul.responsive-table
        li.table-row
          div.-date 2020/12/5
          div.-title 新型コロナウィルスに伴うリーグ運営方針変更について
        li.table-row
          div.-date 2020/11/22
          div.-title 2020年度タイトル発表！！
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class PastNews extends Vue {
  @Prop({ default: [] }) private pastNewsList?: Array<string>
}
</script>
<style lang="sass" scoped>
.past-news
  .responsive-table
    li
      border-radius: 3px
      padding: 16px 8px
      display: flex
      justify-content: flex-start
      margin-bottom: 16px
      .-date
        flex-basis: 13%
      .-title
        flex-basis: 87%
  .table-row
    background-color: #ffffff
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1)
  .table-row:hover
    background-color: #F5F5F5
    box-shadow: none
    cursor: pointer
    .-title
      text-decoration: underline
</style>
