function testJS(){
    var fie = firebase.database().ref('ambassadors_data/');
    fie.on('value',function(data){
        var reff = data.val();
        console.log(reff);
        
    });
}

//Admin login

function admin_login(){

    let email = document.getElementById("emailId").value;
    let password = document.getElementById("passId").value; 

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        //var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
        // ...
    });

    //onAuthSuccess

    firebase.auth().onAuthStateChanged(function(user){
        if(user){            

            var auth_key = firebase.auth().currentUser.uid;
            var email_id = user.email;
            console.log(email_id);
            
            //check if the user is admin or not
            
            firebase.database().ref("admins/" + auth_key + "/").once('value').then(function(snapshot){
                
                if(snapshot.val() == email_id) {

                    sessionStorage.setItem("auth_key",auth_key);
                    sessionStorage.setItem("auth_mail",email_id);
                    window.alert("logged in");
                    window.location.replace("adminConsole.html");
                    
                }
                else{
                    
                    window.alert("You are not authorized to access the page !! Please contact admin");

                    firebase.auth().signOut().then(function() {
                        // Sign-out successful.
                    }).catch(function(error) {
                        // An error happened.
                    });

                }
                
            });
        }
        else{

        }
    });

}

//ambassador login

function ambassador_login(){

    let email = document.getElementById("amb_emailId").value;
    let password = document.getElementById("amb_passId").value; 


    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        //var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
        // ...
    });

    //onAuthSuccess

    firebase.auth().onAuthStateChanged(function(user){
        if(user){

            var auth_key = firebase.auth().currentUser.uid;
            var email_id = user.email;
            console.log(email_id);
            
            //check if the user is admin or not
            
            firebase.database().ref("admins/" + auth_key + "/").once('value').then(function(snapshot){
                
                if(snapshot.val() == email_id) {

                    sessionStorage.setItem("amb_auth_key",auth_key);
                    sessionStorage.setItem("amb_auth_mail",email_id);
                    window.alert("logged in");
                    
                }
                else{
                    
                    window.alert("You are not authorized to access the page !! Please contact admin");

                    firebase.auth().signOut().then(function() {
                        // Sign-out successful.
                    }).catch(function(error) {
                        // An error happened.
                    });

                }
                
            });

        }
        else{
            
        }
    });

}