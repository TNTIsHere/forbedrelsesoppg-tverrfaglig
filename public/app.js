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
        img.classList.add("result-img");
        div.appendChild(img);
        
        let li = document.createElement("li");
        li.classList.add("result-li");
        li.innerText = item.navn;
        div.appendChild(li);
        
        let h1Wrap = document.createElement("div");
        h1Wrap.classList.add("heading-wrap");
        li.appendChild(h1Wrap);

        let h1 = document.createElement("h1");
        h1.classList.add("result-heading");
        h1.innerText = "Eier";
        h1Wrap.appendChild(h1);
        
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
        img.classList.add("result-img");
        div.appendChild(img);
        
        let li = document.createElement("li");
        li.classList.add("result-li");
        li.innerText = item.flokknavn;
        div.appendChild(li);
        
        let h1Wrap = document.createElement("div");
        h1Wrap.classList.add("heading-wrap");
        li.appendChild(h1Wrap);

        let h1 = document.createElement("h1");
        h1.classList.add("result-heading");
        h1.innerText = "Flokk";
        h1Wrap.appendChild(h1);
        
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
        img.classList.add("result-img");
        div.appendChild(img);
        
        let li = document.createElement("li");
        li.classList.add("result-li");
        li.innerText = item.navn;
        div.appendChild(li);
        
        let h1Wrap = document.createElement("div");
        h1Wrap.classList.add("heading-wrap");
        li.appendChild(h1Wrap);

        let h1 = document.createElement("h1");
        h1.classList.add("result-heading");
        h1.innerText = "Reinsdyr";
        h1Wrap.appendChild(h1);
        
        document.querySelector("#search-result").appendChild(div);
    });
})
.catch(err => {
    console.log(err.message)
});


// Website Functionality

const searchBar = document.querySelector("#search-bar");
const searchResult = document.querySelector("#search-result");

searchBar.addEventListener("input", () => {
    const searchText = searchBar.value.toLowerCase();
    const items = searchResult.getElementsByClassName("result-item");
    Array.from(items).forEach((item) => {
        if (item.textContent.toLowerCase().indexOf(searchText) !== -1) {
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
});
