import Ember from 'ember';

export default Ember.Component.extend({
	employees: [],
	actions: {
		addNewEmployee: function() {
			let newEmloyee = this.get('employees');
			this.get('employees').pushObject({
				id:(this.get('posts').length + 1),
				firstName: newEmployee.firstName,
				lastName: newEmployee.lastName,
				email: newEmployee.email
			});
		}
	}
});
