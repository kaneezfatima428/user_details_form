function previewData(){

    var name = document.getElementById("name").value;
    var father = document.getElementById("father").value;
    var email = document.getElementById("email").value;
    var nic = document.getElementById("nic").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;

    // Age Calculator
    var birthDate = new Date(dob);
    var today = new Date();
    var age = today.getFullYear() - birthDate.getFullYear();

    var month = today.getMonth() - birthDate.getMonth();

    if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }

    // Name + Father Name in one line
    var fullName = name + " " + father;

    document.getElementById("idName").innerHTML = fullName;
    document.getElementById("idEmail").innerHTML = email;
    document.getElementById("idNic").innerHTML = nic;
    document.getElementById("idPhone").innerHTML = phone;
    document.getElementById("idAge").innerHTML = age + " years";

    document.getElementById("idCard").style.display = "block";
}


function clearForm(){
    document.getElementById("name").value = "";
    document.getElementById("father").value = "";
    document.getElementById("email").value = "";
    document.getElementById("nic").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("dob").value = "";

    document.getElementById("idCard").style.display = "none";
}
function submitForm(){

    var name = document.getElementById("name").value;
    var father = document.getElementById("father").value;
    var email = document.getElementById("email").value;
    var nic = document.getElementById("nic").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;

    if(name == "" || father == "" || email == "" || 
       nic == "" || phone == "" || dob == ""){
        alert("Please fill all fields");
        return;
    }

    if(nic.length != 13){
        alert("NIC must be 13 digits");
        return;
    }

    if(phone.length != 11){
        alert("Phone number must be 11 digits");
        return;
    }

 
    var now = new Date();

    var date = now.toLocaleDateString();
    var time = now.toLocaleTimeString();

    var dateTime = "Form Submitted On: " + date + " at " + time;

    document.getElementById("submitTime").innerHTML = dateTime;

    alert("Form Submitted Successfully!");
}
