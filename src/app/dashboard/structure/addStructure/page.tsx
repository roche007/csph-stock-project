export default function AddStructurePage() {
    return (
        <div className="h-[calc(100%-50px)]">
        <div className="p-10 h-[calc(100%-1px)]">
            <div className=" border border-background-yellow drop-shadow-xl shadow-xl bg-background-yellow mb-10 rounded-xl cursor-pointer w-full h-full overflow-auto">
                <form action="" className="p-20">
                    <div className="flex flex-wrap mb-4">
                        <div className="w-full mb-6">
                            <input type="text" className="w-full h-12 rounded-lg" placeholder="username" name="username" required/>
                        </div>
                        <div className="w-full mb-6">
                            <input type="text" className="w-full h-12 rounded-lg" placeholder="email" name="email" required/>
                        </div>
                        <div className="w-full mb-6">
                            <input type="text" className="w-full h-12 rounded-lg" placeholder="password" name="password" required/>
                        </div>
                        <div className="w-full mb-6">
                            <input type="text" className="w-full h-12 rounded-lg" placeholder="phone" name="phone" required/>
                        </div>
                        <div className="w-full mb-6 md:w-1/2 pr-2">
                            <select name="isAdmin" id="isAdmin" className="w-full h-12 rounded-lg">
                                <option value="false" selected>is Admin ?</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>              
                            </select>
                        </div>
                        <div className="w-full mb-6 md:w-1/2 pl-2">
                            <select name="isActive" id="isActive" className="w-full h-12 rounded-lg">
                                <option value="true" selected>is Active ?</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>              
                            </select>
                        </div>
                    </div>
                    <div className="w-full mb-6">
                        <textarea name="adresse" id="adresse" cols={100} rows={5} className="w-full h-32 rounded-lg" placeholder="Adresse"></textarea>
                    </div>
                    <button className="Submit w-full bg-golden-yellow rounded-lg">Enregistrer</button>
                </form>
            </div>
        </div>
        </div>
    )
}
