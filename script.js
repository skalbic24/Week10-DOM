/* Using HTML, Bootstrap, and JavaScript create a single 
page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking 
on submit.*/

/* What I need?
--My button..on click, add information to the table

How do I get information? - form the <input> fields.. and their .value()
Need:Favorite Place To Travel, Thing To Do, Must Bring Along - store thatin a variable
Find a way to get the #value
Way to get values from the form... when we submit.. then append() the info
to the table

Need to get values with: getElementById()
    -Need IDs on our values
*/

const formButton = document.getElementById('formSubmit')

let number = 0

formButton.addEventListener('click', (event) =>{
    event.preventDefault()    //prevents page from refreshing when clicking the button,
   if(document.getElementById('favoritePlaceToTravel').value != ""){
    //variables to hold the values of the form, 
   
    let favoritePlaceToTravel = document.getElementById('favoritePlaceToTravel').value
    let thingToDo = document.getElementById('thingToDo').value
    let mustBringAlong = document.getElementById('mustBringAlong').value
    
   //to create a node.. a tr node.. to append to my form
    let newTableRow = document.createElement('tr')

    let numberNode = document.createElement('td')
        numberNode.innerHTML = number
        newTableRow.append(numberNode)

    let favoritePlaceToTravelNode = document.createElement('td')
    favoritePlaceToTravelNode.innerHTML = favoritePlaceToTravel
    newTableRow.append(favoritePlaceToTravelNode)

    let thingToDoNode = document.createElement('td')
    thingToDoNode.innerHTML = thingToDo
    newTableRow.append(thingToDoNode)

    let mustBringAlongNode = document.createElement('td')
    mustBringAlongNode.innerHTML = mustBringAlong
    newTableRow.append(mustBringAlongNode)

    document.getElementById('tBody').appendChild(newTableRow)

   document.getElementById('favoritePlaceToTravel').value = ''
   document.getElementById('thingToDo').value = ''
   document.getElementById('mustBringAlong').value = ''

   number++
   } else {
    let fptt = document.getElementById('fpttalert')
    fptt.classList = ("d-show", "alert")
   }

})



