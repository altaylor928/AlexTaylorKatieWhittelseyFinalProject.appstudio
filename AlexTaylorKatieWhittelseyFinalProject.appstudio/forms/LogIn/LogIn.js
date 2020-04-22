//DONE

let req = []

btnLogIn.onclick=function(){
  req = Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptNetPass.value)
if (req.status == 200) { //everthing worked
     lblResponse.hidden = false
     lblResponse.value = (`Your LDAP return code was ` + req.responseText) //1 good, 0 bad
     NSB.MsgBox(lblResponse.value)
} else {
     // had problem with AJAX request
     lblResponse.hidden = false
     lblResponse.value = ("There was an error")
     NSB.MsgBox(lblResponse.value)
     }
}


btnHome.onclick=function(){
  ChangeForm(Home)
}
