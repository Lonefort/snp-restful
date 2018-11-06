## Running project

1. Clone repository
2. Run to fetch required development-dependencies
```sh
npm install
```
3. Run
```sh
npm start
```
4. Test
```sh
npm run test
```

5. Project deployed on Heroku
```sh
https://snp-restfull.herokuapp.com/orders
```

Available POST(create shipping order) and GET(get all existing orders) requests to this URL

API testing schema:
```sh
firstName: <String> (required)
lastName: <String> (required)
email: <String> (required)
phoneNumber: <String> (required)
address: <String> (required)
city: <String> (required)
zip: <String> (required)
specialNotes: <String> (optional)
```