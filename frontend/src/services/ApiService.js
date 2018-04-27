class ApiService {

  getAnotherUser(responseCallback) {
    var url = 'http://192.168.99.100:31000/';
    console.log("getAnotherUser");
    return fetch(url)
    .then(res => { 
      console.log("Got response from getAnotherUser - " );
      return res.text()
    })
  }

  getUser() {
    return "Barry White";
  }

  getJob() {
    return "Clean the dishes";
  }

}

export default ApiService;