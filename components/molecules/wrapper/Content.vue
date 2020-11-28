<template lang="pug">
  div.content(:class="{ padding: hasPadding, centering: centering }" :style="`max-width: ${maxWidth}`")
    slot
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class Content extends Vue {
  @Prop({ default: true }) private hasPadding?: boolean
  @Prop({ default: 'inherit' }) private maxWidth?: string
  @Prop({ default: true }) private centering?: boolean
}
</script>

<style lang="sass" scoped>
.content
  &.centering
    margin-left: auto
    margin-right: auto
</style>
