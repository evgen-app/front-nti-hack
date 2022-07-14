import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { AppState } from '../store'


export interface whyPageIE{
        whatIwantKnown: string
        whatIwantLearn: string
        whatIwantGet: string
}

export interface superPowerPageIE{
    communication: number
    generateIdeas: number
    coordination: number
    creative: number
    searchResources: number
    achivment: number
    criticalThinking: number
    leaders: number
}

export interface drawDreamPageIE{
    images: FileList
}

export interface whoIPageIE{
    introvert: boolean
    individualist: boolean
    optimist: boolean
    serious: boolean
    organize: boolean
    leader: boolean
}

export interface whatILikePageIE{
    things: string[]
}


export interface boardingFormIE{
    pages:[
        whyPageIE,
        superPowerPageIE,
        drawDreamPageIE,
        whoIPageIE,
        whatILikePageIE
    ]
}

let initialList = {
    pages:[
        {
            whatIwantGet:"",
            whatIwantKnown:"",
            whatIwantLearn:"",
        } as whyPageIE,
        {
            communication: 0,
            coordination: 0,
            creative: 0,
            criticalThinking:0,
            generateIdeas:0,
            searchResources:0,
            achivment:0,
            leaders:0,
        } as superPowerPageIE,
        {
            images:null
        } as drawDreamPageIE,
        {
            individualist: null,
            introvert:null,
            optimist:null,
            organize:null,
            serious:null,
            leader:null
        } as whoIPageIE,
        {
            things: []
        } as whatILikePageIE
    ]
}


const onBoardingSlice = createSlice(
    {
        name:"onBoardingSlice",
        initialState: initialList,
        reducers:{
            setWhyPage(state, action: PayloadAction<whyPageIE>){
                state.pages[0] = action.payload
            },
            setSuperPowerPage(state, action: PayloadAction<superPowerPageIE>){
                state.pages[1] = action.payload
            },
            setDrawDreamPage(state, action: PayloadAction<drawDreamPageIE>){
                state.pages[2] = action.payload
            },
            setWhoIPage(state, action: PayloadAction<whoIPageIE>){
                state.pages[3] = action.payload
            },
            setWhatILikePage(state, action: PayloadAction<whatILikePageIE>){
                state.pages[4] = action.payload
            }
        }
    }
)


export const getFormState = createSelector(
    (state:AppState) => state.pages,
    (field)=>field
)

export const {
    setWhyPage,
    setSuperPowerPage,
    setDrawDreamPage,
    setWhoIPage,
    setWhatILikePage
} = onBoardingSlice.actions

export default onBoardingSlice.reducer