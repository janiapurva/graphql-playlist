const express = require('express');
const {graphqlHTTP} = require('express-graphql');
// importing schema 
const schema = require('./schema/schema');
const app = express();


app.use('/graphql',graphqlHTTP({

  schema

}));

app.listen(4000,()=>{
  console.log('Now listening for request on port 4000')
})