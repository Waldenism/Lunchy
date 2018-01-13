'use strict';

var Group = require('../models/group');

var Groups = {
    newGroup: function newGroup(user, data) {
        var addGroup = new Group();

        addGroup.groupname = data;
        addGroup.adminid = user._id;
        addGroup.groupbalance = 0;
        addGroup.paid = true;

        addGroup.save(function (err) {
            if (err) {
                console.log('Error in adding group: ' + err);
                throw err;
            }
            console.log('Group added succesfully');
        });
    },

    findGroupId: function findGroupId(user) {}
};

module.exports = Groups;
//# sourceMappingURL=groups.js.map