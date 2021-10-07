/**
 * Create a new HTTP request on GET method with a TEXT response
 */
const textRequest = () => {
    const http = new window.Http.Http()
        http
        .method("get")
        .text("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => console.log(res))
        .catch(err => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a TEXT response
 */
const textRequestPost = () => {
    const http = new window.Http.Http()
        http
        .method("post")
        .formData()
        .appendFormData("name", "Doe")
        .text("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => console.log(res))
        .catch(err => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a TEXT response
 * Adding Headers and cors for call API
 */
const textRequestWithOptions = () => {
    const http = new window.Http.Http()
        http
        .method("post")
        .header("Authorization", "bearer xxxxx")
        .mode("cors")
        .method("post")
        .include("credentials")
        .formData()
        .appendFormData("name", "Doe")
        .text("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => console.log(res))
        .catch(err => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a TEXT response
 * Adding Headers and cors for call API
 * Adding additional option for fetch with requestInit()
 */
const textRequestWithRequestOptions = () => {
    const http = new window.Http.Http()
        http
        .method("post")
        .header("Authorization", "bearer xxxxx")
        .mode("cors")
        .method("post")
        .include("credentials")
        .formData()
        .appendFormData("name", "Doe")
        .requestInit({cache: "no-cache"})
        .text("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => console.log(res))
        .catch(err => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with async/await with a TEXT response
 */
const textRequestAsyncAwait = async () => {
    const http = new window.Http.Http()
    return http
        .method("post")
        .formData()
        .appendFormData("name", "Doe")
        .text("https://jsonplaceholder.typicode.com/todos/1");
}