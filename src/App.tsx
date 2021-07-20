import React, { FC, useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import History from "./pages/History";
import "./App.css";

// openlayers
import GeoJSON from 'ol/format/GeoJSON'
// import Feature from 'ol/Feature';

const App: FC = () => {

  // set intial state
  const [ features, setFeatures ] = useState<any>([])

  // initialization - retrieve GeoJSON features from Mock JSON API get features from mock 
  //  GeoJson API (read from flat .json file in public directory)
  useEffect( () => {

    fetch('/mock-geojson-api.json')
      .then(response => response.json())
      .then( (fetchedFeatures) => {

        // parse fetched geojson into OpenLayers features
        //  use options to convert feature from EPSG:4326 to EPSG:3857
        const wktOptions = {
          dataProjection: 'EPSG:4326',
          featureProjection: 'EPSG:3857'
        }
        const parsedFeatures = new GeoJSON().readFeatures(fetchedFeatures, wktOptions)

        // set features into state (which will be passed into OpenLayers
        //  map component as props)
        setFeatures(parsedFeatures);

      })

  },[])
  
  return (
    <div>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" component={Home} features={features} exact />
          <Route path="/order" component={Order} />
          <Route path="/history" component={History} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

