const config = require(`../.config.json`);

const clientID = config.clientID;
const redirectURI = config.redirectURI;

let accessToken, expiresIn;

const Spotify = {
  getAccessToken() {
    if(accessToken)
    // Return the currect accessToken if we have it
      return(accessToken);
    else if(window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/))
    {
      // Otherwise, check for it in the URL ^see above^
      // Copy it down if it exists
      accessToken = window.location.href.match(/access_token=([^&]*)/)[0];
      console.log(accessToken);
      expiresIn   = window.location.href.match(/expires_in=([^&]*)/)[0];
      console.log(expiresIn);

      // From CA Hint: Clear parameters from URL so we don't grab expired data later
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

        return(accessToken);
    }
    else
    {
      // If the first 2 conditions failed, then send authentication request
      let url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      window.location = url;
    }
  },

  search(searchTerm) {
    const searchURL = `https://api.spotify.com/v1/search?type=track&q=${searchTerm}&limit=12`;
    return fetch(searchURL, {headers: {Authorization: `Bearer ${accessToken}`}})
      .then(response => response.json())
        .then(jsonResponse => {
          if(jsonResponse.tracks) {
            console.log(jsonResponse);
            console.log(jsonResponse.tracks.items[0]);
            return jsonResponse.tracks.items.map(track => {
              return {
                id      : track.id,
                name    : track.name,
                artist  : track.artists[0].name,
                album   : track.album.name,
                uri     : track.uri
              };
            }
          );
        }
        else
          return [];
      }
    );
  }
};

export default Spotify;
