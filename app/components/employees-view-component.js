import Ember from 'ember';

export default Ember.Component.extend({
	employees: [],
	employeeDetailVisible: false,
	employeeListVisible: true,
	employeeDetailEdit: false,
	employeeDetail : {
		id: 'null',
		name: 'null',
	},
	employeeDetailToEdit : {},
	actions: {
		showEmployeeDetail: function(item) {
			this.set('employeeDetailVisible', true);
			this.set('employeeListVisible', false);
			this.set('employeeDetail', item);
		},
		showEmployeeList: function() {
			this.set('employeeDetailVisible', false);
			this.set('employeeListVisible', true);
		},
		employeeDetailEditForm: function(item) {
			this.set('employeeDetailVisible', false);
			this.set('detailEditVisible', true);
			this.set('employeeDetailToEdit', item);
		},
		saveDetailEdit: function() {
			this.set('detailEditVisible', false);
			this.set('employeeListVisible', true);
		},
		addNewEmployee: function() {
			this.set('employeeListVisible', true);
			this.set('addNewEmployeeVisible', false);
			let newEmployee = this.get('employeeDetail');
			this.sendAction('addEmployee', newEmployee);
		},
		cancelDetail: function() {
			this.set('detailEditVisible', false);
			this.set('employeeListVisible', true);
			this.set('addNewEmployeeVisible', false);
		},
		addNewEmployeeForm: function() {
			this.set('employeeListVisible', false);
			this.set('addNewEmployeeVisible', true);
		}
	}
});
