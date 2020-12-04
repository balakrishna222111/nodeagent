var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/test', function(request, response) {
  console.log("Get request initiated  ")
  setTimeout(function() {
    response.send('Hello World!')
    console.log('Blah blah blah blah extra-blah');
  }, 10000);
  
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
