// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {
    collection, addDoc,
    doc, getDocs, query, getDoc,
} from "firebase/firestore";
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAt8u9PFN44IS7YgGOYzG0mz_w6elvrI6k",
    authDomain: "mobilicity-store.firebaseapp.com",
    projectId: "mobilicity-store",
    storageBucket: "mobilicity-store.appspot.com",
    messagingSenderId: "678022638791",
    appId: "1:678022638791:web:5ad752e1bc578bf32ca2e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fs = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

const getAllAds = async () => {
    // console.log("getAllAds")
    try {
        const q = query(collection(fs, "AllData"))
        // console.log(q)
        const querySnapshot = await getDocs(q)
        // console.log(querySnapshot)
        let array = []
        querySnapshot.forEach((doc) => {
            array.push(doc.data())
            console.log(array)
            console.log(q)
        })
        return { error: false, message: "success", data: array }
        // console.log("try",array)

    } catch (error) {
        console.log("catch")
        // return { error: true, message: error.message, data: [] }

    }
}
// console.log(getAllAds)
// getAllAds()
export default getAllAds