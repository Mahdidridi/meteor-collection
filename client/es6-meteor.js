Template.peopleList.helpers({
  people () {
    return PeopleCollection.find();
  }
});
