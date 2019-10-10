Youtube Clone is an app that uses the Youtube Google API to pull data from youtube's library. 

This app was created with React and Semantic UI for styling.

The app is populated with a search term by default and displays a video and list of related videos from that search term. The application also uses a faker API to display a random image genereated from the faker package and the component is also passed props that passes a comment.

To get access to the Google Youtube API you must go to www.console.developers.google.com and create a new project and then follow the on screen instructions to get the API Key.

The list of videos coming back from the search by the client is being stored in an array and then those videos are being mapped over by the javascript function .map() and it returns the list of videos on the side.

This application also uses axios to make HTTP request to GET the video data from the Youtube API.
