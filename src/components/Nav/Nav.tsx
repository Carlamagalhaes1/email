import { Button, NavLogo } from "components";

export function Nav (){
    return (
        <nav className="w-full h-20 bg-gray-50 border-gray-300">
            <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between">
                <NavLogo/>
                <Button variant="primary">Escrever agora</Button>
                
                </div>
            
        </nav>

    )

}