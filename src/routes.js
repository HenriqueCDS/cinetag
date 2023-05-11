import Favoritos from "./pages/Favoritos";
import Inicio from "./pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Player from "./pages/player";
import NotFound from "./pages/NotFound";
import PageBase from "./pages/PageBase";

export default function AppRoutes() {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageBase/>}>
                        <Route index element={<Inicio />}/>
                        <Route path="favoritos" element={<Favoritos />}/>
                        <Route path=":id" element={<Player />}/>
                        <Route path="*" element={<NotFound />}/>\
                    </Route>
                </Routes>
        </BrowserRouter>
    )
    
}