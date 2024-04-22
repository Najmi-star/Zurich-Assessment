export type User = {
    userList?: UserData[]
    page: number,
    perPage: number,
    totalData: number,
    totalPage: number,
    loading: boolean
}

export type UserData = {
    id: number
    first_name: string
    last_name: string
    email: string
    avatar: string
}