import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"


export default function Navbar() {

  const{logout}=useLogout()
  const {user} = useAuthContext()
  return (
    <nav className="flex justify-around items-center bg-purple-200 px-3 py-4">
        <div className="font-semibold -tracking-wide text-2xl">
            <Link to ='/'>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                TodoApp
                </div> 
            </Link>
        </div>
        <ul className="flex space-x-4 items-center">

          {!user&&(

<>
<li><Link to='login'>Login</Link></li>
  <li> <Link to ='signup'>Sign Up</Link></li>
</>

          )}
         
            {user &&(
              <>
              <li>
                Hello, {user.displayName}
              </li>
              <li>
              <button onClick={logout} className="border border-purple-900 text-purple-700 font-bold rounded-lg px-2 py-1 cursor-pointer hover:bg-purple-600 hover:text-white text-center">LogOut</button>
            </li>
            </>
            
            )}
          
        </ul>

    </nav>
  )
}
