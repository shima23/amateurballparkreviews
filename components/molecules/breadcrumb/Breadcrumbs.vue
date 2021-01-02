<template lang="pug">
  v-breadcrumbs(:items="breadcrumbs").-v-breadcrumbs
    template(v-slot:item="props")
      v-breadcrumbs-item(
        exact
        :disabled="props.item.disabled"
        :to="props.item.href"
        nuxt
        class="breadcrumb"
      ) {{ props.item.text }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

export interface Breadcrumb {
  text?: string
  disabled?: boolean
  href?: string
}

@Component
export default class Breadcrumbs extends Vue {
  @Prop() private breadcrumbs?: Array<Breadcrumb>
}
</script>

<style lang="sass">
.-v-breadcrumbs
    padding-left: 0px  !important
    padding-top: 0px !important
    padding-bottom: 5px !important
</style>
