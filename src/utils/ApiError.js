class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went wrong ",
        error = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.date = null
        this.message = message
        this.success = false
        this.error = errors

        if (stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}