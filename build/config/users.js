'use strict';

var User = require('../models/users');

var Users = {
    findUser: function findUser(user) {},

    addGroupId: function addGroupId(user, group) {
        User.findOne({ '_id': user }, function (err, person) {
            person.set({ 'group': { 'id': group } });
            person.save(function (err, updatedUser) {
                if (err) return handleError(err);
                console.log('Group ID Added to User');
            });
        });
    }
};

module.exports = Users;
//# sourceMappingURL=users.js.map