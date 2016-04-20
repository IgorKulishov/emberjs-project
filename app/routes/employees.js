import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		//gets default data 
		return $.get("employees.json");
	},
	actions: {
		employeeTheDetail: function(newEployeeDetail) {
			console.log(newEployeeDetail);
			//call some api
			return $.post("api/employees", newEployeeDetail)
		}
	}
});
