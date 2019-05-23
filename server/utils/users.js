
class Users {
    constructor() {
        this.users = [];
    }

    addUser (id, name, room) {
        let user = {
            id, name, room
        }
        this.users.push(user);
        return user;
    }

    removeUser(id) {
        let removedUser = null;
        let temp = this.users.filter((user) => {
            if(user.id === id) {
                removedUser = user;
                return false;
            } else return true;
        });

        this.users = temp;
        return removedUser;
     }

     getUser(id) {
        let ret = null;
        this.users.forEach((user)=>{
            if(user.id === id) {
               ret = user;
            }

        });

        return ret;
     }

     getUserList(room) {
        let filteredUsers = this.users.filter((user) => {
            return user.room === room;
        });

        let filteredNames = filteredUsers.map((user) => {
            return user.name;
        });

        return filteredNames;
     }
}

module.exports = {Users}