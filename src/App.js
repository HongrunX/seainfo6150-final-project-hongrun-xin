import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home/Home.jsx";
import Chinese from "./Chinese/Chinese.jsx";
import Error from "./Error/Error.jsx";
import Comment from "./Comment/CommentApp.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import styles from "./Navigation.module.css";
import Thai from "./Thai/Thai.jsx";
import Pizza from "./Pizza/Pizza.jsx";
import Mexican from "./Mexican/Mexican.jsx";
import FastFood from "./FastFood/FastFood.jsx";
import Order from "./Order/Order.jsx";
// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const CommentContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
}
const AboutUsContent = {
  id: "article",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article",
}

function App() {
  return (
    <Router>
      <header>
        <div className={styles.flexContainer}>
          <div>
            <img className={styles.img1} src="/images/logo.jpg" alt="logo" />
          </div>
          <div><h1>Gourmet Reviews</h1></div>
          <nav>
            <ul>
              {/* these links should show you how to connect up a link to a specific route */}
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/bar/hats/sombrero">Bar</Link>
              </li>
              <li>
                <Link to="/baz">Baz</Link>
              </li> */}
              <li>
                <Link to="/Chinese">Chinese</Link>
              </li>
              <li>
                <Link to="/Thai">Thai</Link>
              </li>
              <li>
                <Link to="/Pizza">Pizza</Link>
              </li>
              <li>
                <Link to="/Mexican">Mexican</Link>
              </li>
              <li>
                <Link to="/FastFood">Fast Food</Link>
              </li>
              <li>
                <Link to="/Comment">Comment</Link>
              </li>
              <li>
                <Link to="/AboutUs">About Us</Link>
              </li>

            </ul>
          </nav>
        </div>
      </header>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Chinese" exact component={Chinese} />
        <Route path="/Thai" exact component={Thai} />
        <Route path="/Pizza" exact component={Pizza} />
        <Route path="/Mexican" exact component={Mexican} />
        <Route path="/FastFood" exact component={FastFood} />
        <Route path="/Chinese/Food" exact component={Order}/>
        {/* passing parameters via a route path */}
         <Route 
          path="/Comment" 
          exact 
          render={() => <Comment content={CommentContent}/>}
         />
         <Route
          path="/AboutUs"
          exact
          render={() => <AboutUs content={AboutUsContent}/>}
          />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
