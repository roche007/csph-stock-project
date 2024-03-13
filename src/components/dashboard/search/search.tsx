"use client"
import { MdSearch } from "react-icons/md";

interface SearchPageProps {
    placeholder?: string;
}

export default function SearchPage({ placeholder }: SearchPageProps) {
    return (
        <div className="flex items-center justify-center max-w-3xl p-1">
            <div className="relative">
                <input type="text" placeholder={placeholder} className="bg-background-yellow border-none outline-none rounded-lg pl-8" />
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
                    <MdSearch />
                </div>
            </div>
        </div>
    )
}
