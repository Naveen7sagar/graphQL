const graphql = require('graphql')
const {
    GraphQLObjectType,
     GraphQLSchema,
     GraphQLInt,
     GraphQLString,
     GraphQLList
} = graphql;

const Usertype =  new GraphQLObjectType({
    name:'user',
    fields:()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString}
    })
})
const RootQuery = new GraphQLObjectType({
    name:"xyz",
    fields:{
        enscode:{
            type:new GraphQLList(Usertype),
            resolve(parent,args){
                let data = [{
                    id:12,name:'naveenkumar',email:"naveen7sagar@gmail.com",phone:97587837324
                },
                {
                    id:13,name:'vishal',email:"vishal7sagar@gmail.com",phone:9758786889
                }]
                return data 
            }
        },
        userList:
        {
            type:new GraphQLList(Usertype),
            resolve(parent,args){
                let data = [{
                    id:15,name:'username',email:"rahulsagar@gmail.com",phone:975878467
                },
                {
                    id:16,name:'userdemo',email:"vishal7sagar@gmail.com",phone:97587987664
                }]
                return data 
            }
        }
    }
})

module.exports = new GraphQLSchema({query: RootQuery})
