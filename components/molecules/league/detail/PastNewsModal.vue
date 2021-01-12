<template lang="pug">
  v-dialog(ref="dialog" v-model='modal' width='600px')
    template(v-slot:activator="{ on, attrs }")
      p {{ date }}
      p {{ notice }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
@Component
export default class PastNewsModal extends Vue {
  @Prop({ default: '' }) private date?: string
  @Prop({ default: '' }) private notice?: string
}
</script>
<style lang="sass" scoped></style>
