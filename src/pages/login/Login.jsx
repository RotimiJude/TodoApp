import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"


export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword]= useState('')
  const {login, error, isPending}=useLogin()

  const handleSubmit= (e) => {
    e.preventDefault()
    login(email, password)
  }
  
  return (
    <div className='flex justify-center items-center min-h-fit'>
      <div className='w-[400px] md:w-[500px] duration-500  rounded-xl p-7'>

        <div className='flex flex-col items-center'>
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">

          
<svg className="size-10 text-white peer-focus:text-gray-600 duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>

</div>
<h3 className='text-3xl font-bold text-gray-900 mb-2'>Welcome Back</h3>
        <p className='tracking-widest'>Sign in to your account to continue</p>
        </div>

        {/* Form Container */}

        <form onSubmit={handleSubmit} className='flex flex-col my-5 space-y-7'>
          <div className='flex items-center rounded-lg p-1  border border-blue-500'>
            <input type='email' className='w-full border-0 outline-0 focus:placeholder-transparent tracking-widest placeholder:font-bold peer ' placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}/>

            <svg className="size-8 text-gray-400 peer-focus:text-gray-600 duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      </svg>
            

          </div>

          <div className='flex items-center rounded-lg p-1  border border-blue-500'>
            <input type='password' className='w-full border-0 outline-0 focus:placeholder-transparent tracking-widest placeholder:font-bold peer ' placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}/>

            <svg className="size-8 text-gray-400 peer-focus:text-gray-600 duration-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeWidth="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"/>
                        <path stroke="currentColor" strokeWidth="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      </svg>
            

          </div>


          {!isPending && <button className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer'>
            Login
          </button>
          }
          {isPending && <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold transition-all duration-200 cursor-not-allowed" disabled>
            Login
          </button>
          }

          

        </form>
        {error && <p className="text-red-500">{error}</p>}

        

      </div>

    </div>
  )
}
