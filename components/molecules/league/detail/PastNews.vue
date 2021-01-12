<template lang="pug">
  div.mt-s.past-news
    h2 過去のお知らせ
    p.mt-s 全 {{ leagueNotice.length }} 件
    div.mt-m
      ul.responsive-table
        li(v-for="(item, index) in leagueNotice" :key="index" @click="open(item)").table-row
          div.-date {{ item.updatedDate }}
          div.-title {{ item.title }}
          v-dialog(v-model="dialog" width="640px")
            v-card
              v-card-title {{ selectedItem.date }}
              v-card-text {{ selectedItem.notice }}
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'nuxt-property-decorator'
import { LeagueNotice } from '~/types/api'

@Component
export default class PastNews extends Vue {
  @Prop({ default: [] }) private leagueNotice?: Array<LeagueNotice>

  private dialog: Boolean = false

  private selectedItem = {
    date: '',
    notice: '',
  }

  //   @Watch('dialog')
  //   changeDialog(value: boolean) {
  //     value ? this.open() : this.close()
  //   }

  private open(item: LeagueNotice) {
    this.selectedItem.date = item.updatedDate
    this.selectedItem.notice = item.notice
    this.dialog = true
  }

  private close() {
    this.dialog = false
  }
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
