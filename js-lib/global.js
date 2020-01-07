//delete this from actual hosting

function logout(){
    firebase.auth().signOut().then(function() {
        console.log("logged out");

        sessionStorage.clear();

        window.location.replace("/");
      
    }).catch(function(error) {
        
        console.log(error);
        
    });
}

function redirect_admin(){

    firebase.auth().onAuthStateChanged(function(user){

        if(user){
            if(firebase.auth().currentUser.uid == sessionStorage.getItem("auth_key")){

            }
            else{
                window.location.replace("404.html");
            }
        }
        else{
            window.location.replace("404.html");
        }
      });  
    
    
}