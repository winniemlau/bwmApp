var myLogoutFunc = function () {
  Session.set('nav-toggle', '');
  FlowRouter.go('/');
}

var mySubmitFunc = function () {
  FlowRouter.go('/dashboard');
  Bert.alert( 'You have succesfully logged in!', 'success', 'growl-top-right' ); 
}

AccountsTemplates.configure({
    confirmPassword: true,
    onLogoutHook: myLogoutFunc,
    onSubmitHook: mySubmitFunc
});

AccountsTemplates.addFields([
  {
    _id: 'firstName',
    type: 'text',
    displayName: 'First Name',
    required: true,
    re: /(?=.*[a-z])(?=.*[A-Z])/,
    errStr: '1 lowercase and 1 uppercase letter required'
  }
]);
