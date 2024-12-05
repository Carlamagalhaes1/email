import classNames from "classnames";

type Props = {
    variant?: 'default' | 'primary';
    children: React.ReactNode;
    
}

export function NavMobileItem( { variant = 'default' ,  children }: Props) {
    let bgColor = 'bg-white hover:bg-gray-200 transition-all active:bg-gray-200 text-black'
    if ( variant === 'primary') {
        bgColor = 'bg-primary text-white hover:bg-blue-300 active:bg-primaryDark text-white';
    }
    return (
        <>
            <div className={ classNames("w-full p-4 border-b border-gray-100" , bgColor)}>
                {children}
                
            </div>
        </>

    )
}