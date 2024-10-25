function del(arg){
    fetch(""),
    {
        method:"DELETE"

    }
}

let uid=null


async function edit(arg){
    let data=await fetch('');
    let response=await data.json();
    uid=arg;



    let a=response.find((e)=>e.rollno==arg);
   
    document.querySelector('#rollno').value= a.rollno;
    document.querySelector('#name').value= a.nm;
    document.querySelector('#city').value= a.ct;
    document.querySelector('#fees').value= a.fs;
    document.querySelector('.form').style.display="block"
     document.querySelector('#output').style.filter="blur(2px)"
}
    









function finalupdate(){
    let rollno=document.getElementById("rno").value;
    let name=document.getElementById("nm").value;
    let city=document.getElementById("ct").value;
    let fees=document.getElementById("fs").value;
    let obj={
        "rollno":rollno,
        "name":name,
        "city":ct,
        "fees":fs,
    }

    fetch("http://localhost:3000/studentname"),
    {
        method: 'PUT',
        headers:{
            'content-Type': 'application/json'
        },
        body:JSON.stringify(obj)
            
            // "rollno":rollno,
            // "name": name,
            // "city": city,
            // "fees": fees
          }
        
    }
    const show=async()=>{
        let data=await fetch('');
        let response=await data.json();
         console.log(response);
         let selecttable= document.querySelector('#output');
         selecttable.innerHTML=response.map((items)=>`
         <tr>
         <td>${items.rollno}</td>
         <td>${items.nm}</td>
         <td>${items.ct}</td>
         <td>${items.fs}</td>
         <td onclick="del('${items.rollno}')"> delete</td>
<td onclick="edit('${items.rollno}')"> update</td>
         </tr>
        `
        )
    }