import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAXOtiCh0ncl47TiIXQRym3PL8mqJxVdZM",
  authDomain: "crown-clothing-db-c207b.firebaseapp.com",
  projectId: "crown-clothing-db-c207b",
  storageBucket: "crown-clothing-db-c207b.appspot.com",
  messagingSenderId: "142960641935",
  appId: "1:142960641935:web:1ab545518df7cf69e72dfa",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);

    if(!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
}