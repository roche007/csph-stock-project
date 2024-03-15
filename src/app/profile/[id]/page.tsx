export default function UserProfile() {
    return (
        <div className="flex items-center p-7">
            <div className="">
                <div className="relative">
                <img src="/assets/img/avatar.png" alt="Avatar" height={400} width={400}/>
                </div>
                Aang
            </div>
            <div className="mt-10 m-10 flex flex-col p-12 border border-background-yellow drop-shadow-xl shadow-xl bg-background-yellow mb-10 rounded-xl ">
                <label>username</label>
                <input type="text" name="username" placeholder="Aang"/>
                <label>email</label>
                <input type="email" name="username" placeholder="Aang@gmail.com"/>
                <label>password</label>
                <input type="password" name="username" placeholder="Aangpassword"/>
                <label>telephone</label>
                <input type="text" name="userPhone" placeholder="+237 3333"/>
                <label>Adresse</label>
                <textarea  name="adresse" placeholder="Yaoundé"/>
                <label>Is Admin</label>
                <select name="isAdmin" id="isAdmin">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <label>Is Active</label>
                <select name="isActive" id="isActive">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <button className="rounded-xl bg-golden-yellow mt-5">Update</button>
            </div>
        </div>
    )
}