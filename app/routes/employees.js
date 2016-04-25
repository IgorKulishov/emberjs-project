import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		//gets default data 
		//return $.get("employees.json");
		return this.store.findAll('employee');
	},
	actions: {
		employeeTheDetail: function(newEployeeDetail) {
			//call some api
			//return $.post("api/employees", newEployeeDetail);
			return this.store.createRecord('employee', {
					'firstName':newEployeeDetail.firstName,
					'lastName': newEployeeDetail.lastName,
					'email':newEployeeDetail.email,
					'dept':newEployeeDetail.dept,
					'tel':newEployeeDetail.tel}).save().then(function(post){
				console.log('post');
				console.log(post);
			}).catch(function(error) {
				console.log('error');
				console.log(error);
			});
		}
	}
});
