class ApiService {

  getUserAndJob(responseCallback) {
    var url = 'http://192.168.99.100:31000/';
    console.log("getUserAndJob");
    return fetch(url)
    .then(res => {
      console.log("Got response from getUserAndJob - " );
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