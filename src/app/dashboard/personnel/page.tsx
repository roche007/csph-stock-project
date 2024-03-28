"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchPage from "@/components/dashboard/search/search";
import Link from "next/link";
import Pagination from "@/components/dashboard/pagination/pagination";

interface User {
    id: number;
    name: string; // Champ modifié en "Nom"
    email: string;
    // Ajoutez d'autres champs au besoin
}

const PersonnelPage = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/users/');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div className="h-[calc(100%-50px)]">
            <div className="">
                <div className="bg-golden-yellow flex items-center justify-between">
                    <SearchPage placeholder="Search for a user..." />
                    <Link href="/dashboard/personnel/addPersonnel">
                        <button className="bg-background-yellow rounded-lg"> <span className="p-2">Add New User</span></button>
                    </Link>
                </div>
                <div className="p-10 h-[calc(100%-1px)]">
                    <div className="p-10 border border-background-yellow drop-shadow-xl shadow-xl bg-background-yellow mb-10 rounded-xl cursor-pointer w-full h-full overflow-auto">
                        <table className="w-full justify-center items-center mb-10">
                            <thead className="">
                                <tr className="divide-x divide-gray-300 bg-dark-green">
                                    <th className="px-4 py-2 text-center">Name</th>
                                    <th className="px-4 py-2 text-center">Email</th>
                                    <th className="px-4 py-2 text-center">Phone number</th>
                                    <th className="px-4 py-2 text-center">Created At</th>
                                    <th className="px-4 py-2 text-center">Role</th>
                                    <th className="px-4 py-2 text-center">Status</th>
                                    <th className="px-4 py-2 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="px-4 py-2 text-center">{user.name}</td> {/* Utilisez "Nom" au lieu de "nom" */}
                                        <td className="px-4 py-2 text-center">{user.email}</td>
                                        <td className="px-4 py-2 text-center">3333</td>
                                        <td className="px-4 py-2 text-center">12.12.2022</td>
                                        <td className="px-4 py-2 text-center">Admin</td>
                                        <td className="px-4 py-2 text-center">Active</td>
                                        <td>
                                            <div className="flex justify-center items-center">
                                                <Link href={`/profile/${user.id}`} as={`/profile/${user.id}`}>
                                                    <button className="bg-claier-blue rounded-lg mr-2 cursor-pointer"><span className="p-2">View</span></button>
                                                </Link>
                                                <button className="bg-red-400 rounded-lg ml-2 cursor-pointer"><span className="p-2">Delete</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonnelPage;
