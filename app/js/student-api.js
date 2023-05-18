const studentAPIURL = 'http://studentapi-team-one.apps.vapo-aws-sbx.va.gov/student';

class Student{
    constructor(id,fname,lname,email,age,dob)
    {        
        this.id = id;
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;        
        this.Age = age;
        this.dob = dob;
    }
}

const student = new Student();

const btnViewEl = document.querySelector('#view');
const formEl = document.getElementById("form");


function clickViewStudents(){  

    const viewStudents = async () =>{
        console.log("process data")
        try{
            const response = await fetch(studentAPIURL);
            let data = await response.json();

            if (!response.ok){
                console.log(data.description);
                return;
            }
            return data;
            
        }
        catch(error){
            console.log(error);
        }      

    };

    viewStudents().then(data=>{

        let index = data.length;  
        
        //For each student fetched create a new object
        //of type student
        for (let i=0; i<index;i++){

            const student = new Student(
                data[i].id,
                data[i].firstName,
                data[i].lastName,
                data[i].email,
                data[i].age,
                data[i].dob
                )

            // Create a table row within the table
            //for each student
            let trEl = document.createElement('tr');
            trEl.setAttribute("id","tr"+[i]);
            document.getElementById("tbStudent").appendChild(trEl);

            //Create table data element for each property
            //in the new object of type student
            let sindex = Object.getOwnPropertyNames(student).length;
            for(let j =0; j<sindex; j++)
            {
                let sKey = Object.keys(student)[j];
                let stuVal = student[sKey];
                let tdEl = document.createElement('td');
                tdEl.textContent = stuVal;
                document.getElementById("tr"+[i]).appendChild(tdEl);

            }

        }

        //Create Table Headings based on each property in the class
        for (var idx in student)
        {
            let thEl = document.createElement('th');
            thEl.textContent=idx;
            document.getElementById("theadTr").appendChild(thEl);
        }
    })
}

function submitAddStudent(event){
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = Object.fromEntries(myFormData.entries());    
    
   
    const addStudents = async () =>{        
        try{
            const response = await fetch(studentAPIURL,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(formDataObj)
            });
             
             let data =  response.status;     

            if (!response.ok){
                console.log(data.description);
                return;
            }
            return data;            
        }
        catch(error){
            console.log(error);
        } 
    };

    addStudents().then(data=>{console.log(data); }); 
    document.getElementById("form").reset();

    if (data ='200'){
        let pEL = document.createElement('p')
        pEL.textContent="Sudent Registered"
        document.getElementById("statMsg").appendChild(pEL);
    }
    
}


    let path = window.location.pathname;
    let page = path.split("/").pop();
    if(page=="view-students.html")
    {
        btnViewEl.addEventListener('click', clickViewStudents);
    }
    if (page== "add-students.html")
    {
        formEl.addEventListener('submit', submitAddStudent);        
        
    }








//btnEl.addEventListener('click', viewStudents);

/*

var formEl = document.getElementById('form');
//formEl.addEventListener('submit', event =>{
   // event.preventDefault(); //Prevents old default form way to submitt

//})
formEl.addEventListener('submit', function(e){
    e.preventDefault()

    let fname = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    let email = document.getElementById('studentEmail').value;
    let dob = document.getElementById('dob').value;

    fetch(studentAPIURL,{
        method:'POST',
        body: JSON.stringify({firstName:fname, lastName:lname,email:email,dob:dob}),
        headers:{'Content-type':'application/json; charset=UTF-8',}
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        
    }).catch(error => console.error('Error:', error ));

});


*/
