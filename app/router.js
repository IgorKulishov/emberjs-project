import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('employees-view');
  this.route('employees-add');
  this.route('employees-edit');
  this.route('employees-detail');
  this.route('settings');
  this.route('employees');
});

export default Router;
