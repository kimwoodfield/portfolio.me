import React from "react";

type Props = {
    children: React.ReactNode
}

export const Page = ({ children }: Props) => {
    return (
        <div className='p-6'>
            <div className='m-0 sm:md-12 md:mt-20 lg:mt-40'>
                {children}
            </div>
        </div>
    )
}