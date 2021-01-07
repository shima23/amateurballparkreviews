<template lang="pug">
  div
    Content(maxWidth="960px").mt-s
      Breadcrumbs(:breadcrumbs="breadcrumbs")
      h1 リーグ概要編集
      h2.-label 編集
      no-ssr(placeholder="Loading Your Editor...")
        vue-editor(id="editor" v-model="content" :editor-toolbar="customToolbar").-vue-editor
      section.mt-m
        h2.-label プレビュー
        div(v-html="content").-preview
        div.mt-s.-btn-action
          button.-btn-clear リセット 
          button(@click="update()").ml-xs.-btn-update 更新
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import { Breadcrumb } from '~/components/molecules/breadcrumb/Breadcrumbs.vue'
import { League } from '~/types/api'
import Content from '~/components/molecules/wrapper/Content.vue'
import { VueEditor } from 'vue2-editor'

@Component
export default class LeagueDetailEditPage extends Vue {
  private breadcrumbs = [
    { text: 'ホーム', disabled: false, href: '/' },
    { text: '私設リーグ', disabled: false, href: '/league' },
    { text: 'リーグ詳細', disabled: false, href: '/league/detail' },
    { text: '編集', disabled: true, href: '' },
  ]
  private content = ''
  private customToolbar = [
    [{ header: [false, 1, 2, 3, 4, 5, 6] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ list: 'bullet' }],
    ['link'],
    ['clean'],
  ]

  private league: League = {
    id: 0,
    leagueName: '',
    leagueLogo: '',
    imgUrl1: '',
    imgUrl2: '',
    imgUrl3: '',
    description: '',
  }

  private async update() {
    this.league.id = Number(this.$route.params.id)
    this.league.description = this.content
    const response = await this.$store.dispatch('modules/league/updateLeague', {
      league: this.league,
      token: this.$auth.getToken('local'),
    })
    if (response.status === 200) {
      alert('更新に成功しました')
      this.$router.push(`/league/detail/${this.$route.params.id}`)
    } else {
      alert('更新に失敗しました')
    }
  }
}
</script>
<style lang="sass">
.-label
  font-weight: normal
.-vue-editor
  h1
    font-size: 24px !important
.-preview
  min-height: 250px
  border: 1px solid #cdcdcd
  padding-top: 20px
  padding-left: 12px
  h1, h2
    margin-bottom: 4px !important
  h3, h4, h5, h6
    margin-bottom: 8px !important
  li
    margin-left: 36px
  p
    line-height: 8px
.-btn-action
  text-align: right
.-btn-clear
  border: 1px solid #cdcdcd
  padding: 7px 24px
  font-size: 16px
.-btn-update
  background: #444444
  padding: 8px 24px
  color: #ffffff
  font-size: 16px
.-btn-update:hover
  background: #222222
</style>
