const validUserId = async (req, res, next) => {
    const { userid } = req.headers
    const { id } = req.params

    if (userid != id) {
        res.status(401).send({message: "Not authorized"})
    } else {
        next()
    }
}

module.exports = {
    validUserId
}