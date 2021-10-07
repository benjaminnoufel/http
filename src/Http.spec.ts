// @ts-ignore
import fetch from "isomorphic-fetch";
import {Http, ValidatorError} from "./Http";

window.fetch = fetch;

describe("http", (): void => {
    describe("method", (): void => {
        it("should create the Http instance with a POST method", (): void => {
            expect.assertions(1);

            const method: string = "POST";
            const result: Http = new Http().method(method);

            const expectation: Record<string, any> = {
                _credentials: "same-origin",
                _headers: {},
                _body: undefined,
                _method: "POST",
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create the Http instance with a PUT method", (): void => {
            expect.assertions(1);

            const method: string = "PUT";
            const result: Http = new Http().method(method);

            const expectation: Record<string, any> = {
                _credentials: "same-origin",
                _headers: {},
                _body: undefined,
                _method: "PUT",
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create the Http instance with a PATCH method", (): void => {
            expect.assertions(1);

            const method: string = "PATCH";
            const result: Http = new Http().method(method);

            const expectation: Record<string, any> = {
                _credentials: "same-origin",
                _headers: {},
                _body: undefined,
                _method: method,
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create the Http instance with a DELETE method", (): void => {
            expect.assertions(1);

            const method: string = "DELETE";
            const result: Http = new Http().method(method);

            const expectation: Record<string, any> = {
                _credentials: "same-origin",
                _headers: {},
                _body: undefined,
                _method: method,
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });
    });

    describe("header", (): void => {
        it("should throw an error if property is not a string", (): void => {
            expect.assertions(1);

            // @ts-ignore
            expect(() => new Http().header(42, "application/json")).toThrow(new ValidatorError(422, "property or value must be a string"));
        });

        it("should throw an error if value is not a string", (): void => {
            expect.assertions(1);

            // @ts-ignore
            expect(() => new Http().header("Content-Type", 42)).toThrow(new ValidatorError(422, "property or value must be a string"));
        });

        it("should throw an error if property and value is not a string", (): void => {
            expect.assertions(1);

            // @ts-ignore
            expect(() => new Http().header(41, 42)).toThrow(new ValidatorError(422, "property or value must be a string"));
        });

        it("should create the Http instance with a JSON header", (): void => {
            expect.assertions(1);

            const result: Http = new Http().header("Content-Type", "application/json");

            const expectation: Record<string, any> = {
                _credentials: "same-origin",
                _headers: {
                    "Content-Type": "application/json"
                },
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });
    });

    describe("body", (): void => {
        it("should create the Http instance with a body", (): void => {
            expect.assertions(1);

            const body: Record<string, string> = {firstName: "John", lastName: "DOE"};
            const result: Http = new Http().body(body);

            const expectation: Record<string, any> = {
                _body: JSON.stringify(body),
                _credentials: "same-origin",
                _headers: {},
                _method: "GET",
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });
    });

    describe("mode", (): void => {
        it("should create the Http instance with a mode same-origin", (): void => {
            expect.assertions(1);

            const mode: RequestMode = "same-origin";
            const result: Http = new Http().mode(mode);

            const expectation: Record<string, any> = {
                _credentials: "same-origin",
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: mode
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create the Http instance with a mode cors", (): void => {
            expect.assertions(1);

            const mode: RequestMode = "cors";
            const result: Http = new Http().mode(mode);

            const expectation: Record<string, any> = {
                _credentials: "same-origin",
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: mode
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create the Http instance with a mode no-cors", (): void => {
            expect.assertions(1);

            const mode: RequestMode = "no-cors";
            const result: Http = new Http().mode(mode);

            const expectation: Record<string, any> = {
                _credentials: "same-origin",
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: mode
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create the Http instance with a mode navigate", (): void => {
            expect.assertions(1);

            const mode: RequestMode = "navigate";
            const result: Http = new Http().mode(mode);

            const expectation: Record<string, any> = {
                _credentials: "same-origin",
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: mode
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create the Http instance with the default mode when passing an undefined mode - mode set to same-origin by default", (): void => {
            expect.assertions(1);

            const mode: RequestMode | undefined = undefined;
            const result: Http = new Http().mode(mode);

            const expectation: Record<string, any> = {
                _credentials: "same-origin",
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });
    });

    describe("credentials", (): void => {
        it("should create an Http instance with the credentials same-origin", (): void => {
            expect.assertions(1);

            const credentials: RequestCredentials = "same-origin";
            const result: Http = new Http().credentials(credentials);

            const expectation: Record<string, any> = {
                _credentials: credentials,
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create an Http instance with the credentials omit", (): void => {
            expect.assertions(1);

            const credentials: RequestCredentials = "omit";
            const result: Http = new Http().credentials(credentials);

            const expectation: Record<string, any> = {
                _credentials: credentials,
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create an Http instance with request init only", (): void => {
            expect.assertions(1);

            const result: Http = new Http().requestInit({
                method: "PUT"
            });

            const expectation: Record<string, any> = {
                _credentials: "same-origin",
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {
                    method: "PUT"
                },
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create an Http instance with request init and credentials", (): void => {
            expect.assertions(1);

            const credentials: RequestCredentials = "omit";
            const result: Http = new Http().credentials(credentials).requestInit({
                method: "PUT"
            });

            const expectation: Record<string, any> = {
                _credentials: credentials,
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {
                    method: "PUT"
                },
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create an Http instance with the credentials include", (): void => {
            expect.assertions(1);

            const credentials: RequestCredentials = "include";
            const result: Http = new Http().credentials(credentials);

            const expectation: Record<string, any> = {
                _credentials: credentials,
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create an Http instance with the credentials set as undefined - credentials set to same-origin by default", (): void => {
            expect.assertions(1);

            const credentials: RequestCredentials | undefined = undefined;
            const result: Http = new Http().credentials(credentials);

            const expectation: Record<string, any> = {
                _credentials: "same-origin",
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });
    });

    describe("formData", (): void => {
        it("should create an Http instance with formData", (): void => {
            expect.assertions(1);

            const credentials: RequestCredentials = "same-origin";
            const result: Http = new Http().formData();

            const expectation: Record<string, any> = {
                _formData: {},
                _credentials: credentials,
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create an Http instance with formData with key as string", (): void => {
            expect.assertions(1);
            // @ts-ignore
            expect(() => new Http().formData().appendFormData("lastName", 42).appendFormData("fistName", 42))
                .toThrow(new ValidatorError(422, "key must be a string and value must be a string or instance of Blob or instance of File"));
        });

        it("should create an Http instance with formData with value as string", (): void => {
            expect.assertions(1);
            // @ts-ignore
            expect(() => new Http().formData().appendFormData(42, "Doe").appendFormData(42, "John"))
                .toThrow(new ValidatorError(422, "key must be a string and value must be a string or instance of Blob or instance of File"));
        });

        it("should create an Http instance with formData with key and value as Blob", (): void => {
            expect.assertions(1);

            const credentials: RequestCredentials = "same-origin";
            const result: Http = new Http().formData().appendFormData("lastName", new Blob(["Doe"]));

            const expectation: Record<string, any> = {
                _formData: {},
                _credentials: credentials,
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });

        it("should create an Http instance with formData with key and value as string", (): void => {
            expect.assertions(1);

            const credentials: RequestCredentials = "same-origin";
            const result: Http = new Http().formData().appendFormData("lastName", "Doe").appendFormData("fistName", "john");

            const expectation: Record<string, any> = {
                _formData: {},
                _credentials: credentials,
                _headers: {},
                _body: undefined,
                _method: "GET",
                _requestInit: {},
                _mode: "same-origin"
            };

            expect(JSON.stringify(result)).toStrictEqual(JSON.stringify(expectation));
        });
    });


    describe("json", (): void => {
        it("should create an Http request", done => {
            expect.assertions(1);

            const expectation: Record<string, any> = {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                    geo: {
                        lat: "-37.3159",
                        lng: "81.1496"
                    }
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                    bs: "harness real-time e-markets"
                }
            };

            new Http().json("https://jsonplaceholder.typicode.com/users/1").then((users: JSON): void => {
                expect.assertions(1);
                expect(JSON.stringify(users)).toStrictEqual(JSON.stringify(expectation));
                done();
            });
        });

        it("should fail with an incorrect url", () => {
            expect.assertions(1);

            const url = 42;
            // @ts-ignore
            expect(() => new Http().json(42)).toThrow(new ValidatorError(422, `url must be a string not '${typeof url}'`));
        });

        it("should fail with an incorrect Http request", done => {
            expect.assertions(0);
            new Http().json("https://jsonplaceholder.typicode.com/user/1").catch((): void => {
                done();
            });
        });

        it("should fail with an incorrect Http request with is not have headers Content-Type: application/json", done => {
            expect.assertions(0);
            new Http().json("https://img.freepik.com/photos-gratuite/fond-uni-rose-jaune_53876-98329.jpg?size=626&ext=jpg").catch((): void => {
                done();
            });
        });
    });

    describe("blob", (): void => {
        it("should create an Http request", done => {
            expect.assertions(1);

            const expectation: Record<string, any> = {
                type: "image/jpeg",
                size: 13252
            };

            new Http().blob("https://img.freepik.com/photos-gratuite/fond-uni-rose-jaune_53876-98329.jpg?size=626&ext=jpg").then((blob: Blob): void => {
                expect.assertions(2);
                expect(blob.type).toStrictEqual(expectation.type);
                expect(blob.size).toStrictEqual(expectation.size);
                done();
            });
        });

        it("should fail with an incorrect url", () => {
            expect.assertions(1);

            const url = 42;
            // @ts-ignore
            expect(() => new Http().blob(42)).toThrow(new ValidatorError(422, `url must be a string not '${typeof url}'`));
        });

        it("should fail with an incorrect Http request", done => {
            expect.assertions(0);
            new Http().blob("https://jsonplaceholder.typicode.com/user/1").catch((): void => {
                done();
            });
        });
    });

    describe("text", (): void => {
        it("should create an Http request", done => {
            expect.assertions(1);

            const expectation: string = JSON.stringify({
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                    geo: {
                        lat: "-37.3159",
                        lng: "81.1496"
                    }
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                    bs: "harness real-time e-markets"
                }
            });

            new Http().text("https://jsonplaceholder.typicode.com/users/1").then((users: string): void => {
                expect.assertions(1);
                expect(JSON.stringify(JSON.parse(users))).toStrictEqual(expectation);
                done();
            });
        });

        it("should fail with an incorrect url", () => {
            expect.assertions(1);

            const url = 42;
            // @ts-ignore
            expect(() => new Http().text(42)).toThrow(new ValidatorError(422, `url must be a string not '${typeof url}'`));
        });

        it("should fail with an incorrect Http request", done => {
            expect.assertions(0);
            new Http().text("https://jsonplaceholder.typicode.com/user/1").catch((): void => {
                done();
            });
        });
    });
});
