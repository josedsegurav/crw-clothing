import { createUserDocFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils"

function SignIn() {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }
 
    return (
        <div>
            <h1>Sign In page</h1>
            <button onClick={logGoogleUser} >
                Sign in with Google
            </button>
        </div>
    )
}

export default SignIn;