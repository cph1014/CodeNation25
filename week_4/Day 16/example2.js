let users = ['dan','ben','stuart']

const addUser = (useranme,callback) => {
    setTimeout(()=> {
        user.push(username)
        callback()
    },2000)
}

const getUsers = () => {
    setTimeout(() => {
        console.log(users)
    },1000)
}

addUser('Charlie', getUsers)