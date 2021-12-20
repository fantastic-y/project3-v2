import React from 'react';
import FacebookLogin from 'react-facebook-login';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

function FacebookLog() {
  // const [login, setLogin] = useState(false); //set up login
  // const [data, setData] = useState({}); //set up fb data
  // const [picture, setPicture] = useState(''); //set up fb profile image

  // const responseFacebook = (response) => {
  //   console.log(response);
  //   setData(response);
  //   setPicture(response.picture.data.url);
  //   if (response.accessToken) {
  //     setLogin(true);
  //   } else {
  //     setLogin(false);
  //   }
  // }

  return(
    <div class="container" id="signin">
      <FacebookLogin
        appId="226899856207093"
        autoLoad={false}
        fields="name,email,picture"
        scope="public_profile,user_friends"
        // callback={responseFacebook}
        icon="fa-facebook"
      />
    </div>
  )}



export default FacebookLog;