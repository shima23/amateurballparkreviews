import Vue from 'vue'
import { VuexModule, Module, action, getter, mutation} from 'vuex-class-component'
import axios from 'axios'
import { LeagueResponse } from '~/types/api'

@Module({ namespacedPath: 'modules/league/', target: 'nuxt'})
export class LeagueStore extends VuexModule {
    @getter leagueResponse?: LeagueResponse

    @mutation
    SET_LEAGUE_RESPONSE(leagueResponse: LeagueResponse) {
      Vue.set(this, 'leagueResponse', leagueResponse)
    }

    @action()
    async getLeague(reqData: {leagueId: number, token: string}) {
      var config = {
        headers: {
          Authorization: reqData.token
        }
      }
      const response = await axios.get(`http://0.0.0.0:8080/league/${reqData.leagueId}`, config)
      if (response.status === 200) {
        this.$store.commit('SET_LEAGUE_RESPONSE', response.data)
      }
      return response
    }

}

export default LeagueStore.ExtractVuexModule(LeagueStore)