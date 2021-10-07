/**
 * Create a new HTTP request on GET method with a BLOB response
 */
const blobRequest = () => {
    const http = new window.Http.Http()
        http
        .blob("https://img.freepik.com/photos-gratuite/fond-uni-rose-jaune_53876-98329.jpg?size=626&ext=jpg")
        .then(res => console.log(res))
        .catch(err => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a BLOB response
 * Adding Headers and cors for call API
 */
const blobRequestWithOptions = () => {
    const http = new window.Http.Http()
        http
        .header("Authorization", "bearer xxxxx")
        .method("get")
        .requestInit({cache: "no-cache"})
        .blob("https://img.freepik.com/photos-gratuite/fond-uni-rose-jaune_53876-98329.jpg?size=626&ext=jpg")
        .then(res => console.log(res))
        .catch(err => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a BLOB response
 * Adding Headers and cors for call API
 * Adding additional option for fetch with requestInit()
 */
const blobRequestWithRequestOptions = () => {
    const http = new window.Http.Http()
        http
        .method("get")
        .requestInit({cache: "no-cache"})
        .blob("https://img.freepik.com/photos-gratuite/fond-uni-rose-jaune_53876-98329.jpg?size=626&ext=jpg")
        .then(res => console.log(res))
        .catch(err => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with async/await with a BLOB response
 */
const blobRequestAsyncAwait = async () => {
    const http = new window.Http.Http()
    return http
        .blob("https://img.freepik.com/photos-gratuite/fond-uni-rose-jaune_53876-98329.jpg?size=626&ext=jpg");
}
