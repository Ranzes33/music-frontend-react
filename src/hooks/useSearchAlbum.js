import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { startFindAlbum } from "../store/music/thunks";


export const useSearchAlbum = (id) => {
    const { active } = useSelector(state => state.music);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(startFindAlbum(id));
    },[]);
    return active;
}
