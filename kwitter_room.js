
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
      apiKey: "AIzaSyBMRUcAIaXvt6gy6TtxJTUxxD5nMaRjhT4",
      authDomain: "kwitter-740fe.firebaseapp.com",
      databaseURL: "https://kwitter-740fe-default-rtdb.firebaseio.com",
      projectId: "kwitter-740fe",
      storageBucket: "kwitter-740fe.appspot.com",
      messagingSenderId: "97254093960",
      appId: "1:97254093960:web:fafea366dbe354c1441b3d",
      measurementId: "G-NF86QNFF9Y"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "kwitter.html";
    }
    