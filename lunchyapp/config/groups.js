var Group = require('../models/group');

const Groups = {
    newGroup: (user, data) => {
        let addGroup = new Group();

        addGroup.groupname = data;
        addGroup.adminid = user._id;
        addGroup.groupbalance = 0;
        addGroup.paid = true;

        addGroup.save(function(err) {
            if (err){
                console.log('Error in adding group: '+err);
                throw err;
            }
            console.log('Group added succesfully');
        });
    },


    findGroupId: (user) => {

    }
};

module.exports = Groups;
