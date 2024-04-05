const firebaseConfig = {
    apiKey: "AIzaSyAbcgny2-vPA3upcpAL5hKDEvQCGQF9NXY",
    authDomain: "event-management-32982.firebaseapp.com",
    databaseURL: "https://event-management-32982-default-rtdb.firebaseio.com",
    projectId: "event-management-32982",
    storageBucket: "event-management-32982.appspot.com",
    messagingSenderId: "34639218374",
    appId: "1:34639218374:web:618edc90a21cdceafcb9c7",
    measurementId: "G-MH3V69JDHE"
  };

  firebase.initializeApp(firebaseConfig);

  var EventManagementDB = firebase.database().ref('Event-Management');

  document.getElementById('signupForm').addEventListener('submit',submitForm);

  function submitForm(e){
    e.preventDefault();
    var name=getElementVal('name');
    var email=getElementVal('email');
    var password=getElementVal('password');
    var confpass=getElementVal('confpass');
    var ooa=getElementVal('ooa');

    console.log(name,email,password,confpass,ooa);
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }