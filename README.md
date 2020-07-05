# graphql-ninja

# gettting familiar with graphql

basic graphql app

app.js

- route graphql schema with express

schema.js

- used to define object types, their relationships, and root query

Object Types

- the "models"
- use parent as arg for nested types

Root Query

- the landing zone of a graphql query
- fields - contain the actual query names
- resolves - contain the code to get data from db

Mutation

- NonNull: a certain field is required, cant accept null

Other

- GraphQLID is ID just for graphql but still string type for JS
