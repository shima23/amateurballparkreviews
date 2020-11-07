<template>
  <v-menu app offset-x offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon> mdi-account-circle </v-icon>
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle> {{ nickname }} さん</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <template v-for="(menu, i) in accountMenus">
        <v-divider v-if="menu.divider" :key="`menu-divider-${i}`" />

        <v-list-item :key="`menu-list-${i}`" v-on:click="logout()">
          <v-list-item-icon class="mr-2">
            <v-icon size="22" v-text="menu.icon" />
          </v-list-item-icon>
          <v-list-item-title>
            {{ menu.name }}
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class AccountMenu extends Vue {
  data() {
    return {
      nickname: this.$auth.user.nickname,
      accountMenus: [
        { name: 'マイページ', icon: 'mdi-account-cog' },
        { name: 'ログアウト', icon: 'mdi-logout-variant', divider: true },
      ],
    }
  }

  private logout() {
    this.$auth.logout()
  }
}
</script>
<style lang="sass" scoped>
.tite:hover
  background: #ffffff !important
</style>
