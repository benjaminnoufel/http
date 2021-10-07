import {Http} from "@benjaminnoufel/http";

/**
 * Create a new HTTP request on GET method with a TEXT response
 */
const textRequest = () => {
    new Http()
        .method("get")
        .text("https://jsonplaceholder.typicode.com/todos/1")
        .then((res: string) => console.log(res))
        .catch((err: Error) => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a TEXT response
 */
const textRequestPost = () => {
    new Http()
        .method("post")
        .formData()
        .appendFormData("name", "Doe")
        .text("https://jsonplaceholder.typicode.com/todos/1")
        .then((res: string) => console.log(res))
        .catch((err: Error) => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a TEXT response
 * Adding Headers and cors for call API
 */
const textRequestWithOptions = () => {
    new Http()
        .method("post")
        .header("Authorization", "bearer xxxxx")
        .mode("cors")
        .method("post")
        .include("credentials")
        .formData()
        .appendFormData("name", "Doe")
        .text("https://jsonplaceholder.typicode.com/todos/1")
        .then((res: string) => console.log(res))
        .catch((err: Error) => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a TEXT response
 * Adding Headers and cors for call API
 * Adding additional option for fetch with requestInit()
 */
const textRequestWithRequestOptions = () => {
    new Http()
        .method("post")
        .header("Authorization", "bearer xxxxx")
        .mode("cors")
        .method("post")
        .include("credentials")
        .formData()
        .appendFormData("name", "Doe")
        .requestInit({cache: "no-cache"})
        .text("https://jsonplaceholder.typicode.com/todos/1")
        .then((res: string) => console.log(res))
        .catch((err: Error) => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with async/await with a TEXT response
 */
const textRequestAsyncAwait = async () => new Http()
    .method("post")
    .formData()
    .appendFormData("name", "Doe")
    .text("https://jsonplaceholder.typicode.com/todos/1");
