import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      this.store.query('account', {
        login: this.controller.get('login')
      }).then((accounts) => {
          if (accounts.get('length') === 1) {
            var account = accounts.objectAt(0);
            this.controllerFor('application').set('account', account);
            this.transitionTo('accounts');
          } else {
            console.log('unexpected query result');
          }
        }
      );
    }
  }
});
