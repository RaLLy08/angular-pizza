# angular-pizza

build client: yarn build
run client: yarn start


#### POST api/login
```
{
  phone: string,
  password: string,
}

Response:

in cookies set "refreshToken",

{
    accessToken: string,
    user: {
        id: string,
        phone: string,
        role: string
    }
}

```
#### POST api/registration
```
{
  phone: string,
  password: string,
}
Response: 
{
  message: string
}
```

#### POST api/refreshTokens
```
refreshToken in cookies

Response: 

sets new refreshToken in cookies

{
  accessToken: string,
}
```




