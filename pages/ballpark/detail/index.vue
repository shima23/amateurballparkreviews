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
            <td>神奈川県横浜市金沢区長浜106-6</td>
          </tr>
          <tr>
           <th>ホームページ</th>
           <td><a href="http://www.hama-midorinokyokai.or.jp/park/nagahama/">http://www.hama-midorinokyokai.or.jp/park/nagahama/</a></td>
          </tr>
          <tr>
            <th>利用料金</th>
            <td>2時間:2600円　夜間照明1時間:5300円</td>
          </tr>
          <tr>
            <th>駐車場</th>
            <td>75台、駐車場料金等2時間300円　以降20分50円</td>
          </tr>
        </table>
      </div>
      <h2>アクセス</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3253.697645364546!2d139.63339311525013!3d35.36314923026974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd672031bc0c6d930!2z6ZW35rWc5YWs5ZySIOmHjueQg-WgtA!5e0!3m2!1sja!2sjp!4v1602934610124!5m2!1sja!2sjp"
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
            <td>軟式野球、少年軟式野球、ソフトボール</td>
          </tr>
          <tr>
            <th>グラウンド種別</th>
            <td>内野：土、外野：天然芝</td>
          </tr>
          <tr>
            <th>広さ</th>
            <td>両翼72m、中堅85m</td>
          </tr>
          <tr>
            <th>照明</th>
            <td>あり</td>
          </tr>
          <tr>
            <th>ベンチ</th>
            <td>あり（屋根無し）</td>
          </tr>
          <tr>
            <th>ブルペン</th>
            <td>なし</td>
          </tr>
          <tr>
            <th>水場</th>
            <td>球場入り口横にあり、球場横管理事務所にトイレあり</td>
          </tr>
        </table>
      </div>
      <h2>みんなの評価</h2>
      <div class="reviews">
        <div class="post">
          <p>投稿日：2020/1/12</p>
          <h3>ホームランを稼ぎたいならこの球場</h3>
          <p>狭いので簡単にホームランが打てます。投手泣かせですが打者にはチャンスかもしれません？</p>
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

@Component({
  components: { Breadcrumbs },
})
export default class BallparkDetail extends Vue {
  private name = '長浜公園野球場'

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
