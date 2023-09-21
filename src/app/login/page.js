import Image from 'next/image';
import logo from '../assets/logo.png';
import loginImage from "../assets/loginImage.png"
import gmailLogo from "../assets/gmail.png"
export default function Login() {
    return (
    <main className="w-full h-full backgroundColor">
        <div className='w-full blueColor flex flex-row items-center justify-between absolute'>
            <Image src={logo} className='mx-5'></Image>
            <div className='flex justify-center items-center space-x-6 mx-4 py-2 '>
                <p className=' text-white'>don't have an account yet ? </p>
                <button className=' text-lg border-solid rounded-lg  border-2 py-1 px-3 hover:scale-110 transition-all duration-500 switchColor'>Register</button>
            </div>
        </div>
        <div className=' container flex flex-row h-screen'>
            <div className=' basis-1/2 flex items-center justify-center'>
                <Image src={loginImage} className='h-1/2 w-1/2' ></Image>
            </div>
            <div className=' basis-1/2 bg-white flex flex-col justify-center items-center space-y-3'>
                <button className=' bg-blue-500  rounded-xl w-2/5 h-11 font-semibold text-white flex justify-center items-center '><Image src={gmailLogo} className='mx-2'></Image> login with google</button>
                <select name="role" id="role" className='bg-slate-100 border-2 border-solid rounded-xl w-3/5 h-11 border-slate-300 px-3'>
                    <option value="student">student</option>
                    <option value="teacher">teacher</option>
                    <option value="parent">parent</option>
                </select>
                <input name="email" type='text' placeholder='email' className=' bg-slate-100 border-2 border-solid rounded-xl w-3/5 h-11 border-slate-300 px-3' ></input>
                <input name="password" type='text' placeholder='password' className=' bg-slate-100 border-2 border-solid rounded-xl w-3/5 h-11 border-slate-300 px-3' ></input>
            </div>

        </div>
    </main>
    )
}
