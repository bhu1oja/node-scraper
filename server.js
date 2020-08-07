var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){

url = 'https://www.letscodethat.com';

request(url, function(error, response, html){
    if(!error){
        var $ = cheerio.load(html);
    var json = { title : ""};

    $('.site-main').filter(function(){
        var data = $(this);
        console.log(data.children())
         json.title = data.children().text();            

            //console.log(data.children().first().text())
       //  json.data = data.children().text();
        //  json.release = data;
    })

}

// To write to the system we will use the built in 'fs' library.
// In this example we will pass 3 parameters to the writeFile function
// Parameter 1 :  output.json - this is what the created filename will be called
// Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
// Parameter 3 :  callback function - a callback function to let us know the status of our function

fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){

    console.log('File successfully written! - Check your project directory for the output.json file');

})

// Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
res.send('Check your console!')

    }) ;
})
app.listen('8081')
exports = module.exports = app;