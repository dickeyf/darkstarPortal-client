import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addNew: function() {
      var account = this.store.createRecord('account', {
        login: this.controller.get('login')
      });
      account.save().then(() => {
        console.log('save successful');
        this.controller.set('message', 'A new account with the name "' + this.controller.get('login') + '" was added.');
        this.controller.set('name', null);
      }, function() {
        console.log('save failed');
      });
    }
  }
});
