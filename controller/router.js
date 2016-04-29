var express = require('express');
var app = express();
var router = express.Router();
var prettyjson = require('prettyjson');
var request = require('request');

router.get('/', function(req, res) {
      res.render('index');
  });

router.get('/search',function(req,res){

    var artistquery = req.query.artist;
    res.redirect('/search/' + artistquery);
  });

router.get('/search/:searchString', function(req,res){
	var artist = req.params.searchString;
	
	request.get('https://api.spotify.com/v1/search?type=artist&q=' + artist, function(err, response, body){
		if(!err && response.statusCode == 200){
			var data = JSON.parse(body);			
			var artists = data.artists.items;	
			res.render("artists", {artists:artists});
		}
	});
});

router.get('/artist/:spotifyArtistId', function(req,res){
	var artistId = req.params.spotifyArtistId;
	// get artist ID
	request.get('https://api.spotify.com/v1/artists/' + artistId, function(err, response, body){
		var input = JSON.parse(body);
		var artist = input;
		// get albumls
		request.get('https://api.spotify.com/v1/artists/' + artistId + '/albums' , function(err, response, body){
			if(!err && response.statusCode == 200){
				var data = JSON.parse(body);			
				var albums = data.items;
				var counter = 0;
				var tracksList = [];
				var singleAlbum = {};
				var name = "";
	
				for (var i = 0; i < albums.length; i++) {
					name = albums[i].name;
					
					request.get('https://api.spotify.com/v1/albums/' + albums[i].id, function(err, response, body){						
						
						var trackData = JSON.parse(body);
						singleAlbum = {
							name: name,
							tracks: trackData.tracks.items,
							releaseDate: trackData.release_date
						};
						counter++;
						tracksList.push(singleAlbum);
						
						if( counter === albums.length) {
							res.render("artistID", {artist:artist, albums:albums,tracksList:tracksList});
						}
					}); // end get tracks
				} // end for loop							
			} // end if
		});	 // end get albums
	}); // end get artist ID
}); // end app.get


module.exports = router;