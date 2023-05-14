const {faker} = require('@faker-js/faker');


const makePerson = (params) => {
  // const properties = [
  //     'firstName',
  //     'lastName',
  //     'email',
  //     'avatar',
  //     'age',
  //     'address'
  // ];
  const person = {};
  params.forEach(key => {
    // if(properties.includes(key.toLowerCase())){
     
    // }
    console.log(key)
     switch (key) {
        case 'firstName':
          console.log('firstname')
          person[key] = faker.name.firstName();
          break;
        case 'lastName':
          person[key] = faker.name.lastName();
          break;
        case 'email':
          person[key] = faker.internet.email();
          break;
        case 'avatar':
          person[key] = faker.image.imageUrl();
          break;
        case 'age':
          person[key] = Math.floor(Math.random() * 50) + 20;
          break;
        case 'address':
          person[key] = faker.address.streetAddress();
          break;
        default:
          break;
      }
  });
  return person;
}

module.exports = makePerson;
