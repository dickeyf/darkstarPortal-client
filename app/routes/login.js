import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function() {
      var login = this.controller.get('login');
      var password = this.controller.get('password');
      if (!Ember.isEmpty(login) && !Ember.isEmpty(password)) {
        Ember.$.get('/api/accounts', {
          login: login, password: password
        }, (data) => {
          this.controllerFor('application').set('session', data);
          this.router.transitionTo('accounts');
        });
      }
    }
  }
});
