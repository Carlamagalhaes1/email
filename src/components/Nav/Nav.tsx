import { Button, HamburguerIcon, NavLogo, NavMobileItem } from "components";
import { Link } from "react-router-dom";

export function Nav() {
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
                    <Button onClick={() => console.log('meb==nu')}>
                        <HamburguerIcon />
                    </Button>
                </div>



            </div>
            <div className="w-full h-[calc(100vh-81px)] absolute top-20 left-0 bg-white">
                <div className="flex flex-col items-center justify-center">
                    <NavMobileItem>
                        <Link to='/dashboard'><Button>Dashborad</Button></Link>

                    </NavMobileItem>

                    <NavMobileItem>
                        <Link to='/escrever-agora'>
                            <Button variant="primary">Escrever agora</Button></Link>
                    </NavMobileItem>
                    <NavMobileItem>
                        <Link to='/contatos'><Button>Contatos</Button></Link>
                    </NavMobileItem>
                    <NavMobileItem>
                        <Link to='/emails'><Button>Emails</Button></Link>
                    </NavMobileItem>
                </div>
            </div>


        </nav>

    )

}