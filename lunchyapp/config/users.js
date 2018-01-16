var User = require('../models/users');

const Users = {
    addGroupId: (user, group) => {
        User.findOne({ '_id': user }, function(err, person) {
            person.set({ 'group': { 'id': group } });
            person.save(function(err, updatedUser) {
                if (err) return handleError(err);
                console.log('Group ID Added to User');
            });
        })
    },

    updateInfo: (newInfo, callback) => {
        const { first, last, username, group } = newInfo.newInfo
        let userInfo = {
            name: {
                first: first,
                last: last
            },
            username: username,
            group: {
                name: group
            }
        };

        User.findByIdAndUpdate(newInfo.userid, userInfo, function() {
            callback(userInfo);
        });
    }
};

module.exports = Users;
