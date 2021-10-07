import {Http} from "@benjaminnoufel/http";

/**
 * Create a new HTTP request on GET method with a JSON response
 */
const jsonRequest = () => {
    new Http()
        .method("get")
        .json("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => console.log(res))
        .catch(err => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a JSON response
 */
const jsonRequestPost = () => {
    new Http()
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
    new Http()
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
    new Http()
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
const jsonRequestAsyncAwait = async () => new Http()
    .method("post")
    .body({name: "Doe"})
    .json("https://jsonplaceholder.typicode.com/todos/1");
