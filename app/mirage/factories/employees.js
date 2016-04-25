/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/

//export default Mirage.Factory.extend({
  // name: 'Pete',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // },

  // firstName: faker.name.firstName,       // using faker
  // lastName: faker.name.firstName,
  // zipCode: faker.address.zipCode
//});
import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  type: 'employees',
  attributes: {
    firstName: "John",
    lastName: "Smith",
    email: "john.smith@asdf.com",
    tel: "555-555-5599",
    dept:"Sales"
  }    
});