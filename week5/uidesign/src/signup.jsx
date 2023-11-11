import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signuppage(){
    const [email,setEmail]= useState("")
    const [password,setPassword]= useState("")
    const navigate= useNavigate();

    return <div>
    <div class= " p-20 min-h-screen flex flex-col items-center justify-items-center">
        <div class='flex flex-col justify-center items-center'>
            <p class="text-2xl font-bold text-gray-500">Welcome to Coursera</p>

            <p class=" pb-5 text-lg font-bold text-gray-500">SignUp now</p>
       </div>
    
        <div class="pt-2 sm:w-3/4 md:w-3/4 lg:w-3/12">
            
    <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    
        <form>
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" onChange={(e)=>{setEmail(e.target.value)}} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@domain.com" required/>
        </div>
        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="*************" required/>
        </div>
        <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button onClick={()=>{
            console.log(email+"  "+ password)
            fetch('http://localhost:3000/admin/signup',{method:"POST",  
            headers: { 'Content-Type': 'application/json' },
            body:JSON.stringify({
                    uname:email,
                    pwd:password
            })}).then((res)=>{
                if (res.status ==200){
                    alert("Singup Sucessful. Redirection you to signin page")
                    navigate('/signin')
                } else res.text().then((msg)=>alert(msg))
            })
        }} type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
        </form>
        </div>
    </div>
    </div>
    </div>
  }
  

export default Signuppage;