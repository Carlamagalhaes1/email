type Props = {
    children: React.ReactNode

}

export function NavMobileItem( { children }: Props) {
    return (
        <>
            <div className="w-full p-4 border-b border-gray-100 ">
                {children}
                
            </div>
        </>

    )
}