"use client"

import styled from "@emotion/styled"
import Link  from "next/link"
import { usePathname } from "next/navigation";
import React from "react"

interface MenuItem {
    title: string;
    path: string;
    icon: React.ReactNode; // Ou tout autre type approprié pour votre icône
  }
  
  interface MenuLinkProps {
    item: MenuItem;
  }

  export default function MenuLink({item}: MenuLinkProps) {

    const pathname = usePathname()
    console.log(pathname)

    return (
        <Link href={item.path} className="flex p-2 items-center justify-start gap-1 text-dark-green" >
            {item.icon}
            {item.title}
        </Link>
    )
}