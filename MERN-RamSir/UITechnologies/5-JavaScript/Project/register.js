function validate(){
    let username=document.myForm.uname.value;
    let password=document.myForm.pass.value;
    let email=document.myForm.em.value;
    let address=document.myForm.add.value;
    let gender=document.myForm.gender.value;

    if(username==null || username==""){
        alert("User name can't be empty");
        return false;
    }

    if(!email.includes("@") || !email.includes (".")){
        alert("email should include @ and . ")
       return false;
    }

    // if(email==null || email=="" || !email.endsWith("@gmail.com")){
    //     alert("email is ")
    //     return false;
    // }

    if(password.length<6){
        alert("Password must be atleast 6 characters")
        return false;
    }

    if(address==null || address==""){
        alert("address can't be empty");
        return false;  
    }

    if(gender==""){
        alert("please select your gender");
        return false;
    }
    
}


