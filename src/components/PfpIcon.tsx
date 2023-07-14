import React from "react";
import type { LinkProps } from "./Bio";

export const PfpIcon = () => {
    return (
        <Link>
            <img
                src="/me.png"
                alt="My image"
                className="rounded-md w-12 min-w-12 hover:scale-110"
            />
      </Link>
    )
}

const Link = ({ children }: LinkProps) => {
    return (
        <a href="/" className="cursor-pointer">
            {children}
        </a>
    )
}