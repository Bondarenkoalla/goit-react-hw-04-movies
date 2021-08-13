import { lazy, Suspense } from "react";
import AppBar from "./Components/AppBar/AppBar";
import { Switch, Route } from "react-router";
import "./App.css";


const HomePage = lazy(() => import("./views/HomePage" /*webpackChunkName: "HomePage"*/));
const MoviesPage = lazy(() => import("./views/MoviesPage" /*webpackChunkName: "MoviesPage"*/));
const InfoMovie = lazy(() => import("./views/InfoMovie" /*webpackChunkName: "InfoMovie"*/));
const NotFoundView = lazy(() => import("./views/NotFoundView.js" /*webpackChunkName: "NotFoundView"*/));
// import HomePage from "./views/HomePage";
// import MoviesPage from "./views/MoviesPage";
// import NotFoundView from "./views/NotFoundView";
// import InfoMovie from "./views/InfoMovie";
function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<p>loading..</p>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <InfoMovie />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
