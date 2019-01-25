'use strict';

var User = require('../models/users');

var Users = {
    addGroupId: function addGroupId(user, group) {
        User.findOne({ '_id': user }, function (err, person) {
            person.set({ 'group': { 'id': group } });
            person.save(function (err, updatedUser) {
                if (err) return handleError(err);
                console.log('Group ID Added to User');
            });
        });
    },

    updateInfo: function updateInfo(newInfo, callback) {
        var _newInfo$newInfo = newInfo.newInfo,
            first = _newInfo$newInfo.first,
            last = _newInfo$newInfo.last,
            username = _newInfo$newInfo.username,
            group = _newInfo$newInfo.group;

        var userInfo = {
            name: {
                first: first,
                last: last
            },
            username: username,
            group: {
                name: group
            }
        };

        User.findByIdAndUpdate(newInfo.userid, userInfo, function () {
            callback(userInfo);
        });
    }
};

module.exports = Users;
//# sourceMappingURL=users.js.map