// lifted this out of the component as it's at the moment it's a constant value
const url = 'http://192.168.99.100:31000/';

class ApiService {
  // rewrote using async/await. a function prefixed with `async` returns a promise,
  // and allows usage of `await` to write synchronous LOOKING when working with promises.
  async getUserAndJob() {
    const res = await fetch(url);

    return res.text();
  }

  // using regular promise syntax, left for comparison. this is the same as above because
  // `fetch` returns a promise.
  // getUserAndJob() {
  //   return fetch(url).then(res => res.text());
  // }

  // another example, to illustrate - all 3 of these are interchangeable
  // getUserAndJob() {
  //   return new Promise((resolve) => {
  //     fetch(url).then(res => resolve(res.text()))
  //   });
  // }

  getUser() {
    return "Barry White";
  }

  getJob() {
    return "Clean the dishes";
  }

}

export default ApiService;
