<template lang="pug">
  div.mt-s
    Calendar
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Calendar from '~/components/atoms/Calendar.vue'

@Component
export default class Schedule extends Vue {}
</script>
<style lang="sass"></style>
