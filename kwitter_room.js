
 var firebaseConfig = {
      apiKey: "AIzaSyDni_uc5AxGS-vRoDqwT0fgDS4dHD1Gve8",
      authDomain: "kwitter-4399d.firebaseapp.com",
      projectId: "kwitter-4399d",
      storageBucket: "kwitter-4399d.appspot.com",
      messagingSenderId: "718842422634",
      appId: "1:718842422634:web:4339bab87e20ba43c3b113"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     
      //End code
      });});}
getData();
