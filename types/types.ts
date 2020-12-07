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