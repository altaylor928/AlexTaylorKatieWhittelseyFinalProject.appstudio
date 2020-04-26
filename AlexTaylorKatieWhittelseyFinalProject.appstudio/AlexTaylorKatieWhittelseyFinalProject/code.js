//DONE

let req1 = []

btnLogin.onclick=function(){
  req1 = Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptNetPass.value)
if (req1.status == 200) {
     message = (`You successfully logged in, please click the home button`)
     NSB.MsgBox(message)
} else {
     error = (`There was an error, please try again.`)
     NSB.MsgBox(error)
     }
}


btnHome.onclick=function(){
  ChangeForm(Home)
}
//user enters age, height, weight, gender
//user then submits, and then a label will show the calorie intake to maintain weight

let gender = ["Male","Female"]

let age = inptAge.value
     let newAge = parseInt(age)
let height = inptHeight.value
     let newHeight = parseFloat(height)
let weight = inptWeight.value
     let newWeight = parseFloat(weight)
  
let femaleResult = ((10 * newWeight) * 30.48) + ((6.25 * newHeight) / 2.2) - (5 * newAge) - 161
     let femaleCals = parseFloat(femaleResult)
let maleResult = ((10 * newWeight) * 30.48) + ((6.25 * newHeight) / 2.2) - (5 * newAge) + 5
     let maleCals = parseFloat(maleResult)



Home.onshow=function(){
  selGender.clear()
  for (i = 0; i <= gender.length - 1; i++) {
       selGender.addItem(gender[i])
       }
}


btnSubmit.onclick=function(){
  if (selGender == "Female") {
       message1 = (`Based on the information above, you need to consume: ${femaleCals} calories`)
       NSB.MsgBox(message1)
  } else {
       message2 = (`Based on the information above, you need to consume: ${maleCals} calories`)
       NSB.MsgBox(message2)
       }
}


pgPages.onclick=function(s){
if (typeof(s) == "object") {
    return
  } else {
        switch(s) {
        case "Home":
            ChangeForm(Home)
            break
        case "Log":
            ChangeForm(Log)
            break
        case "Graphs":
            ChangeForm(Nutrition)
            break
          }
     }
}
//user adds meal
//user adds calories
//user submits

//2 outputs: one for the meals \n and one for calories \n

//API HERE!
//USE FOR LOOP, ARRAY, ARRAY METHID, AND STRING
//have a graph of total calories
     // then maybe split it by food group
     
     //USE FOR LOOP, ARRAY, ARRAY METHID, AND STRING