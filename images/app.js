
//Sending Message 
    function sendMessage() {

      var sendername = document.getElementById("User-Name").value;
      var senderemail = document.getElementById("User-Email-Id").value;
      var sendermessage = document.getElementById("User-Message").value;

      //Email validation
      var body = 'Name : ' + sendername + '\nEmail ID : ' + senderemail + '\nMessage : ' + sendermessage + ' \n\n\n\n\n\n';
      if(senderemail.indexOf("@") == -1 || senderemail.length < 6){
        text = "Please Enter valid Email";
        alert(text);
        return false;
      }

      var request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/791141532030861383/NCttBCloERL8MdvFU6Rbyqw_A_6MmA1L1cK5fIlmrIMgkw2Xim3uObO3yXGKd6OC3DY9");

      request.setRequestHeader('Content-type', 'application/json');

      var params = {
        username: "Lost.in.Tension",
        avatar_url: "",
        content: body
      }

      request.send(JSON.stringify(params));
      alert('Message Has Been Sent.!');

    }
