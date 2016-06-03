// Example express application adding the parse-server module to expose Parse
// compatible API routes.

var express = require('express');
var ParseServer = require('parse-server').ParseServer;

//var databaseUri = process.env.DATABASE_URI || process.env.MONGOLAB_URI;
var databaseUri = "mongodb://adpillrw:Mongo This!@ds011248.mongolab.com:11248/adherencepill";
if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

var api = new ParseServer({
  databaseURI: 'mongodb://adpillrw:mongo12@ds011248.mlab.com:11248/adherencepill',
  cloud: __dirname + '/cloud/main.js',
  appId: 'HW8S7gMIafiQQszmJme2IS4Be7jFlRHnE0izdtLs',
  masterKey: 'fDtm8fpoHSxbeH3iUGaEexoRgsSdiBh2MvYGDjej', //Add your master key here. Keep it secret!
  clientKey: 'MJN6gykWX7OEPeEXofgLLIXuFnQppPpbGGXLL0iL' ,
  dotNetKEy: 'IjAs21Q70LSFIeZgkc78XYEhVkQ3Lyh3AEcqzvuj' ,
  restAPIKey: 'D0lEeiwQ62X6POKXJ1RTxbHuDPX91aUvditAIjxC' ,
  javascriptKey: 'GbBn4qcxwLiTqW4rI9Ipfsfo6a91oWYioiisnuSC'
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('I dream of being a web site.');
});

var port = process.env.PORT || 1337;
app.listen(port, function() {
    console.log('Adherence Pill Parse Server Running on ' + port + '.');
});
