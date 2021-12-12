const hostname = 'http://localhost:5000/'

type methodsTypes = "POST" | "GET" | "PATCH"

interface IRest {
    options: {method: methodsTypes, body?: any},
    rest: string,
}

interface IRests {
    REGISTRATION_SERVICE: IRest,
    AUTH_SERVICE: IRest,
    GET_INFO: IRest
}

export const rests: IRests = {
    REGISTRATION_SERVICE: { options: {method: 'POST' }, rest: hostname + 'auth/registration' },
    AUTH_SERVICE: { options: { method: 'POST' }, rest: hostname + 'auth/login' },
    GET_INFO: { options: { method: 'GET' }, rest: hostname + 'auth/users' }
 }