###### React Router packages
1.react-router  >core navigation lib
2.rect-router-dom  >Navigation for dom based apps
3.react-router-native >Navigation for react-native apps
4.react-router-redux >Bindings between Redux and React Router

##### Bad Navigation using <a> tag
if the is done using href='/pageTwo' using 'a' tag then browser makes a request to pageTwo and development server responds with index.html file.Browser receives index.html file and dumps the old html file it was showing (including all React/Redux state data).

##### Different Router Types
1.BrowserRouter  >localhost:3000/pageTwo  >uses everything after TLD(.com,.net) or port as a path

2.HashRouter  >localhost:3000/#/pageTwo  >uses everything after # as a path

3.MemoryRouter  >localhost:3000/  >doesn't use URL to track navigation


##### google oauth scope list
https://developers.google.com/identity/protocols/oauth2/scopes

###### gapi documentation
https://developers.google.com/identity/sign-in/web/reference

###### To persist actions in redux dev tools even after page refresh
https://localhost:3000/?debug_session=mysession1
https://localhost:3000/?debug_session=mysession2