import DS from 'ember-data';

export default DS.Model.extend({
  login: DS.attr('string'),
  password: DS.attr('string'),
  email: DS.attr('string'),
  contentIds: DS.attr('number'),
  status: DS.attr('number'),
  privilege: DS.attr('number')
});
