const express = require('express');
const app = express();
port = process.env.PORT || 5000
const SpotifyWebApi = require('spotify-web-api-node')
 const cors = require('cors')
 const bodyParser = require('body-parser')
 app.use(cors())
 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({ extended: true }))
 
app.post("/login", (req,res) => {
    const data = req.body
    const code = data.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri:"http://localhost:3000",
      clientId: "f19ac3e1387949e68d398ffadd63c440",
      clientSecret: "c213080c4cfc47e18d12921c25e46594"
    })
  
    spotifyApi.authorizationCodeGrant(code).then(
        function(data) {
          res.send(data)
        
        },
        function(err) {
          console.log('Something went wrong!', err);
        }
      );
})

app.post("/refresh", (req,res) => {
  const data = req.body;
  const refreshToken = data.refreshToken
  
  const spotifyApi = new SpotifyWebApi({
    redirectUri:"http://localhost:3000",
    clientId: "f19ac3e1387949e68d398ffadd63c440",
    clientSecret: "c213080c4cfc47e18d12921c25e46594",
    refreshToken
  })
  spotifyApi.refreshAccessToken().then(
    function(data) {
      // console.log('The access token has been refreshed!' + data.body["access_token"] );
       res.send({
        accessToken:data.body['access_token'],
        expiresIn: data.body['expires_in']
       })
      // Save the access token so that it's used in future calls
      
    },
    function(err) {
      console.log('Could not refresh access token', err);
    }
  );
  
})

app.listen(port,() => {
  console.log("server is running");
})