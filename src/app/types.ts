
export enum EventTypes{
    AIM,
    COMMENT,
    DREAM
}

export interface EventIE{
    date: Date
    name: string
    description: string
    isModerated?: boolean
    type: EventTypes
}

