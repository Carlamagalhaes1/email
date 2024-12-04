import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contatos, Dashboard, Emails, WriteNowPage } from "./pages";


export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="dashboard" element={<Dashboard/>}></Route>
                <Route path="contatos" element={<Contatos/>}></Route>
                <Route path="emails" element={<Emails/>}></Route>

                <Route path="escrever-agora" element={<WriteNowPage/>}></Route>
               
            </Routes>
          
            
        </BrowserRouter>

    )
}