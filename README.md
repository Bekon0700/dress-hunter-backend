# b612-used-products-resale-server-side-Bekon0700

# All the api endpoints documented below:

## user route: /api/v1/users

|    URL      | req method         | permission  | return 
| ------------- |:-------------:| -----:|-----
| / | get  | admin | get all user
| / | post | all  | create new user
| /loginCreateToken| post | all | send access token
| /:userId | patch | admin | update user
| /:userId | delete | admin | delete user
| /myOders | get | buyer | get all booking info


## product route: /api/v1/products

|    URL      | req method         | permission  | return 
| ------------- |:-------------:| -----:|-----
| / | post  | seller | add new product
| /category | get | all  | get all category
| /category/:categoryName | get | all | get specific category


## booking route: /api/v1/booking

|    URL      | req method         | permission  | return 
| ------------- |:-------------:| -----:|-----
| / | post  | buyer | book a product

### Some key feature of this API

* This restAPI was built on MVC architecture. 
* JWT token was used to user authorization.
* Middleware functions were used to user access permission.
* Mongoose for mongoDB operation.