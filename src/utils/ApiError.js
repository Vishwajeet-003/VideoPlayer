class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went wrong ",
        error = [],
        status = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.date = null
        this.message = message
        this.success = false
        this.error = errors

        if (statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}