import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from 'firebase/app'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    deleteDoc
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const FirebaseContext = createContext(null)

const firebaseConfig = {
    apiKey: "AIzaSyAyq2_J12T9v0sqRpyyFcD---CjX1dNgt0",
    authDomain: "bookify-app-98ac4.firebaseapp.com",
    projectId: "bookify-app-98ac4",
    storageBucket: "bookify-app-98ac4.appspot.com",
    messagingSenderId: "1017949644469",
    appId: "1:1017949644469:web:9f9bfa57bf0b655fe9c0fc"
};

// custom hook
export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider()
const firestore = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

// provider
export const FirebaseProvider = (props) => {

    const [user, setUser] = useState()
    console.log(user);

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, user => {
            if (user) setUser(user)
            else setUser(null)
        })
    }, [])

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const singInUser = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password)
    }

    const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider)

    const isLoggedIn = user ? true : false

    const Logout = () => signOut(firebaseAuth)

    const createNewBook = async (bname, authorName, price, coverpic, pdf, bookdes) => {

        const imageRef = ref(storage, `uploads/images/${Date.now()}-${coverpic?.name}`)
        const uploadResult = await uploadBytes(imageRef, coverpic)

        const pdfRef = ref(storage, `uploads/pdf/${Date.now()}-${pdf?.name}`)
        const uploadResult2 = await uploadBytes(pdfRef, pdf)
        return await addDoc(collection(firestore, 'books'), {
            bname,
            authorName,
            price,
            imageURL: uploadResult.ref.fullPath,
            pdfURL: uploadResult2.ref.fullPath,
            bookdes,
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            photoUrl: user.photoURL,
        })
    }

    const listAllBooks = () => {
        return getDocs(collection(firestore, 'books'))
    }

    const getImageUrl = (path) => {
        return getDownloadURL(ref(storage, path))
    }

    const getDocById = async (id) => {
        const docRef = doc(firestore, 'books', id)
        const result = await getDoc(docRef)
        return result
    }

    const placeOrder = async (bookid, qty) => {
        const collectionRef = collection(firestore, 'books', bookid, 'orders')
        const result = await addDoc(collectionRef, {
            userID: user.uid,
            userEmail: user.email,
            displayName: user.displayName,
            BookQty: Number(qty)
        })
        return result
    }

    const fetchMyBooks = async (userid) => {
        if (!user) return null
        const collectionRef = collection(firestore, "books")
        const q = query(collectionRef, where("userID", "==", userid))
        const result = await getDocs(q)
        return result
    }

    // FirebaseProvider

    const deleteBookById = async (bookId) => {
        const bookRef = doc(firestore, 'books', bookId)
        await deleteDoc(bookRef)
    }


    return (
        <FirebaseContext.Provider
            value={{
                createUser,
                singInUser,
                signinWithGoogle,
                isLoggedIn,
                Logout,
                createNewBook,
                listAllBooks,
                getImageUrl,
                getDocById,
                placeOrder,
                fetchMyBooks,
                user,
                deleteBookById,
            }} >
            {props.children}
        </FirebaseContext.Provider>
    )
}