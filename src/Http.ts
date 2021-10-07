export class ValidatorError extends Error {
    public readonly code: number;

    public constructor(code: number, message: string) {
        super();
        this.code = code;
        this.message = message;
    }
}


export class Http {
    private _body?: string;

    private _formData?: FormData;

    private _credentials: RequestCredentials;

    private _headers: Record<string, string>;

    private _method: string;

    private _requestInit: RequestInit;

    private _mode: RequestMode;


    public constructor() {
        this._method = "GET";
        this._headers = {};
        this._mode = "same-origin";
        this._credentials = "same-origin";
        this._requestInit = {};
    }

    /**
     * Helper for check if Content-Type header is equal to application/json
     * @param {string | null} contentType
     * @returns {boolean}
     */
    private readonly isJsonFormat = (contentType: string | null): boolean => Boolean(null !== contentType && -1 !== contentType.indexOf("application/json"));

    /**
     * Helper for format RequestOptions for fetch
     * @returns {RequestInit}
     */
    private readonly getFetchOptions = (): RequestInit => ({
        body: this._formData ?? this._body,
        credentials: this._credentials,
        headers: this._headers,
        method: this._method,
        mode: this._mode
    });

    /**
     * Adding RequestInitOption for fetch
     * @param {RequestInit} options
     */
    public requestInit(options: RequestInit): this {
        this._requestInit = {
            ...this._requestInit,
            ...options
        };
        return this;
    }

    /**
     * Update the HTTP method used for the request.
     * @param {Method} newMethod
     * @returns {this}
     */
    public method(newMethod: string): this {
        this._method = newMethod.toUpperCase();
        return this;
    }

    /**
     * Add a new header for the request.
     * @param {string} property
     * @param {string} value
     * @returns {this}
     */
    public header(property: string, value: string): this {
        if ("string" !== typeof property || "string" !== typeof value) {
            throw new ValidatorError(422, "property or value must be a string");
        }
        this._headers = {
            ...this._headers,
            [property]: value.toLowerCase()
        };

        return this;
    }


    /**
     * Create a new FormData()
     * You can provide a form in construct
     * @param {HTMLFormElement} form
     * @returns {this}
     */
    public formData(form?: HTMLFormElement): this {
        this._formData = new FormData(form);
        return this;
    }


    /**
     * Append in formData a new key/value pairs
     * If this._formData is undefined create a new FormData()
     * If value is an instance of Blob, add a filename if is provide
     * @param {string} key
     * @param {string | Blob | File} value
     * @param {string} fileName
     * @returns {this}
     */
    public appendFormData(key: string, value: string | Blob | File, fileName?: string): this {
        if ("string" !== typeof key) {
            throw new ValidatorError(422, "key must be a string and value must be a string or instance of Blob or instance of File");
        }
        if ("string" !== typeof value && !(value instanceof File) && !(value instanceof Blob)) {
            throw new ValidatorError(422, "key must be a string and value must be a string or instance of Blob or instance of File");
        }
        if ("undefined" !== typeof this._formData) {
            this.formData();
        }
        if (value instanceof Blob) {
            this._formData?.append(key, value, fileName);
        } else {
            this._formData?.append(key, value);
        }
        return this;
    }

    /**
     * Update the body to use in the request.
     * @param {Record<string, any>} newBody
     * @returns {this}
     */
    public body(newBody: Record<string, any>): this {
        this._body = JSON.stringify(newBody);
        return this;
    }

    /**
     * Update the mode to use in the request.
     * @param {RequestMode} newMode
     * @returns {this}
     */
    public mode(newMode?: RequestMode): this {
        if ("undefined" !== typeof newMode) {
            this._mode = newMode;
        }
        return this;
    }

    /**
     * Update the credentials to use in the request.
     * @param {RequestCredentials} newCredentials
     * @returns {this}
     */
    public credentials(newCredentials?: RequestCredentials): this {
        if ("undefined" !== typeof newCredentials) {
            this._credentials = newCredentials;
        }
        return this;
    }

    /*
     * Sends an HTTP request and get back a text response.
     * @param {string} url
     * @returns {Promise<string>}
     */
    public text(url: string): Promise<string> {
        if ("string" !== typeof url) {
            throw new ValidatorError(422, `url must be a string not '${typeof url}'`);
        }
        return fetch(url, {
            ...this.getFetchOptions(),
            ...this._requestInit
        }).then(async (response: Response): Promise<string> => {
            if (response.ok) {
                return response.clone().text();
            }
            const error = await response.clone().text();
            throw new ValidatorError(response.clone().status, error);
        });
    }

    /**
     * Sends an HTTP request and get back a blob response.
     * Otherwise return an error on text type
     * @param {string} url
     * @returns {Promise<Blob>}
     */
    public blob(url: string): Promise<Blob> {
        if ("string" !== typeof url) {
            throw new ValidatorError(422, `url must be a string not '${typeof url}'`);
        }
        return fetch(url, {
            ...this.getFetchOptions(),
            ...this._requestInit
        }).then(async (response: Response): Promise<Blob> => {
            if (response.ok) {
                return response.clone().blob();
            }
            const error = await response.clone().text();
            throw new ValidatorError(response.clone().status, error);
        });
    }

    /**
     * Sends an HTTP request and get back a json response only if you get a content-type header equal to "application/json".
     * Otherwise return an error on text type
     * @param {string} url
     * @returns {Promise<JSON>}
     */
    public json(url: string): Promise<JSON> {
        if ("string" !== typeof url) {
            throw new ValidatorError(422, `url must be a string not '${typeof url}'`);
        }
        return fetch(url, {
            ...this.getFetchOptions(),
            ...this._requestInit
        }).then(async (response: Response): Promise<JSON> => {
            const contentType = response.headers.get("content-type");
            if (this.isJsonFormat(contentType)) {
                if (response.ok) {
                    return response.clone().json();
                }
                const error = await response.clone().json() as unknown as JSON;
                throw new ValidatorError(response.clone().status, JSON.stringify(error));
            }
            const error = await response.clone().text();
            throw new ValidatorError(response.clone().status, error);
        });
    }
}
