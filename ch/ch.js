Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.ch.helpers({
    messages: function () {
      return Messages.find();
    }
  });
  Template.ch.events({
    'click .cl': function () {
      // increment the counter when button is clicked
      //Session.set('counter', Session.get('counter') + 1);
      var message = $('textarea').val();
      $('textarea').val();

      console.log('insering msg :',message);
      Messages.insert({text:message});
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
