<template lang="pug">
  v-app(dark)
    v-app-bar(:clipped-left="clipped" dense fixed app dark elevation="0")
      router-link(to="/").toolbar-title
        img(src="../static/logo.png").-logo
      v-spacer
      v-toolbar-items
        v-btn(v-if="!$auth.loggedIn" elevation="0" link nuxt to="/account/register") 会員登録
        v-btn(v-if="!$auth.loggedIn" elevation="0" link nuxt to="/login") ログイン
        AccountMenu(v-if="$auth.loggedIn")
    v-main
      nuxt
    v-footer(absolute dark app)
      v-layout(justify-center)
        span &copy; 2020 shima23. All Rights Reserved.
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import AccountMenu from '~/components/molecules/AccountMenu/AccountMenu.vue'

@Component({
  components: {
    AccountMenu,
  },
})
export default class Default extends Vue {
  private clipped: boolean = false
  private drawer: boolean = false
  private fixed: boolean = false
  private miniVariant: boolean = false
  private right: boolean = true
  private rightDrawer: boolean = false
  private title: string = 'Amateur Ballpark Reviews'

  data() {
    return {
      loginResult: false,
    }
  }
}
</script>
<style lang="sass" scope>
.toolbar-title
  color: #ffffff !important
  text-decoration: none
.toolbar-title:hover
  color: #DDDDDD !important
.-logo
  margin: auto
  width: 150px
  height: auto
</style>
