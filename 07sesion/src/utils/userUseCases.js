const fs = require('fs')
const path = './src/utils/users.json'


const readFile = async (json) => {
    return await new Promise((resolve, reject) =>{
        fs.readFile(path, 'utf-8', (error, data) =>{
            if (error){
                reject (error)
            }
            else {
                resolve(JSON.parse(data))
            }
        })
    })
}

const writeFile = async (data) => {
    return await new Promise((resolve, reject) =>{
        fs.writeFile(path, JSON.stringify(data, null, 4),(error) => {
            if (error){
                reject (error)
            }
            else {
                resolve(data)
            }
        })
    })
}




const createUser = async (user) => {
    try {
        let users =  await readFile(user)
        users.push(user)
        let created = await writeFile(users)
        if( created) {
            return user
        } else {
            return null
        }
         
    } catch (error) {
        return null
    }
}

const getUsers = async () => {
    try {
        return await readFile()
    } catch (error) {
        return null
    }
}

const updateUser = async (id, user) => {
    try {
        const users = await readFile()
        
        const newUsers = users.map((u) => {
            if (u.id == id) {
                return user
            }
            return u
        })
        let created = await writeFile(newUsers)
        if( created) {
            return user
        } else {
            return null
        }

    } catch (error) {
        return null
    }
}

const deleteUser = async (id) => {
    try {
        let users = await readFile()
        const newUsers = users.map((u) => {
            if (u.id == id) {
                return {}
            }
            return u
        })
        return await writeFile(newUsers)
    } catch (error) {
        return null
    }
}

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
}