import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Double } from 'mongodb'
import { RootState } from '../store'
import axios from 'axios'
import { Manga } from '../types/manga'
import { use } from 'react'

export interface MangaState {
    mangaObject: Manga;
    mangaList: Manga[];
}


const initialState: MangaState = {
   mangaObject: {name: " ", price: null, description: null, condition: null, image: null},
   mangaList: []
}

export const saveManga = createAsyncThunk('manga/saveManga', async (_, { getState }) => {
    const state = getState() as RootState;
    const savedManga = state.manga
    await axios.post('http://localhost:3000/api/manga', savedManga)
    .then((response) => {
        console.log(response.data)
    })
})




export const mangaSlice = createSlice({
    name: "manga",
    initialState,
    reducers: {
        addName: (state, action: PayloadAction<string>) => {
            state.mangaObject.name = action.payload
        }, 
        addPrice: (state, action: PayloadAction<string> ) => {
            state.mangaObject.price = action.payload;
        },
       addDesc: (state, action: PayloadAction<string>) => {
            state.mangaObject.description = action.payload; 
       },
       addCondition: (state, action: PayloadAction<string>) => {
         state.mangaObject.condition = action.payload
       },
       getCurrentManga: (state) => {
         const savedManga = {...state}
         console.log("Current Manga: " + (savedManga))
       },
       addImage: (state, action: PayloadAction<string>) => {
            state.mangaObject.image = action.payload
       }
    }
})


export const setManga = createAsyncThunk('manga/getManga', async (foundManga: MangaState) => {
    addName(foundManga.mangaObject.name)
    addPrice(foundManga.mangaObject.price)
    addDesc(foundManga.mangaObject.description)
    addImage(foundManga.mangaObject.condition)
})

export const getUserVault = createAsyncThunk('manga/getUserVault', async(state) => {
    let userVault = []    
    await axios.get('http://localhost:3000/api/route').then((response) => {
        userVault = response.data
 });
  //  this.state.mangaList = userVault;
})

export const {addName, addCondition, addDesc, addPrice, getCurrentManga, addImage } = mangaSlice.actions

//export const selectName = (state: RootState ) => state.manga.Name;
// export const selectPrice = ( state: RootState ) => state.manga.price

export default mangaSlice.reducer;

