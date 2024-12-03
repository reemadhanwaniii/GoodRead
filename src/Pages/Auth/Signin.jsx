import { useState } from "react";
import { Link } from "react-router-dom"

export default function Signin() {

    const [signinDetails,setSigninDetails] = useState({
        email: '',
        password: ''
    });

    function handleFormChange(e) {
        const {name,value} = e.target;
        setSigninDetails({...signinDetails,[name]:value})
    }

    function onFormSubmit(e) {
        e.preventDefault();
        console.log(signinDetails);
    }

    return(
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div>
                <h1 className="text-white text-5xl">Login to your account</h1>
            </div>
            <div className="mt-5">
                <p className="text-white">
                    Do not have an Account?
                    <Link to="/signup">
                        <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
                            Signup
                        </button>
                    </Link>
                </p>
            </div>
            <div className="w-full">
                <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off">
                    <div className="my-5 w-1/3 text-black">
                        <input
                            type="email"
                            placeholder="email..."
                            className="px-8 py-3 bg-white w-full"
                            name="email"
                            onChange={handleFormChange}
                            value={signinDetails.email}                           
                        />
                    </div>
                    <div className="my-5 w-1/3 text-black">
                        <input
                            type="password"
                            placeholder="password..."
                            className="px-8 py-3 bg-white w-full"
                            name="password"
                            onChange={handleFormChange}
                            value={signinDetails.password}
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <button className="btn btn-success rounded-md px-2 py-1 w-full hover:bg-green-400" type="submit"> 
                            Submit
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}