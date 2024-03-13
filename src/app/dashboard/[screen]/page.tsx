"use client"

import Card1 from "@/components/dashboard/card/card1/page"
import Card2 from "@/components/dashboard/card/card2/page"
import Card3 from "@/components/dashboard/card/card3/page"
import Chart from "@/components/dashboard/chart/page"
import { GiFuelTank } from "react-icons/gi";
import { MdCalendarMonth } from "react-icons/md";
import { FaGlobeAfrica } from "react-icons/fa";
import TopMenuDashboard from "@/components/dashboard/topMenuDashboard/page";
import { DASHBOARD_SCREENS, MARKETEUR_SCREENS, STRUCTURE_SCREENS } from "@/constants/dashboard"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Page({ params }: { params: { screen: string } }) {
    const SCREEN_PARAM = decodeURI(params.screen)
    const router = useRouter()

    useEffect(()=>{
        
    },[])
    return (
        <div className="h-[calc(100%-50px)]">
            
            <div className="flex flex-row-reverse mt10">
                <TopMenuDashboard
                    currentScreen = {SCREEN_PARAM}
                />
            </div>

            <div className="mt-15 p-10">
                <div className="flex flex-row flex-wrap gap-3 justify-between mb-4 ">
                    <Card1/>
                    <Card2/>
                    <Card3/>
                </div>
            
                <Chart/>
            </div>
            
        </div>
    )

}