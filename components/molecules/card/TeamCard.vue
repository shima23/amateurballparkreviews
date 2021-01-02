<template lang="pug">
  div.team-card
    div.-card
      div.-team-logo
        img.-image(:src="teamLogo")
      div.-description
        h3.-title {{teamName}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { LeagueTeam } from '~/types/api'

@Component
export default class TeamCard extends Vue {
  @Prop({ default: '/no_image_team.gif' }) private teamLogo?: string
  @Prop({ default: '' }) private teamName?: string
}
</script>
<style lang="sass" scoped>
.team-card
  .-card
    width: 300px
    min-width: 300px
    height: 100%
    margin: 8px
    border: 1px solid #cdcdcd
    background-color: #ffffff
    cursor: pointer
    .-team-logo
      width: 100%
      margin: 0 auto
      max-height: 196px
      overflow: hidden
      .-image
        width: 100%
        height: auto
      .-image:hover
        transform: scale(1.2,1.2)
        transition: 1s all
  .-description
    padding: 16px
  .-title
    font-size: 16px
</style>
