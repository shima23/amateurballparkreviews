export interface LoginRequestDto{
    mailAddress: string
    password: string
}

export interface ChangePasswordRequestDto{
    newPassword: string
    oldPassword: string
}

export interface LeagueDto{
    leagueName: string
}

export interface LeaderStats {
    title: string
    rank1user: string
    rank1team: string
    rank1stats: string
    rank2user: string
    rank2team: string
    rank2stats: string
    rank3user: string
    rank3team: string
    rank3stats: string
}

export interface StantingTeam {
    order: number
    teamNeme: string
    games: number
    win: number
    lose: number
    draw: number
    winRate: string
    battingRuns: number
    pitchingRuns: number
    teamBattingAvg: string
    teamEra: string
}

export interface AllStandings {
    yearStandingMap: {[key: string]: Array<StantingTeam>; };
}

export interface PitchingStats {
    order: number
    player: string
    teamName: string
    pitched: string
    win: string
    lose: string
    era: string
    winRate: string
    inning: string
    hits: string
    hr: string
    so: string
    bb: string
    db: string
    run: string
    er: string
}