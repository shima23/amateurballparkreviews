<template lang="pug">
  v-menu(app offset-x offset-y)
    template(v-slot:activator="{ on }")
      v-btn(icon v-on="on")
        v-icon mdi-account-circle
    v-list(dense)
      v-list-item
        v-list-item-content
          v-list-item-subtitle {{ nickname }} さん
      v-divider
      template(v-for="(menu, i) in accountMenus")
        v-divider(v-if="menu.divider" :key="`menu-divider-${i}`")
        v-list-item(:key="`menu-list-${i}`" @click="handleClick(i)")
          v-list-item-icon.mr-2
            v-icon(size="22" v-text="menu.icon")
          v-list-item-title {{ menu.name }}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'

Vue.use(Router)

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

  private handleClick(index: number) {
    switch (index) {
      case 0:
        this.$router.push('/mypage')
        break
      case 1:
        this.$auth.logout()
        break
    }
  }
}
</script>
<style lang="sass" scoped></style>
