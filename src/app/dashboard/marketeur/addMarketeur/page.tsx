"use client"

import ReactSelect from 'react-select';

export default function AddStructurePage() {
    return (
        <div className="h-[calc(100%-50px)]">
            <div className="p-10 h-[calc(100%-1px)]">
                <div className=" border border-background-yellow drop-shadow-xl shadow-xl bg-background-yellow mb-10 rounded-xl cursor-pointer w-full h-full overflow-auto">
                    <form action="" className="p-7">
                        <div className="flex flex-wrap mb-4">
                            <div className="w-full mb-6 md:w-1/2 pr-2">
                                <ReactSelect
                                    isMulti
                                    options={[
                                        { value: 'Entreprise', label: 'Entreprise' },
                                        { value: 'Entreprise Vente', label: 'Entreprise Vente' },
                                        { value: 'Entreprise Achat', label: 'Entreprise Achat' },
                                        { value: 'Entreprise Dépot', label: 'Entreprise Dépot' },
                                        { value: 'Entreprise d\'importation', label: 'Entreprise d\'importation' },
                                        { value: 'Entreprise d\'importation et vente', label: 'Entreprise d\'importation et vente' }
                                    ]}
                                    placeholder="Sélectionnez une ou plusieurs entreprises"
                                />
                            </div>
                            <div className="w-full mb-6 md:w-1/2 pr-2">
                                <ReactSelect
                                    isMulti
                                    options={[
                                        { value: 'Entreprise', label: 'Entreprise' },
                                        { value: 'Entreprise Vente', label: 'Entreprise Vente' },
                                        { value: 'Entreprise Achat', label: 'Entreprise Achat' },
                                        { value: 'Entreprise Dépot', label: 'Entreprise Dépot' },
                                        { value: 'Entreprise d\'importation', label: 'Entreprise d\'importation' }
                                    ]}
                                    placeholder="Sélectionnez une ou plusieurs entreprises"
                                />
                            </div>
                            <div className="w-full mb-6">
                                <input type="text" className="w-full h-12 rounded-lg pl-2" placeholder="nom_marketeur" name="marketeurname" required/>
                            </div>
                            <div className="w-full mb-6">
                                <input type="text" className="w-full h-12 rounded-lg pl-2" placeholder="email" name="email" required/>
                            </div>
                            <div className="w-full mb-6">
                                <input type="text" className="w-full h-12 rounded-lg pl-2" placeholder="téléphone" name="phone" required/>
                            </div>

                            <div className="w-full mb-6 md:w-1/2 pr-2">
                                <select name="cat" id="cat" className="w-full h-12 rounded-lg pl-2">
                                    <option value="general">Produit blanc</option>
                                    <option value="ProduitBrut">Oui</option>
                                    <option value="Simple produit">Non</option>
                                </select>
                            </div>
                            <div className="w-full mb-6 md:w-1/2 pl-2">
                                <select name="cat" id="cat" className="w-full h-12 rounded-lg pl-2">
                                    <option value="general">Produit gaz</option>
                                    <option value="ProduitBrut">Oui</option>
                                    <option value="Simple produit">Non</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full mb-6 items-center">
                            <textarea name="adresse" id="adresse" cols={100} rows={2} className="w-full h-12 rounded-lg pl-2" placeholder="Adresse"></textarea>
                        </div>
                        <button className="Submit w-full bg-golden-yellow rounded-lg">Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
