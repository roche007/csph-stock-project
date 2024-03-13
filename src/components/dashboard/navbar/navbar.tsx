"use client"
import { MdNotifications } from 'react-icons/md';;

export default function NavBarPage() {
    const navigateToProfile = () => {
        
    }

    return (
       
        <div className="w-full pr-2 flex flex-row items-center gap-2 justify-end">

            <MdNotifications size={20}/>

            <span className=""> Admin </span>
            
            <button type="button" className="" onClick={()=>navigateToProfile()}>
                <img src="/assets/img/avatar.png" alt="Avatar" height={40} width={40}/>
            </button>
            
            <span className=""> Aang </span>

        </div>
      
    )
}