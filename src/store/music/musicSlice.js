import { createSlice } from '@reduxjs/toolkit';

export const musicSlice = createSlice({
    name: 'music',
    initialState: {
        albums: [],
        active: null,
        switchForm: false
    },
    reducers: {
        setSwitchForm: (state, action) => {
            state.switchForm = action.payload
        },
        setActiveAlbum: (state, action) => {
            state.active = action.payload.album;
        },
        clearActiveAlbum: (state) =>{
            state.active= null
        },
        setAlbums: (state, action) => {
            state.albums = action.payload.albums;
        },
        addNewAlbum: (state, action) => {
            state.albums.push( action.payload.album);
        },   
        updateAlbum: (state, action) => {
            state.albums = state.albums.map( album =>{
                if(album.id === action.payload.album.id){
                    return action.payload.album;
                }
                return album;
            });
        },
        deleteAlbumById: (state, action) => {
            state.active = null,
            state.albums = state.albums.filter(album => album.id !== action.payload);
        },
    }
 });
// Action creators are generated for each case reducer function
export const { 
        setSwitchForm,
        setActiveAlbum, 
        clearActiveAlbum, 
        setAlbums, 
        addNewAlbum,
        updateAlbum,
        deleteAlbumById
    } = musicSlice.actions;