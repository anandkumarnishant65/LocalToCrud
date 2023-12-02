function store(e){
    e.preventDefault();
    let name= document.getElementById('firstname').value;
    let emailid= document.getElementById('email').value;
    let phn= document.getElementById('phno').value;
  
    const obj = {
      Name: name,
      Email_id: emailid,
      Phone_number: phn,
    }
    axios.post("https://crudcrud.com/api/b22f6ecc7bc4419aa2d5e8a52b7945b0/appointmentData",obj)
     .then((response)=>{
      showdetails(response.data);
     })
     .catch((err)=>{
      console.log(err);
     })
  
   // window.localStorage.setItem(name, JSON.stringify(obj));
  }
  window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/b22f6ecc7bc4419aa2d5e8a52b7945b0/appointmentData")
    .then((res)=>{
      for(var i=0;i<res.data.length;i++){
        showdetails(res.data[i]);
      }
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  });
  
  
  function showdetails(obj){
  
    const parentElement = document.getElementById('display')
    const childElement = document.createElement("li");
    childElement.innerHTML = `${obj.Name},${obj.Email_id}, ${obj.Phone_number}`;
    parentElement.appendChild(childElement);
  
    const btn = document.createElement("input");
    btn.type = "button";
    btn.value = "delete";
    childElement.appendChild(btn);
  
    btn.onclick=function(){
        axios.delete(`https://crudcrud.com/api/b22f6ecc7bc4419aa2d5e8a52b7945b0/appointmentData/${obj._id}`)
      parentElement.removeChild(childElement);
    }

    const edt = document.createElement("input");
    edt.type = "button";
    edt.value = "edit";
    childElement.appendChild(edt);
    edt.onclick=function(){
        axios.delete(`https://crudcrud.com/api/b22f6ecc7bc4419aa2d5e8a52b7945b0/appointmentData/${obj._id}`)
      parentElement.removeChild(childElement);
      document.getElementById('firstname').value=obj.Name;
    document.getElementById('email').value=obj.Email_id;
    document.getElementById('phno').value=obj.Phone_number;
    }
  }
  
  
    document.getElementById('detailsform').onsubmit=store;
    
    
  
  