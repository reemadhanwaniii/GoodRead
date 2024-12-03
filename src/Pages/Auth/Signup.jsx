import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "src/Redux/Slices/AuthSlice";

export default function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signupDetails,setSignupDetails] = useState({
        username: '',
        email: '',
        password: ''
    });

    function handleFormChange(e) {
        const {name,value} = e.target;
        setSignupDetails({...signupDetails,[name]:value})
    }

    function resetForm() {
        setSignupDetails({
            username: '',
            email: '',
            password: ''      
        })
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        console.log(signupDetails);
        const response = await dispatch(signup(signupDetails));
        console.log(response);
        if(response?.payload?.data) {
            navigate('/signin');
        }
        resetForm();
    }

    return(
        <div className="h-[100vh] flex flex-col items-center justify-center">
            <div>
                <h1 className="text-white text-5xl">Create a new Account</h1>
            </div>
            <div className="mt-5">
                <p className="text-white">
                    Already have an Account?
                    <Link to="/signin">
                        <button className="btn btn-success rounded-md px-2 mx-5 hover:bg-green-400">
                            Signin
                        </button>
                    </Link>
                </p>
            </div>
            <div className="w-full">
                <form onSubmit={onFormSubmit} className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off">
                    <div className="my-5 w-1/3 text-black">
                        <input
                            type="text"
                            placeholder="username..."
                            className="px-8 py-3 bg-white w-full"
                            name="username"
                            onChange={handleFormChange}
                            value={signupDetails.username}
                        />
                    </div>
                    <div className="my-5 w-1/3 text-black">
                        <input
                            type="email"
                            placeholder="email..."
                            className="px-8 py-3 bg-white w-full"
                            name="email"
                            onChange={handleFormChange}
                            value={signupDetails.email}
                        />
                    </div>
                    <div className="my-5 w-1/3 text-black">
                        <input
                            type="password"
                            placeholder="password..."
                            className="px-8 py-3 bg-white w-full"
                            name="password"
                            onChange={handleFormChange}
                            value={signupDetails.password}
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