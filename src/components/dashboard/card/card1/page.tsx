"use client"

export default function Card1() {
    return (
        <div className="w-[300px] h-[200px] border border-background-yellow drop-shadow-xl shadow-xl bg-background-yellow mb-10 rounded-xl cursor-pointer p-2">
            <div className=" font-bold items-center justify-center flex mb-4">
                Dernière Transaction
            </div>
            <div className="flex flex-col m-2 ">
                <span className=""> <span className=" font-bold ">Gasoil : </span> <span className=" font-bold text-goldern-brown "> 150000L </span> </span>
                <span className=""> <span className=" font-bold ">Super : </span> <span className=" font-bold text-claier-blue "> 299000L </span> </span>
                <span className=""> <span className=" font-bold ">Petrol : </span> <span className=" font-bold text-dark-green "> 150000L </span> </span>
                <span className=""> <span className=" font-bold ">Gaz : </span> <span className=" font-bold text-gaz-brown "> 299000L </span> </span>
            </div>
        </div>
    )
}