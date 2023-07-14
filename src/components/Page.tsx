import React from "react";

type Props = {
    children: React.ReactNode
}

export const Page = ({ children }: Props) => {
    return (
        <div className='p-6'>
            <div className='m-0 sm:md-12 md:mt-20 lg:mt-40 flex justify-center'>
                <div className='max-w-[1080px] flex flex-col gap-20'>
                    {children}
                </div>
            </div>
        </div>
    )
}