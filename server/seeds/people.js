
if (PeopleCollection.find().count() === 0) {
  let now = new Date();
  PeopleCollection.insert({
    name:"mehdi",
    email:"mehdi@example.fr",
    createdAt: now,
    updatedAt: now
  });
  PeopleCollection.insert({
    name:"mahdi",
    email:"mahdi@example.fr",
    createdAt: now,
    updatedAt: now
  });
}
