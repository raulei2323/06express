async function createUser(user){
    try{
        return await writeFile(user)
    } catch (error){
        return null
    }
}
async function getUsers() {
    try{
        return await readFile()

    } catch (error) {
        return null
    }
}
