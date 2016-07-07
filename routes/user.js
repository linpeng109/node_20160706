/**
 * Created by Mars on 2016/7/7.
 */
module.exports = function (mongoose) {
    const userSchema = mongoose.Schema({
        userName: {type: String, unique: true},
        passWord: String,
        department: String,
        eMail: String,
        Mobile: String,
        WeiXing: String
    });

    const User = mongoose.model('user', userSchema);

    User.insert = function (user, callback) {
        user.save(callback);
    };
    User.update = function (user, callback) {

    };
    User.delete = function (user, callback) {

    };
    User.findAll = function (callback) {
        const query = User.find({});
        query.exec(callback);
    };
    User.findByDepartment = function (department, callback) {
        const query = User.find({});
        query.where('department').gte(department);
        query.exec(callback);
    };
    User.findById = function (id, callback) {
        const query = User.find({});
        query.where('')
    }
    return User;
};