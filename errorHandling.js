exports.handle404Errors = (req, res, next) => {

    const error = {
        statusCode: 404,
        message: "We looked everywhere but sadly, there are no resources here.",
        status: "Resource Not Found"
    };
    
    next(error);
};

exports.errorHandler = (error, req, res, next) => {
    res.status(error.statusCode || 500).json({
        statusCode: error.statusCode,
        status: error.status || "failed",
        message: error.message,
        stack: error.stack,
        ...error
        });
}