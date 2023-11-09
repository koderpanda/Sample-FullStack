import { useNavigate } from "react-router-dom";
function Appbar(){
    const navigate = useNavigate();

return( <div>

<div class="flex px-5 pt-2 justify-between">

<p class="m-2 text-3xl  text-gray-800 font-semibold">Coursera</p>

<div class ="flex justify-around">
        <button onClick={()=>navigate('/signin')} class=" m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignIn</button>
    
        <button onClick={()=>navigate('/signup')}  class="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SignUp</button>
 </div>
</div>
</div>)

}

export default Appbar;