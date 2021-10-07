import {Http} from "@benjaminnoufel/http";

/**
 * Create a new HTTP request on GET method with a BLOB response
 */
const blobRequest = () => {
    new Http()
        .blob("https://img.freepik.com/photos-gratuite/fond-uni-rose-jaune_53876-98329.jpg?size=626&ext=jpg")
        .then((res: Blob) => console.log(res))
        .catch((err: Error) => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a BLOB response
 * Adding Headers and cors for call API
 */
const blobRequestWithOptions = () => {
    new Http()
        .header("Authorization", "bearer xxxxx")
        .method("get")
        .requestInit({cache: "no-cache"})
        .blob("https://img.freepik.com/photos-gratuite/fond-uni-rose-jaune_53876-98329.jpg?size=626&ext=jpg")
        .then((res: Blob) => console.log(res))
        .catch((err: Error) => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with a BLOB response
 * Adding Headers and cors for call API
 * Adding additional option for fetch with requestInit()
 */
const blobRequestWithRequestOptions = () => {
    new Http()
        .method("get")
        .requestInit({cache: "no-cache"})
        .blob("https://img.freepik.com/photos-gratuite/fond-uni-rose-jaune_53876-98329.jpg?size=626&ext=jpg")
        .then((res: Blob) => console.log(res))
        .catch((err: Error) => console.error(err.message));
};

/**
 * Create a new HTTP request on POST method with a body with async/await with a BLOB response
 */
const blobRequestAsyncAwait = async () => new Http()
    .blob("https://img.freepik.com/photos-gratuite/fond-uni-rose-jaune_53876-98329.jpg?size=626&ext=jpg");
