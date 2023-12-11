export const fetchOk = (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
) =>
    fetch(input, init).then((response: Response) => {
        if (!response.ok) {
            throw new Error(`Invalid Response: ${response.status}`);
        }
        return Promise.resolve(response);
    });

const makeTimeoutPromise = (timeoutLength: number) =>
    new Promise((_resolve, reject) => {
        setTimeout(() => {
            reject(Error('Fetch timeout'));
        }, timeoutLength);
    });

export type RequestInitRubust = RequestInit & {
    timeout?: number | null;
    maxRetries?: number | null;
};

export const fetchWithTimeout = (
    input: RequestInfo | URL,
    init: RequestInitRubust,
) => {
    if (init.timeout == null) {
        return fetchOk(input, init);
    }
    return Promise.race([
        fetchOk(input, init),
        makeTimeoutPromise(init.timeout),
    ]).then((r) => {
        if (r instanceof Response) {
            return r;
        }
        throw new Error('Invalid response');
    });
};

export const fetchRobust = (input: string, init: RequestInitRubust) => {
    if (init.maxRetries == null) {
        return fetchWithTimeout(input, init);
    }
    return new Promise((resolve, reject) => {
        let attempts = 1;
        const executeFetch = () => {
            fetchWithTimeout(input, init)
                .then((r) => {
                    resolve(r);
                })
                .catch((e) => {
                    console.error(e, attempts);
                    if (init.maxRetries == null) {
                        const reason = new Error('No max retries specified');
                        console.error(reason);
                        reject(reason);
                        return;
                    }
                    if (attempts < init.maxRetries) {
                        attempts++;
                        executeFetch();
                    } else {
                        const reason = new Error('Max retries exceeded');
                        console.error(reason);
                        reject(reason);
                    }
                });
        };

        executeFetch();
    });
};
