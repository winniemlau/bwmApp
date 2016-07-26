var postSignUp = function(userId, info){
  Roles.addUsersToRoles(userId, ['admin']);
}

AccountsTemplates.configure({
  postSignUpHook: postSignUp
});
