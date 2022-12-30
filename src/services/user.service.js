import  {storageService}  from "./storage.service.js"

const storageKey = 'user'

async function getUser(){
    const user = await storageService.loadFromStorage(storageKey)
    if(!user) {
        const newUser = _createNewUser("Boaz Deri")
        console.log(newUser);
        storageService.saveToStorage(storageKey, newUser)
        return newUser
    }
    return user
}

function signup(name){
        const newUser = _createNewUser(name)
        console.log('newUser',newUser);
        storageService.saveToStorage(storageKey, newUser)
}

function addMove(contact, amount){

}

function _createNewUser(name){
    return {name, coins: 100, moves: []}
}

export const userService = {
    getUser,
    signup,
    addMove
}