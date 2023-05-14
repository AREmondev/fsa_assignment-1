# API ASSIGNMENT Documentation
## Subject: Make our algorithm live using REST API

## Description
Please select one or many algorithm ideas from the below list and create a rest api out of it -
### We have a function that can take two arguments called start and end. Both arguments will be a valid integer number. The function will return a random value in the given range.
### We have a function that can generate a fake person profile including first name, last name, email, avatar, age and address. User can pass an array of selected properties and it will return a person object containing only given properties. Ex: generatePerson([’firstName’, ‘lastName’, ‘email’])
### We have a function that can accept a string as an argument and return an object containing the number of letters, number of symbols and number of numeric characters.

### Endpoint 1
- Description: tow number a random value in the given range.
- URL: `/api/number-generator?start=2&end=10`
- Method: `GET`
- Parameters: start and end
- Example Request: /api/number-generator?start=2&end=10
- 
- Example Response:
```json
HTTP/1.1 200 OK
Content-Type: application/json
{
  "Your Number": 2
}
```

### Endpoint 2
- Description: String to get containing the number of letters, number of symbols and number of numeric characters.
- URL: `/api/string-count?string=cksdjciuhsdicuhsdic#34343@@&`
- Method: `GET`
- Parameters: string
- Example Request: /api/string-count?string=cksdjciuhsdicuhsdic#34343@@&

- Example Response:
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "characters": {
    "letters": 19,
    "symbols": 3,
    "numerics": 5
  }
}
```


### Endpoint 3
- Description: Person params to person generate.
- URL: `/apiperson-maker?person=email,lastName`
- Method: `GET`
- Parameters: person
- Example Request: /apiperson-maker?person=email,lastName

- Example Response:
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "person": {
    "email": "Vivien.DAmore49@gmail.com",
    "lastName": "Heidenreich"
  }
}
```
