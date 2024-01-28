const firebaseconfig1 = { 
    apiKey: "AIzaSyCpyGybkDzb8vg6CLrq94Obr_6ocNW3I48",
    authDomain: "postandearn-913e7.firebaseapp.com",
    databaseURL: "https://postandearn-913e7-default-rtdb.firebaseio.com",
    projectId: "postandearn-913e7",
    storageBucket: "postandearn-913e7.appspot.com",
    messagingSenderId: "516981459091",
    appId: "1:516981459091:web:252fa231f2b08c8a752566",
    measurementId: "G-4J5FET99CL"
  }
  const firebaseApp1 = firebase.initializeApp(firebaseconfig1, "app1");
  const Primarydatabase = firebaseApp1.database();
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig2 = {
  apiKey: "AIzaSyCCjfGl5GwWazdScSEV8CYpXTNM4aolECA",
  authDomain: "dr-strange-aba2a.firebaseapp.com",
  databaseURL: "https://dr-strange-aba2a-default-rtdb.firebaseio.com",
  projectId: "dr-strange-aba2a",
  storageBucket: "dr-strange-aba2a.appspot.com",
  messagingSenderId: "1077049060576",
  appId: "1:1077049060576:web:7c2381e8d09974db94f485",
  measurementId: "G-1HDB8862XC"
};
  const firebaseApp2 = firebase.initializeApp(firebaseConfig2, "app2");
  const Secondarydatabase = firebaseApp2.database();
  