import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { startLoadingAlbums } from "../../store/music/thunks";
import { MusicCard } from "./MusicCard";

export const MusicList = () => {

    const { albums = [] } = useSelector(state =>state.music);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingAlbums());
    }, [])
    
    
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
        {
            albums.map( album =>(
                <MusicCard key={album.id} {...album}/>
            ))
        }
    </div>
  )
}
