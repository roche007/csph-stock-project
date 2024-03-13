export default function AddDataPage() {
    return (
        <div className="h-[calc(100%-1px)]">
            <div className="p-10 border border-background-yellow drop-shadow-xl shadow-xl bg-background-yellow mb-10 rounded-xl cursor-pointer w-full h-full overflow-auto">

                <form action="" className="p-20">
                    <div className="flex justify-between mb-4">
                        <div className="w-1/2 pr-2">
                            <input type="text" className="w-full mb-6 h-12 rounded-lg" placeholder="title" name="title" required/>
                        </div>
                        <div className="w-1/2 pl-2">
                            <select name="cat" id="cat" className="w-full mb-6 h-12 rounded-lg">
                                <option value="general">Chosir une categorie</option>
                                <option value="ProduitBrut">Produit Brut</option>
                                <option value="Simple produit">Simple Produit</option>
                                <option value="produit Noir">Produit Noir</option>                 
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="w-1/2 pr-2">
                            <input type="number" placeholder="Gasoil reçu" name="Gasoil reçu" className="w-full mb-6 h-12 rounded-lg" />
                        </div>
                        <div className="w-1/2 pl-2">
                            <input type="number" placeholder="Gasoil vendu" name="Gasoil vendu" className="w-full mb-6 h-12 rounded-lg" />
                        </div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="w-1/2 pr-2">
                            <input type="number" placeholder="Super reçu" name="Super reçu" className="w-full mb-6 h-12 rounded-lg" />
                        </div>
                        <div className="w-1/2 pl-2">
                            <input type="number" placeholder="Super vendu" name="Sper vendu" className="w-full mb-6 h-12 rounded-lg" />
                        </div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="w-1/2 pr-2">
                            <input type="number" placeholder="Petrol reçu" name="Petrol reçu" className="w-full mb-6 h-12 rounded-lg" />
                        </div>
                        <div className="w-1/2 pl-2">
                            <input type="number" placeholder="Petrol vendu" name="Petrol vendu" className="w-full mb-6 h-12 rounded-lg" />
                        </div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <div className="w-1/2 pr-2">
                            <input type="number" placeholder="Gaz reçu" name="Gaz reçu" className="w-full mb-6 h-12 rounded-lg" />
                        </div>
                        <div className="w-1/2 pl-2">
                            <input type="number" placeholder="Gaz vendu" name="Gaz vendu" className="w-full mb-6 h-12 rounded-lg" />
                        </div>
                    </div>
                    <button className="Submit w-full bg-golden-yellow rounded-lg">Enregistrer</button>
                </form>
            </div>
        </div>
    )
}
