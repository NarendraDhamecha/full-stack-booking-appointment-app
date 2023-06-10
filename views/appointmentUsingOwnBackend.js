var form = document.getElementById('form');
var username = document.getElementById('name');
var email = document.getElementById('mail');
var phone = document.getElementById('phone');
var time = document.getElementById('time');
// let edit = null;

form.addEventListener('submit',onSubmit)

function onSubmit(e)
{
   e.preventDefault();

   if(username.value==='' || email.value==='' || phone.value==='')
   {
     console.log(alert('please enter all feilds'));
   }
   else
   {
    let obj = {
        name: username.value,
        email: email.value,
        mobNum: phone.value,
        //tym: time.value
    };

    // if(edit!==null){
    //   axios.put(`https://crudcrud.com/api/558cd8d493fd4e4daf21d47146de21d5/appointmentdata/${edit}`,obj)
    //   .then((res) => showDetailsOnScreen(res.data))
    //   .catch(err => console.log(err));
    //   edit=null;
    // }
   // else{ 
      axios.post("http://localhost:3000/booking",obj)
     .then((res) => showDetailsOnScreen(res.data))
     .catch(err => console.log(err));
   // }
   }
  }

  window.addEventListener('DOMContentLoaded', () =>{
   
    axios.get('http://localhost:3000/booking')
    .then((res) => {
      for(let i=0; i<res.data.length; i++){
        showDetailsOnScreen(res.data[i]);
      }
    })
    .catch((err) => {
      document.body.innerHTML = err;
      console.log(err);
    })
  })

  function showDetailsOnScreen(user)
  {
    document.getElementById('mail').value = '' ;
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '' ;

    let parentNode = document.getElementById('list');
    let childNode = `<li class="list-group-item" id=${user.id}> ${user.userName} - ${user.userEmail} 
                         <button class="btn btn-outline-danger" onclick=deleteUser('${user.id}')> Delete </button>
                         <button class="btn btn-outline-dark" onclick=editUser('${user.id}','${user.userName}','${user.userEmail}','${user.userMobileNo}')> edit </button>
                     </li>`
    parentNode.innerHTML = parentNode.innerHTML + childNode;
  }

  function editUser(userId, name, email, mobileNo)
  {
     document.getElementById('mail').value = email;
     document.getElementById('name').value = name;
     document.getElementById('phone').value = mobileNo;
     removeUserFromScreen(userId);
     //edit = userId;
     deleteUser(userId);
  }

  function deleteUser(userId)
  {
     axios.delete(`http://localhost:3000/booking/${userId}`)
     .then(() => {
          removeUserFromScreen(userId)
     })
     .catch((err) => console.log(err));
  }

  function removeUserFromScreen(userId)
  {
      let parentNode = document.getElementById('list');
      let childNodeToBeDlt = document.getElementById(userId);
      if(childNodeToBeDlt)
      {
        parentNode.removeChild(childNodeToBeDlt);
      }
  }
   