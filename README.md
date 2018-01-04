App: Jammming
Created By: Greg Bruce (https://github.com/GBruce82/Jammming) in partial fulfillment of the requirements of Codecademy's "Build Front-End Web Apps" intensive course (https://www.codecademy.com/pro/intensive/build-frontend-web-apps-from-scratch).

This program is music search app with the ability to save personal Playlists and send them to your Spotify account.  As it is built to work in conjunction with Spotify it will require the user to obtain a Spotify Account with Client ID.

Per the React_README this app was bootstrapped using "Create React App" (https://github.com/facebookincubator/create-react-app). See the "React_README.md" for more information and specifics about the "Create React App" functionality.

To run my Jammming App:
1. Pull the code to your local machine

2. Create a ".config.json" file in "/src" with this json format:
  {
    "clientID" : "Your-Spotify-app-Client-ID",
    "redirectURI" : "Your-desired-redirect-URI"  ** One option for your default value is http://localhost:3000/ **
  }

3. From the command line/terminal, run "npm install" anywhere in your Jammming folder.  It will probably take a moment to complete; there is a lot to be installed.

4. Once you have control over the terminal again:
  a. From the command line/terminal, run "npm start" anywhere in your Jammming folder
  b. It should launch the app in your browser

5. The first time you load it, you will automatically be redirected to your Spotify login page

6. After logging into Spotify, enter a song, artist, or album name in the search bar and click "Search"

7. If the song, artist or album you want is in the results click the "+" icon next to any song you want to add to your Playlist.  Repeat your searches and saves until your Playlist is complete.

8. To remove songs from your Playlist click on the "-" icon

9. The Playlist name is also dynamic so you change it to whatever you prefer

10. Once you have your playlist setup, click on the "Save to Spotify" button.  The Playlist you created will clear and you can make another one or go to your Spotify account and listen to your Playlist(s).

ENJOY!

Issues:

Please report any problems you find by creating an issue on GitHub: https://github.com/GBruce82/Jammming/issues

Good listening!!  Greg
