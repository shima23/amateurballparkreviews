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