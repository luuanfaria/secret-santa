import { atom } from "recoil";

export const membersList = atom<string[]>({
  key: 'membersList',
  default: []
})

export const errorState = atom<string>({
  key: 'errorState',
  default: ''
})

export const resultFriendList = atom<Map<string, string>>({
  key: 'resultFriendList',
  default: new Map()
})