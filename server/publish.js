Meteor.publish('allUsers', function(){
  if(Roles.userIsInRole(this.userId, 'admin')){
  return Meteor.users.find({});
}
});
Meteor.publish('Events', function() {
  return Events.find();
});
