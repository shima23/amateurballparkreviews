<template>
  <v-container>
    <div class="detail">
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <h1>{{ name }}</h1>
      <div class="tips-parent">
        <span class="tips">徒歩15分以内</span>
        <span class="tips">シャワー有</span>
        <span class="tips">独立式</span>
      </div>
      <h2>基本情報</h2>
      <div class="base-info">
        <table class="demo01">
          <tr>
            <th>住所</th>
            <td>{{ residence }}</td>
          </tr>
          <tr>
            <th>ホームページ</th>
            <td>
              <a v-bind:href="webUrl">{{ webUrl }}</a>
            </td>
          </tr>
          <tr>
            <th>利用料金</th>
            <td>{{ fee }}</td>
          </tr>
          <tr>
            <th>駐車場</th>
            <td>{{ parking }}</td>
          </tr>
        </table>
      </div>
      <h2>アクセス</h2>
      <iframe
        v-bind:src="googleMapUrl"
        width="100%"
        height="300"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
      <h2>グラウンド情報</h2>
      <div class="base-info">
        <table class="demo01">
          <tr>
            <th>利用種別</th>
            <td>{{ useType }}</td>
          </tr>
          <tr>
            <th>グラウンド種別</th>
            <td>{{ groundType }}</td>
          </tr>
          <tr>
            <th>広さ</th>
            <td>{{ groundSize }}</td>
          </tr>
          <tr>
            <th>照明</th>
            <td>{{ nightGameLight }}</td>
          </tr>
          <tr>
            <th>ベンチ</th>
            <td>{{ bench }}</td>
          </tr>
          <tr>
            <th>ブルペン</th>
            <td>{{ bullpen }}</td>
          </tr>
          <tr>
            <th>水場</th>
            <td>{{ waterPlace }}</td>
          </tr>
        </table>
      </div>
      <h2>みんなの評価</h2>
      <div class="reviews">
        <div class="post">
          <p>投稿日：2020/1/12</p>
          <h3>ホームランを稼ぎたいならこの球場</h3>
          <p>
            狭いので簡単にホームランが打てます。投手泣かせですが打者にはチャンスかもしれません？
          </p>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'
import Breadcrumbs, {
  Breadcrumb,
} from '../../../components/molecules/Breadcrumbs.vue'
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
    const response = await axios.get(`http://0.0.0.0:8080/${context.params.id}`)
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
