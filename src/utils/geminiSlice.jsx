import { createSlice } from "@reduxjs/toolkit";

const geminiSlice = createSlice({
    name: 'gemini',
    initialState: {
        showGeminiSearch: false,
        movieResults:null,
        movieNames:null,
    },
    reducers: {
        toggleGeminiSearchView:(state) => {
            state.showGeminiSearch = !state.showGeminiSearch;

        } ,
        addGeminiMovieResult:(state,action)=>{
            const{movieNames,movieResults}=action.payload;
            state.movieResults=movieResults;
            state.movieNames=movieNames;

        },
    },

});
export default geminiSlice.reducer;
export const { toggleGeminiSearchView , addGeminiMovieResult} = geminiSlice.actions;