class Person {
  constructor(doc) {
    _.extend(this, doc);
  }
  upperCase () {
    return this.name.toUpperCase();
  }
}
this.Person = Person;

PeopleCollection = new Meteor.Collection("people", {
  transform: function (doc) {
    return new Person(doc);
  }
});
