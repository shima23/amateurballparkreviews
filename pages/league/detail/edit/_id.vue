<template lang="pug">
  Content(maxWidth="960px").mt-s
    h1 リーグ概要編集
    no-ssr(placeholder="Loading Your Editor...")
      vue-editor(id="editor" v-model="content")
    div
      div(v-html="content")
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import axios from 'axios'
import Content from '~/components/molecules/wrapper/Content.vue'
import { VueEditor } from 'vue2-editor'

@Component
export default class LeagueDetailEditPage extends Vue {
  private content = ''
}
</script>
<style lang="sass"></style>
