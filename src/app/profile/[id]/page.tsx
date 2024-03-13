export default function UserProfile() {
    return (
        <div className="">
            <div className="">
                <div className="">
                <img src="/assets/img/avatar.png" alt="Avatar" height={40} width={40}/>
                </div>
                Aang
            </div>
            <div className="">
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
            </div>
        </div>
    )
}