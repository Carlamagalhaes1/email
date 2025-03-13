import { Button, HamburguerIcon, NavLogo, NavMobileItem } from "components";
import { useNavMobileContext } from "components/context/NavMobileContext";
import { Link } from "react-router-dom";

export function Nav() {
    const {isVisible, setIsVisible} = useNavMobileContext();
    return (
        <nav className="w-full h-20 bg-gray-50 border-gray-300">
            <div className="w-full  h-full max-w-7xl m-auto flex items-center justify-between px-4 ">
                <NavLogo />
                <div className="hidden lg:flex items-center gap-4">
                    <Link to='/dashboard'><Button>Dashborad</Button></Link>
                    <Link to='/escrever-agora'>
                        <Button variant="primary">Escrever agora</Button></Link>
                    <Link to='/contatos'><Button>Contatos</Button></Link>
                    <Link to='/emails'><Button>Emails</Button></Link>
                </div>
                <div className="flex lg:hidden">
                    <Button onClick={() => setIsVisible((prev) => !prev)}>
                        {isVisible ? (<span className="font bold text-2xl">X</span>): (<HamburguerIcon/>)   }
                        
                    </Button>
                </div>



            </div>
            {isVisible && (
                <div className="w-full h-[calc(100vh-81px)] absolute top-20 left-0 bg-white">
                <div className="flex flex-col items-stretch justify-center">
                    <Link to='/dashboard' >
                     <NavMobileItem >  Dashboard</NavMobileItem>
                    </Link>
                   
                        <Link to='/escrever-agora'>
                        <NavMobileItem variant="primary" >Escrever agora</NavMobileItem></Link>
                
                        <Link to='/contatos'><NavMobileItem>Contatos</NavMobileItem>
                        </Link>       
                        <Link to='/emails'><NavMobileItem>E-mailks</NavMobileItem></Link>
                   
                </div>
            </div>
            ) }
            


        </nav>

    )

}