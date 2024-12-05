import { NavMobileProvider } from "components/context/NavMobileContext";
export * from './NavMobileContext'
export function AppContext({children} : { children: React.ReactNode}) {
    return (
        <>
          <NavMobileProvider>
            {children}

          </NavMobileProvider>
        </>
    )

}