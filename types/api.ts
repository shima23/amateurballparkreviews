export interface LeagueResponse {
    league: League,
    leagueTeam: Array<LeagueTeam>
    leagueScoreSummary: Array<LeagueScoreSummary>
    leagueNotice: Array<LeagueNotice>
}

export interface League {
    id: number
    leagueName: string
    leagueLogo: string
    imgUrl1: string
    imgUrl2: string
    imgUrl3: string
    description: string
}

export interface LeagueTeam {
    id: number
    leagueId: number
    teamName: string
}

export interface LeagueScoreSummary {
    year: number
    score: Score
}

export interface LeagueNotice {
    id: number
    leagueId: number
    tiile: string
    notice: string
    createdDate: string
    updatedDate: string
}

export interface Score {
    id: number
    leagueId: number
    year: number
    homeTeamId: number
    visitoreTeamId: number
    score: string
    gameDate: Date
}