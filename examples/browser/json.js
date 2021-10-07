/**
 * Create a new HTTP request on GET method with a JSON response
 */
const jsonRequest = () => {
    const http = new window.Http.Http()
        http
        .method("get")
        .json("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => console.log(res))
        .catch(err => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a JSON response
 */
const jsonRequestPost = () => {
    const http = new window.Http.Http()
        http
        .method("post")
        .body({name: "Doe"})
        .json("https://jsonplaceholder.typicode.com/todos")
        .then(res => console.log(res))
        .catch(err => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a JSON response
 * Adding Headers and cors for call API
 */
const jsonRequestWithOptions = () => {
    const http = new window.Http.Http()
        http
        .method("post")
        .header("Content-Type", "application/json")
        .header("Accept", "application/json")
        .mode("cors")
        .method("post")
        .include("credentials")
        .body({name: "Doe"})
        .json("https://jsonplaceholder.typicode.com/todos")
        .then(res => console.log(res))
        .catch(err => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a JSON response
 * Adding Headers and cors for call API
 * Adding additional option for fetch with requestInit()
 */
const jsonRequestWithRequestOptions = () => {
    const http = new window.Http.Http()
        http
        .method("post")
        .header("Content-Type", "application/json")
        .header("Accept", "application/json")
        .mode("cors")
        .method("post")
        .include("credentials")
        .body({name: "Doe"})
        .requestInit({cache: "no-cache"})
        .json("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => console.log(res))
        .catch(err => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with async/await with a JSON response
 */
const jsonRequestAsyncAwait = async () => {
    const http = new window.Http.Http()
    return http
        .method("post")
        .body({name: "Doe"})
        .json("https://jsonplaceholder.typicode.com/todos/1");
}
