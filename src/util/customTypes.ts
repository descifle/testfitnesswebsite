import { SetStateAction, Dispatch, RefObject } from "react"

export type User = {
    id: string
    username: string
    email: string
    admin: boolean
    authorized: boolean
}

export interface IComponentProvider {
    children?: React.ReactNode
}

export interface IMenuStringContext {
    text: string
    setText: Dispatch<SetStateAction<string>>
}

export interface IMenuAppContext {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

export interface IAuthContext {
    user: User
    signIn: (user: User) => void
    signOut: (user: User) => void
}

export interface IComponentModal {
    // required for google maps component
    modalRef?: RefObject<HTMLDivElement>
    isModalOpen: boolean
    toggleModal: (open: boolean) => void
}

export interface IAdminDashboard {
    users: Array<string>
    appointments: Array<string>
    handleAdminSectionChange: (value: string) => void
}

export interface IMenuDrawer {
    open: boolean
    toggleDrawer: (value: boolean) => void
    menuDrawerIcon?: string
}

export interface ILandingPage {
    userAccepted: boolean
    setUserAccepted: Dispatch<SetStateAction<boolean>>
}

export interface numberMap {
    [key: number]: any
}

export interface stringMap {
    [key: string]: any
}

export type DefaultElementProps = {
    className?: string
    onClick?: any
}

export type CartModalProps = {
    cartItems: any;
    open: boolean;
    handleCartOpen: (currentstate: boolean) => void
}
