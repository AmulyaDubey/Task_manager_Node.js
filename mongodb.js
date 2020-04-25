const {MongoClient, ObjectID}=require('mongodb')
const connectionURL='mongodb://127.0.0.1:27017'
const databaseName='task-manager'

MongoClient.connect( connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error,client)=> {
    if(error){ 
        return console.log('Unable to connect to database')
    }
    const db= client.db(databaseName)

    /*db.collection('tasks').insertMany([
        { 
            description:'Laundry',
            completed: true
        },
        { 
            description:'Shopping',
            completed: false
        },
        { 
            description:'Cooking',
            completed: true
        }
    ], (error,result)=>{ 
        if(error){ 
            return console.log('Could not add task!')clear
        }
        console.log(result.ops)
    })*/
    /*db.collection('tasks').findOne({ _id: new ObjectID("5ea32131d13718159ec05fb1")},(error,task) =>{ 
        console.log(task)
    })*/

   /* db.collection('tasks').find({completed:false}).toArray((error, tasks) =>{
        console.log(tasks)
    })*/
    db.collection('tasks').updateMany({ completed:false},
        { 
            $set:{
                completed: true
            }
        }).then((result) =>
        {
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })

})