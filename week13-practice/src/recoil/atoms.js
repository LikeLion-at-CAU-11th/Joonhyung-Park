import { atom } from "recoil";

export const userNameAtom = atom({
    key:'userName',
    default:'홍길동',

})

export const emailAtom = atom({
    key:'email',
    default:'@@@',
})

export const isSubmittedAtom = atom({
    key:'isSubmited',
    default:false
})

export const passwordAtom = atom({
    key : 'password',
    default : null,
})