# Spotify API Assignment - SERVER SIDE REMIX!

Spotify has a wondeful public API. Lets explore API usage using music because music is awesome. Your task will be to explore some of the endpoints that Spotify offers us. You'll want the documentation:

[https://developer.spotify.com/web-api/](https://developer.spotify.com/web-api/)

Outside of the documentation, which is expansive, spotify offers an 'api console' which will create requests on your behalf. It's a lot like Postman, check it out:

[https://developer.spotify.com/web-api/console/](https://developer.spotify.com/web-api/console/)

If you prefer to use Postman, you can! One of these tools will be useful. The nice thing about the Spotify Web Console is that it has a lot of human readable content to point you in the right direction.

## The Original 

The original assignment is [found here](https://github.com/gSchool/spotify-albums-and-tracks). While it is not required to have completed the original before attempting the remix, if you HAVE completed the original you can reuse quite a lot of the code. 

The original also has some javascript and an `index.html` file as a starting point. While these are not perfect analogs, some of THAT code may also be useful to start this server side remix.

## The Remix

This time around, instead of using AJAX and DOM manipulation, we want to use the node.js requests module, and `.ejs` templates to create the same result as before: an application that can display all the albums with all the tracks on spotify for any given artist, as well as the ability to search for an artist


## Your Task

Create an express server in this directory. This node+express server should have 2 routes which achieve the following result:

1. A route structured like this `/search/:searchString`. This route should perform a search on Spotify's API and then serve an `.ejs` file that has the first 20 artist results for the search string. Each result should be a hyper-link (`<a>` tag) that sends the user to the artist page.
2. The artist page route, structured like this `/artist/:spotifyArtistId` which accepts a Spotify artist id and then queries the Spotify API for every album that the artist queried has currently available on Spotify. Remember, this page must meet the following requirements: 
	* Albums appear with their release date.
	* Each album has all of its tracks displayed before the next album appears. 
	* Each Track must have its popularity metric displayed next to the track name.


### Heres a Tip
You'll need to use these two endpoints, but you may also need to use more:

* [https://developer.spotify.com/web-api/console/get-album/](https://developer.spotify.com/web-api/console/get-album/)
* [https://developer.spotify.com/web-api/console/get-artist-albums/](https://developer.spotify.com/web-api/console/get-artist-albums/)
