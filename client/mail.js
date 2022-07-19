import axios from 'axios';


async function mail(route) {


  var details=` Name : ${route.name} \n Phone Number : ${route.number} \n Email : ${route.email} \n Message : ${route.message} \n`;
  console.log(details)
  await axios.post('https://reactnativenodemail.herokuapp.com/send_mail',{text:details})

}

export default  mail;
