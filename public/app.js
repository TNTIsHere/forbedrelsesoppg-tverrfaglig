import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgwAcof7e-3bRN4IbX8PVIpz5WLTOgBcI",
  authDomain: "reinssdyrregisteret.firebaseapp.com",
  projectId: "reinssdyrregisteret",
  storageBucket: "reinssdyrregisteret.appspot.com",
  messagingSenderId: "1002307049449",
  appId: "1:1002307049449:web:2b3fe819dd68b3ec6c1d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
const db = getFirestore();

// Collection References
const colRefEier = collection(db, "Eier",)
const colRefFlokk = collection(db, "Flokk",)
const colRefReinsdyr = collection(db, "Individuelt-Reinsdyr",)

// Retrieve Collection Data

// Eiere
getDocs(colRefEier)
.then((snapshot) => {
    snapshot.docs.forEach((doc) => {
        let item = doc.data();
        
        let div = document.createElement("div");
        div.classList.add("result-item");

        let img = document.createElement("img");
        img.src = "https://via.placeholder.com/150";
        div.appendChild(img);
        
        let li = document.createElement("li");
        li.innerText = item.navn;
        div.appendChild(li);

        let h1 = document.createElement("h1");
        h1.innerText = "Eier";
        div.appendChild(h1);
        
        document.querySelector("#search-result").appendChild(div);
    });
})
.catch(err => {
    console.log(err.message)
});

// Flokk
getDocs(colRefFlokk)
.then((snapshot) => {
    snapshot.docs.forEach((doc) => {
        let item = doc.data();
        
        let div = document.createElement("div");
        div.classList.add("result-item");

        let img = document.createElement("img");
        img.src = "https://via.placeholder.com/150";
        div.appendChild(img);
        
        let li = document.createElement("li");
        li.innerText = item.flokknavn;
        div.appendChild(li);

        let h1 = document.createElement("h1");
        h1.innerText = "Flokk";
        div.appendChild(h1);
        
        document.querySelector("#search-result").appendChild(div);
    });
})
.catch(err => {
    console.log(err.message)
});


// Reinsdyr
getDocs(colRefReinsdyr)
.then((snapshot) => {
    snapshot.docs.forEach((doc) => {
        let item = doc.data();
        
        let div = document.createElement("div");
        div.classList.add("result-item");

        let img = document.createElement("img");
        img.src = "https://via.placeholder.com/150";
        div.appendChild(img);
        
        let li = document.createElement("li");
        li.innerText = item.navn;
        div.appendChild(li);

        let h1 = document.createElement("h1");
        h1.innerText = "Reindyr";
        div.appendChild(h1);
        
        document.querySelector("#search-result").appendChild(div);
    });
})
.catch(err => {
    console.log(err.message)
});
// Website Functionality
