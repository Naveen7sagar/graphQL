// import express from 'express';
const express = require('express')

const app = express();
const port = 3001;
// import { graphqlHTTP } from "express-graphql";
const {graphqlHTTP} = require('express-graphql')
// import schema from './schema.js'
const schema = require('./schema')
const connectDB = require('./config/db')
const DATABASE_URL = process.env.DATABASE_URL ||"mongodb://localhost:27017";
//databse connection
connectDB(DATABASE_URL)
app.use(express.json())
app.use('/graphql',
graphqlHTTP({
    schema,
    graphiql:true

})
)
app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`)
})