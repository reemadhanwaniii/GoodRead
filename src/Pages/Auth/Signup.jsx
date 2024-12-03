import { Link } from "react-router-dom"

export default function Signup() {
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
                <form className="flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off">
                    <div className="my-5 w-1/3">
                        <input
                            type="text"
                            placeholder="username..."
                            className="px-8 py-3 bg-white w-full"
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <input
                            type="email"
                            placeholder="email..."
                            className="px-8 py-3 bg-white w-full"
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <input
                            type="password"
                            placeholder="password..."
                            className="px-8 py-3 bg-white w-full"
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