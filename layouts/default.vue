<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" dense fixed app dark elevation="0">
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items>
        <v-btn v-for="(item, i) in items" :key="i" :to="item.to" elevation="0">
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer absolute dark app>
      <v-layout justify-center>
        <span>&copy; 2020 shima23. All Rights Reserved.</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator' 

@Component({})
export default class Default extends Vue {
  private clipped: boolean = false
  private drawer: boolean = false
  private fixed: boolean = false
  private miniVariant: boolean = false
  private right: boolean = true
  private rightDrawer: boolean = false
  private title: string = 'Amateur Ballpark Reviews'

  private items = [
    { title: '会員登録', to: '/account/register'},
    { title: 'ログイン', to: '/login'}
  ]

}
</script>
<style>

</style>
