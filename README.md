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