<template lang="pug">
  v-container
    div.detail
      Breadcrumbs(:breadcrumbs="breadcrumbs")
      h1 {{ name }}
      div.tips-parent
        span.tips 徒歩15分以内
        span.tips シャワー有
        span.tips 独立式
      h2 基本情報
      div.base-info
        table.demo01
          tr
            th 住所
            td {{ residence }}
          tr
            th ホームページ
            td
              a(v-bind:href="webUrl") {{ webUrl }}
          tr
            th 利用料金
            td {{ fee }}
          tr
            th 駐車場
            td {{ parking }}
      h2 アクセス
      iframe(
        v-bind:src="googleMapUrl"
        width="100%"
        height="300"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      )
      h2 グラウンド情報
      div.base-info
        table.demo01
          tr
            th 利用種別
            td {{ useType }}
          tr
            th グラウンド種別
            td {{ groundType }}
          tr
            th 広さ
            td {{ groundSize }}
          tr
            th 照明
            td {{ nightGameLight }}
          tr
            th ベンチ
            td {{ bench }}
          tr
            th ブルペン
            td {{ bullpen }}
          tr
            th 水場
            td {{ waterPlace }}
      h2 みんなの評価
      div.reviews
        div.post
          p 投稿日：2020/1/12
          h3 ホームランを稼ぎたいならこの球場
          p 狭いので簡単にホームランが打てます。投手泣かせですが打者にはチャンスかもしれません？
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'
import Breadcrumbs, {
  Breadcrumb,
} from '~/components/molecules/breadcrumb/Breadcrumbs.vue'
import { Context } from '@nuxt/types'

@Component({
  components: { Breadcrumbs },
})
export default class BallparkDetail extends Vue {
  private name = ''
  private residence = ''
  private webUrl = ''
  private fee = ''
  private parking = ''
  private googleMapUrl = ''
  private useType = ''
  private groundType = ''
  private groundSize = ''
  private nightGameLight = ''
  private bench = ''
  private bullpen = ''
  private waterPlace = ''

  private hogeId = 1

  private breadcrumbs: Array<Breadcrumb> = [
    {
      text: 'ホーム',
      disabled: false,
      href: '/',
    },
    {
      text: '球場検索',
      disabled: false,
      href: '/ballpark',
    },
    {
      text: '球場詳細',
      disabled: true,
      href: '',
    },
  ]

  async asyncData(context: Context) {
    //alert(context.params.id)
  }

  created() {
    //alert(this.id)
    this.getDetail()
  }

  private async getDetail() {
    var config = {
      headers: {
        Authorization: this.$auth.getToken('local'),
      },
    }
    const url = `http://0.0.0.0:8080/1`
    const response = await axios.get(url, config)
    return {
      name: response.data.name,
      residence: response.data.residence,
      webUrl: response.data.webUrl,
      fee: response.data.fee,
      parking: response.data.parking,
      googleMapUrl: response.data.googleMapUrl,
      useType: response.data.useType,
      groundType: response.data.groundType,
      groundSize: response.data.groundSize,
      nightGameLight: response.data.nightGameLight,
      bench: response.data.bench,
      bullpen: response.data.bullpen,
      waterPlace: response.data.waterPlace,
    }
  }
}
</script>

<style lang="sass" scoped>
.detail
  h2
    font-size: 20px
    border-bottom: 1px solid #e7e7e7
    margin-bottom: 5px
.base-info
  display: flex
  max-width: 100%
  width: 100%
.base-child
  width: 50%

.tips-parent
  margin-bottom: 10px

.tips
  border: 1px solid #e7e7e7
  border-radius: 5px
  font-size: 12px
  padding: 3px

table
  width: 100%

th, td
  padding: 5px
  border: 1px solid #ddd
  font-size: 14px

th
  background: #f4f4f4

.demo01 th
  width: 30%
  text-align: left

.post
  max-width: 100%
  height: auto
  border-bottom: 1px solid #ddd
</style>
