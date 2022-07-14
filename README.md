# Movie App using React JS

This is a movie app created using React Js as the UI core library, React Context API for the global state, react-wouter library for the dynamic routing and the SPA behaviour and the native Fetch API for fetching the data from The Movie Database server (you can learn more about The movie Datebase in: [The movie database website](https://www.themoviedb.org/?language=es)). The App was deployed using the github pages service and it can be visited in: <https://julionelvv.github.io/movie-app-react/#/home/1>

## Structure of the App

The App has 2 types of view, the general view in which you can see the most popular movies, genres movies or search an movie by a keyword; and the other view is the deatils view where you can find the most relevant informafion about an specific movie. You can surf the different pages of every view using navigation buttons, and you can see a manual or automatic slider at the top of the App showing the four (it's a customizable number) most popular movies.

If you search for a route that does not exist, the app will show a 404 not found error, as the same way if you have a broken URL or the fetching fails it will show you an error message.

For the style of each component it's used module css with the BEM methodology

### Views of the App

* GeneralView: A view in which you see the most popular movies (home), the movies of a genre or search for an specific movie.
* DeatilView: This view shows the details about an specific movie. You can access the details of the movie just clicking in a movieCard component.

### Compoenents of the App

* Error: This component show you an error message in a view or a component whose fetching data fails.
* Footer: This component render the logo, the attributions and some contact information.
* Header: This component contains the logo and the entire navigation  menu, when the app is showing the slider its background will be transparent, in other case will be black.
* Logo: An static component that could be used in any part of the app, it's only purpose is show the logo and go to the home page
* Menu: A responsive navigation menu for going to the different genres, the search bar or the home page.
* MovieCard: This component shows the image, the title, and the release year of a single movie that belongs to the current view and its onClick show you the details about the movie.
* MoviesGrid: This component Fetch the data from the API to show you all the movieCards in an specific page and let you navigate the different pages gotten from the API.
* Slider: This component is a dual (manual and automatic change) slider that show you a code customizable amount of movies gotten from the API.
* gSpinner: While the components are Fetching the data a spinner component will be shown in the screen.

### App in mobile version

**Hero Slider**  

![image](https://user-images.githubusercontent.com/98757236/178884397-64b29c6a-d17c-4c8a-900e-ca4f2fae76bd.png)

**Responsive Menu**  

![image](https://user-images.githubusercontent.com/98757236/179025019-86f5bf2e-e0f2-476e-8f6f-17c414436d35.png)

**Movies grid**  

![image](https://user-images.githubusercontent.com/98757236/179022813-978cd439-ef6f-4426-9e5c-bc8d5cd1ea1e.png)

**Navigation**  

![image](https://user-images.githubusercontent.com/98757236/179023109-2e726c34-600c-48d9-80ea-257e73d6ad65.png)

**Footer**  

![image](https://user-images.githubusercontent.com/98757236/179024820-9e664f43-2906-4037-b679-1336f6767422.png)

**Genres view**  

![image](https://user-images.githubusercontent.com/98757236/179025283-545ae393-255b-4aff-bd4e-f2b3d3ab089c.png)

**Search view**  

![image](https://user-images.githubusercontent.com/98757236/179025583-d1347d43-858c-4ac1-8963-adfce2aa903c.png)

**Details view**  

![image](https://user-images.githubusercontent.com/98757236/179025715-273196e2-414f-456c-accb-b1e75a9076e7.png)  
![image](https://user-images.githubusercontent.com/98757236/179025831-91333428-1306-44ad-a2f8-c66390e11c34.png)  










