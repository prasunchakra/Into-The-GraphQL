const { Friends, Competitor } = require('./dbConnectors')

const resolver = {
    getfriend: ({ id }) => {
        return new Promise((resolve, reject) => {
            Friends.findOne({ _id: id }, (err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        });
    },
    getallfriend: () => {
        return new Promise((resolve, reject) => {
            Friends.find((err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        });
    },
    getcompetitor: () => {
        return Competitor.findAll();
    },
    createFriend: ({ input }) => {
        const newFriend = new Friends({
            firstName: input.firstName,
            lastName: input.lastName,
            gender: input.gender,
            age: input.age,
            language: input.language,
            email: input.email,
            contact: input.contact
        });
        newFriend.id = newFriend._id
        return new Promise((resolve, reject) => {
            newFriend.save(err => {
                if (err) reject(err)
                else resolve(newFriend)
            })
        })
    },
    updateFriend: ({ input }) => {
        return new Promise((resolve, reject) => {
            Friends.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, friend) => {
                if (err) reject(err)
                else resolve(friend)
            })
        })
    },
    deleteFriend: ({ id }) => {
        return new Promise((resolve, reject) => {
            Friends.findOneAndRemove({ _id: id }, (err) => {
                if (err) reject(err)
                else resolve("Successfully Deleted Friend")
            })
        })
    },
}

module.exports = resolver