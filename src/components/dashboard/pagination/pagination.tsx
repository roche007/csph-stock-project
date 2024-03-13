"use client"

export default function PaginationPage() {
    return (
        <div className="flex justify-between p-1">
            <button className="cursor-not-allowed bg-golden-yellow rounded-xl"><span className="p-4">Précédent</span></button>
            <button className="bg-golden-yellow rounded-xl"><span className="p-4">Suivant</span></button>
        </div>
    )
}