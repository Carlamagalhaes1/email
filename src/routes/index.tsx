import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, WriteNOtPage } from "./pages";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="dashboard" element={<Dashboard/>}></Route>
                <Route path="escrever-agora" element={<WriteNOtPage/>}></Route>
            </Routes>
          
            
        </BrowserRouter>

    )
}