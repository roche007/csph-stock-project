"use client"
import SearchPage from "@/components/dashboard/search/search"
import Link from "next/link"
import Pagination from "@/components/dashboard/pagination/pagination"


export default function AddDataPage() {
    return (
        <div className="h-[calc(100%-50px)]">
            <div className="bg-golden-yellow flex items-center justify-between">
                <SearchPage placeholder="Search for a user..."/>
                <Link href="/dashboard/filldata/addData">
                <button className="bg-background-yellow rounded-lg"> <span className="p-2">Add New Data</span></button>
                </Link>
            </div>
            <div className="p-10 h-[calc(100%-1px)]">
        <div className="p-10 border border-background-yellow drop-shadow-xl shadow-xl bg-background-yellow mb-10 rounded-xl cursor-pointer w-full h-full overflow-auto">
         
            <table className="w-full justify-center items-center mb-10">

            <thead className="">
                <tr className="divide-x divide-gray-300 bg-dark-green">
                    <th className="px-4 py-2 text-center">Date</th>
                    <th className="px-4 py-2 text-center">Gasoil Reçu/L</th>
                    <th className="px-4 py-2 text-center">Gasoil vendu/L</th>
                    <th className="px-4 py-2 text-center">Super Reçu/L</th>
                    <th className="px-4 py-2 text-center">Super vendu/L</th>
                    <th className="px-4 py-2 text-center">Petrol Reçu/L</th>
                    <th className="px-4 py-2 text-center">Petrol vendu/L</th>
                    <th className="px-4 py-2 text-center">Gaz Reçu/L</th>
                    <th className="px-4 py-2 text-center">Gaz Vendu/L</th>
                    <th className="px-4 py-2 text-center">Action</th>

                </tr>
            </thead>
                <tbody>
                    <tr>
                        <td className="px-4 py-2 text-center">23.11.2022</td>
                        <td className="px-4 py-2 text-center">22399889</td>
                        <td className="px-4 py-2 text-center">235548</td>
                        <td className="px-4 py-2 text-center">333333</td>
                        <td className="px-4 py-2 text-center">121222</td>
                        <td className="px-4 py-2 text-center">347876</td>
                        <td className="px-4 py-2 text-center">676773</td>
                        <td className="px-4 py-2 text-center">67676472</td>
                        <td className="px-4 py-2 text-center">4676565</td> 
                        <td>
                            <div className="flex justify-center items-center">
                                <Link href="/">
                                <button className="bg-claier-blue rounded-lg mr-2 cursor-pointer"><span className="p-2">View</span></button>
                                </Link>
                                <button className="bg-red-400 rounded-lg ml-2 cursor-pointer"><span className="p-2">Delet</span></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination/>
        </div>
        </div>
        </div>
    )
}