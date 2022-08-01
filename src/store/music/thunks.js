import { musicApi } from "../../api/musicApi"
import { addNewAlbum, deleteAlbumById, setActiveAlbum, setAlbums, setSwitchForm, updateAlbum } from "./musicSlice";

export const startLoadingAlbums = () => {
    return async (dispatch) => {
        const { data } = await musicApi.get('/all');
        dispatch(setAlbums({ albums: data }))
    }
}
export const startFindAlbum = (id = '') => {
    return async (dispatch) => {
        const { data } = await musicApi.get(`/find/${id}`);
       dispatch(setActiveAlbum( {album: data} ));
    }
}
export const startSaveAlbum = () => {
    return async (dispatch, getState) => {
        //console.log(getState().music)
        const { active: album } = getState().music;
        if(album.id != undefined){
            const { data } = await musicApi.put('/edit', album);
            dispatch(updateAlbum({album: data}));
        } else{
            const { data } = await musicApi.post('/save', album); 
            dispatch(addNewAlbum({album: data}));
        }   
        dispatch(setSwitchForm(false));
    }
}
export const startDeletingNote = () =>{
    return async(dispatch, getState) => {
        const { active: album } = getState().music;
        await musicApi.delete(`/delete/${album.id}`);
        dispatch( deleteAlbumById(album.id));
    }
}