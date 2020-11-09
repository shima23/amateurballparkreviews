<template>
  <div class="suspend">
    <div class="title">
      <span>退会する</span>
    </div>
    <div class="description">
      <p>一度退会すると、ユーザーは復元できません。よろしいですか？</p>
    </div>
    <div>
      <v-btn elevation="1" v-on:click="click()">退会する</v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Suspend extends Vue {
  data() {
    return {}
  }
}
</script>
<style lang="sass" scoped>
.suspend
    padding: 20px
    background: #ffffff
.title
    font-size: 24px !important
    padding-bottom: 10px
    border-bottom: 1px #e0e0e0 solid
.description
    padding-top: 16px
</style>
