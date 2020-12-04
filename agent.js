var superagent = require("superagent")

superagent.get('http://localhost:5000/test')
.retry(2) 
.timeout(5000)
.then(res=>{
    console.log("Success");
})
.catch(err=>{
    console.log("Failed");
});