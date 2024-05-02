import { createSlice } from "@reduxjs/toolkit"

export type HomePageNewsItem = {
    id: number,
    group: string,
    text: string,
    url: string
}

export type HomePageState = {
    news: HomePageNewsItem[]
}

const initialState: HomePageState = {
    news: [
        {
            id: 1,
            group: "Funny news from around the world",
            text: "Cicadas are so noisy in a South Carolina county that residents are calling the police",
            url: "https://apnews.com/article/noisy-cicadas-south-carolina-police-39f2bd760a51c8c1d28d88b12473840e"
        },
        {
            id: 2,
            group: "Funny news from around the world",
            text: "A coffee roastery in Finland has launched an AI-generated blend. The results were surprising",
            url: "https://apnews.com/article/artificial-intelligence-finland-coffee-blend-0cd12d5ae15a6d0e928c4cb4d7635b09"
        },
        {
            id: 3,
            group: "Funny news from around the world",
            text: "The world’s oldest man says the secret to his longevity is luck, plus regular fish and chips",
            url: "https://apnews.com/article/oldest-man-guinness-world-records-john-tinniswood-cc1a154db05464106c1f05bdb09df73c"
        }
    ]
};

export const homePageSlice = createSlice({
    name: 'HomePage',
    initialState,
    reducers: {
        addNewsItem: (state, action: { payload: HomePageNewsItem }) => {
            state.news = [...state.news, action.payload]
        },
    }
})