

## Description

Este projeto implementa a [api](https://github.com/gothinkster/realworld/tree/master/api)

Stack utilizada:

- typescript
- nestjs
- postgres

## Api collection

O arquivo collection.json pode ser importado no insomnia  para testar os endpoints implementados. 

### Authentication 

```curl
curl --request POST \
  --url http://localhost:3000/api/users/login \
  --header 'Content-Type: application/json' \
  --data '{
	"email":"capybara@mail.com",
	"password":"asdf1234"
}'

``` 

### Registration 

```curl
curl --request POST \
  --url http://localhost:3000/api/users \
  --header 'Content-Type: application/json' \
  --data '{
	"user": {
		"username": "cap",
		"password": "asdf1234",
		"email": "capybara@mail.com"
	}
}'

``` 

### Get Current User 

```curl
curl --request GET \
  --url http://localhost:3000/api/users \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJjYWFhcDMiLCJlbWFpbCI6ImNhcHliYXJhQG1haWwuY29tIiwiYmlvIjoiY2FweWJhcmEzQG1haWwuY29tIiwiaW1hZ2UiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjEtMDctMjlUMDM6MDU6MzUuMjU5WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDctMzFUMDM6MDc6MjQuMTAyWiIsImlhdCI6MTYyNzc4MTQwNiwiZXhwIjoxNjI3OTU0MjA2fQ._alJfAQHprALwzq5XdYyu9XiMNTD12tWe-FgDVRr9vI'
``` 

### Update User 

```curl
curl --request PUT \
  --url http://localhost:3000/api/users \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJjYXAxIiwiZW1haWwiOiJjYXB5YmFyYUBtYWlsLmNvbSIsImJpbyI6bnVsbCwiaW1hZ2UiOm51bGwsImNyZWF0ZWRBdCI6IjIwMjEtMDctMjlUMDM6MDU6MzUuMjU5WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDctMjlUMDM6MDU6MzUuMjU5WiIsImlhdCI6MTYyNzY5NjUzOSwiZXhwIjoxNjI3ODY5MzM5fQ.q17JpqMaej-bvz_iZIfR_ZQbW-90MthBT1Xa5xUCcnA' \
  --header 'Content-Type: application/json' \
  --data '{
	"user": {
		"username": "caaap3",
		"password": "senha123",
		"bio": "capybara3@mail.com"
	}
}'
``` 

### Get Profile

```curl
curl --request GET \
  --url http://localhost:3000/api/profiles/cap2
``` 

### Follow user

```curl
curl --request POST \
  --url http://localhost:3000/api/profiles/cap3/follow \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJjYXAiLCJlbWFpbCI6ImNhcHliYXJhQG1haWwuY29tIiwiYmlvIjpudWxsLCJpbWFnZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMS0wOC0wMlQwMTowMzoxMi41MzRaIiwidXBkYXRlZEF0IjoiMjAyMS0wOC0wMlQwMTowMzoxMi41MzRaIiwiaWF0IjoxNjI3ODY3NjkxLCJleHAiOjE2MjgwNDA0OTF9.oW_Gax7jldRmsKH5TT49HReigX8ugdLWqN0D73VGxLw' \
  --header 'Content-Type: application/json'
``` 

### Unfollow user

```curl
curl --request DELETE \
  --url http://localhost:3000/api/profiles/cap3/follow \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJjYXAiLCJlbWFpbCI6ImNhcHliYXJhQG1haWwuY29tIiwiYmlvIjpudWxsLCJpbWFnZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMS0wOC0wMlQwMTowMzoxMi41MzRaIiwidXBkYXRlZEF0IjoiMjAyMS0wOC0wMlQwMTowMzoxMi41MzRaIiwiaWF0IjoxNjI3ODY3NjkxLCJleHAiOjE2MjgwNDA0OTF9.oW_Gax7jldRmsKH5TT49HReigX8ugdLWqN0D73VGxLw'
``` 

## Before start

```bash
$ docker-compose up -d
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
