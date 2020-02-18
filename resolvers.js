class Friend {
    constructor(id, { firstName, lastName, gender, age, language, email, contact }) {
        this.id = id,
            this.firstName = firstName,
            this.lastName = lastName,
            this.gender = gender,
            this.age = age,
            this.language = language,
            this.email = email,
            this.contact = contact
    }
}

const FriendDatabase = {}
const resolver = {
    getfriend: ({ id }) => {
        return new Friend(id, FriendDatabase[id]);
    },
    createFriend: ({ input }) => {
        id = require('crypto').randomBytes(10).toString('hex')
        FriendDatabase[id] = input
        return new Friend(id, input)
    }
}

module.exports = resolver