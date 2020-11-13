<template lang="pug">
  v-container
    div.account
      Breadcrumbs(:breadcrumbs="breadcrumbs")
      h1 球場検索
      div
        div.detail-search
          div
            div.detail-left
              p 地域
            div.detail-right
              input(type="checkbox" value="0") 
              | 東京都
              input(type="checkbox" value="1")
              | 神奈川県
              input(type="checkbox" value="2")
              | 埼玉県
              input(type="checkbox" value="3")
              | 千葉県
            div.clear
          div
            div.detail-left
              p グラウンド形式
            div.detail-right
              input(type="checkbox" value="0")
              | 対面式
              input(type="checkbox" value="1")
              | 独立
            div.clear
          div
            div.detail-left
              p グラウンド種別
            div.detail-right
              input(type="checkbox" value="0")
              | 土
              input(type="checkbox" value="1")
              | 天然芝
              input(type="checkbox" value="2")
              | 人工芝
            div.clear
          div
            div.detail-left
              p フリーワード
            div.detail-right
              input(type="text" v-model="name").text-box 
            div.clear
          div.detail-serach-btn
            input(type="submit" value="検索" @click="search()").sbtn
      div
        h2 検索結果
        table
          thead
            tr
              th 都道府県
              th 市区町村
              th 球場名
              th ユーザー評価
              th レビュー件数
          tbody
            tr(v-for="(item, key) in tableItems" :key="key" @click="selectRows(item.id)").items
              td {{ item.prefectures }}
              td {{ item.municipalities }}
              td {{ item.name }}
              td
                span(:data-rate="item.rating").star5_rating
              td
                v-icon mdi-comment-outline {{ item.count }}
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Router from 'vue-router'
import axios from 'axios'
import Breadcrumbs, {
  Breadcrumb,
} from '../../components/molecules/Breadcrumbs.vue'

Vue.use(Router)

class TableBallParkDto {
  prefectures: string
  municipalities: string
  name: string
  rating: string
  count: number
  constructor(
    prefectures: string,
    municipalities: string,
    name: string,
    rating: string,
    count: number
  ) {
    this.prefectures = prefectures
    this.municipalities = municipalities
    this.name = name
    this.rating = rating
    this.count = count
  }
}

class BallparkSearchRequestDto {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

@Component
export default class Account extends Vue {
  data() {
    return {
      name: '',
    }
  }

  private tableColumns = [
    'prefectures',
    'municipalities',
    'name',
    'rating',
    'count',
  ]

  private reqDto: BallparkSearchRequestDto = {
    name: '',
  }

  private breadcrumbs = [
    {
      text: 'ホーム',
      disabled: false,
      href: '/',
    },
    {
      text: '球場検索',
      disabled: true,
      href: '',
    },
  ]

  private tableItems: Array<TableBallParkDto> = []

  private selectRows(id: number) {
    this.$router.push({ path: `/ballpark/detail/${id}` })
  }

  private async search() {
    this.tableItems.length = 0
    const response = await axios.post('http://0.0.0.0:8080/list/search', {
      name: this.$data.name,
    })
    this.tableItems = response.data
  }
}
</script>
<style lang="sass" scoped>

.search-keyword
  padding-top: 10px
  padding-bottom: 10px

.text-box
  max-width: 100%
  width: 300px
  height: 30px
  border: radius 2px
  background: #eee
  margin-bottom: 10px

.sbtn
  width:70px
  height:35px
  position:absolute
  left:270px
  top:0
  border-radius:0 2px 2px 0
  background: #677991
  border:none
  color:#fff
  font-weight:bold
  font-size:16px

h2
  font-size: 20px
  position: relative
  margin-top: 10px
  padding-left: 10px
  color:#153c6e
  border-left: solid 7px #010079

.detail-search
  width: 500px
  margin-top: 10px
  padding: 20px 10px 10px 10px
  box-shadow: 0 2px 4px rgba(0,0,0,0.3)

.detail-serach-btn
  padding-top: 10px
  text-align: right

.detail-left
  width: 180px
  float: left
  padding-left: 5px
  padding-right: 10px

.detail-right
  border-bottom: 1px solid #ededed

.clear
  clear: both

table
  border-collapse: collapse
  padding: 0
  width: 100%
  table-layout: auto
  color: #000

table th
  padding: 10px 10px
  border-bottom: 1px solid #bbb
  text-align: left

table tr
  background-color: #fff
  padding: 10px
  border-bottom: 1px solid #bbb

table td
  padding: 10px 10px
  text-align: left

table td a
  display: block

tr.items:hover
  background-color: #d9efff
  cursor: pointer
</style>
