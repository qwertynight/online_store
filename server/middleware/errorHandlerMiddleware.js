const ApiError = require('../error/ApiError')

module.exports = function(err, req, res, next) {
    if (err instanceof ApiError) { // intanceof operator that returns true if the prototype exists and returns false ...
        return res.status(err.status).json({message: err.message})
    }

    return res.status(500).json({message: 'Unexpected error'})
}