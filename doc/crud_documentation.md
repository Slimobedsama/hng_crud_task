# HNG_CRUD_API
This API allows you to make a simple crud operation.  
The API is available on https://test-users.cyclic.app/api
## Endpoints
### List of users
#### GET /api
Returns all users at the request.  
Successful request will return a response of status 200 "OK"  
Failure will return a response of status 500 "Internal Server Error"
### List a single user 
#### GET /api/:id 
Returns the details of a single user using the id  
Successful request will return a response of status 200 "OK"  
Failure will return a response of status 404 "Not Found"
### Create a user
#### POST /api
Allows you to create a new user  
* name - String - Required
#### Example
{  
"name": "Mike Brown"  
}  
Successful request will return a response of status 201 "Created"  
Failure will return a response of status 400 "Bad Rrquest"
### Update a single user
#### PATCH /api/:id 
Allows you to update an existing user using the id  
* name - String - Required
#### Example
{  
"name": "Mike Charles"  
}  
Successful request will return a response of status 200 "OK"  
Failure will return a response of status 404 "Not Found"
### Delete a single user 
#### DELETE /api/:id 
Allows you to delete an existing user using the id  
Successful request will return a response of status 200 "OK"  
Failure will return a response of status 404 "Not Found"
