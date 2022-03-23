const app= require("./index");

const connect= require("./configs/db");

app.listen(5002, async function(){
    try{
        await connect();
        console.log("listening to port 5002")

    }catch(err){
        console.error("error connecting"+err);
    }
});