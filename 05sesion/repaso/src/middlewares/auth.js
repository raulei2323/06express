async function validUserId(req, res, next) {
    const { userid } = req.headers
    const { id } = req.params

    if (userid != id ) {
        res.status(401).send({message: "User not authorized"})
    }else {
        next()
    }
}
module.exports = {
    validUserId
}