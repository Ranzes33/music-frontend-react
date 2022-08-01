import { useParams } from "react-router-dom"
import { useSearchAlbum } from "../../hooks/useSearchAlbum";
import { FoundAlbum } from "../components/FoundAlbum";
import { HomePage } from "./HomePage";
import { Footer } from "../../ui/Footer";

export const AlbumPage = () => {
    const { id } = useParams();
    const active = useSearchAlbum(id);
    
    return (
        <>
            <h1 className='animate__animated animate__flash mt-5'>Album Page</h1>
            <hr />
            {
                (active === null)
                ? <HomePage/>
                : <FoundAlbum {...active}/>
            }
            
            <Footer />
        </>
    )
}
