import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),

 
});