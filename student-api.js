function addContent(){
    
    
async function getUsers(){
    const response = await fetch('http://localhost:8080/student/');//('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    return data;    

}

getUsers().then(data=>{   
   
   index = data.length;
   //const student = [];

   for (let i=0; i<index;i++){

    //Create an intermidary empty array and assigne the JASON object's matching properties to 
    // to the arry by the same name
    const person=[];
    person.id = data[i].id;
    person.firstName = data[i].firstName;
    person.lastName = data[i].lastName;
    person.email = data[i].email;
    person.age = data[i].age;
    person.dob = data[i].dob;  
    
   //Declare variables that match the arrays contens
   const {id, firstName, lastName, email, age, dob} = person;

    const strID = 'ID: '+id;

    const str = 'First Name: '+firstName+ ' ||  '+'Last Name: '+lastName+' ||  '+'EMAIL: '+email+' ||  '+'AGE: '+age+' ||  ' +'dob: '+dob;
        
        const divChild =document.createElement('div');
        divChild.setAttribute("id","divID"+[i]);
        divChild.classList.add('divID');
        divChild.textContent=strID; 

        document.getElementById("studentDiv").appendChild(divChild);


        const pChild = document.createElement('p');
        pChild.classList.add('student');
        pChild.textContent = str;   
        document.getElementById("divID"+[i]).appendChild(pChild);
    };  
    
})



};

//addContent();