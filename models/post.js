bookshelf = require('./dbconnect')


var Post = bookshelf.Model.extend({
  tableName: 'tutorials',
  hasTimestamps: true,
  user: function(){
    return this.belongsTo(User, 'user_id');
  },
  tags: function() {
    return this.hasMany(Tag);
  },
  votes: function() {
    return this.hasMany(Vote, 'tutorial_id');
  }
},{
  
});

module.exports = Post
