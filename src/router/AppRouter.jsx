import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, MusicPage } from '../music/pages';
import { AlbumPage } from "../music/pages/AlbumPage";

export const AppRouter = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="menu" element={<MusicPage />} />
                    <Route path="/album/:id" element={<AlbumPage/>}/>

                    <Route path="/*" element={<Navigate to="/home" />} />
                </Routes>
            </div>
        </>
    )
}
