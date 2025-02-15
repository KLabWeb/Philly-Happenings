import React from "react";
import "./App.css";
import { About } from "./about";
import { Updates } from "./updatesContainer";
// import { Notices } from "./notices";

export const Header = props => {
  return (
    <div className="header">
      <h1 className="pageTitle">Philly Happenings</h1>

      <About />

      <Updates />

      <h1 className="category">Site Index</h1>
      <div className="headerIndex">
        <a href="#events-by-month">Annual Events by Month</a>
        <a href="#events-by-week">Monthly Events by Week</a>
        <a href="#events-by-day">Weekly Events by Day</a>
        <br/>
        <a href="#anarchist-philly">Anarchist, Rad, & Adjacent</a>
        <br/>
        <a href="#anime-philly">Anime</a>
        <br/>
        <a href="#cycling">Cycling</a>
        <br/>
        <a href="#film-festivals">Film: Festivals</a>
        <a href="#film-groups">Film: Groups & Newsletters</a>
        <a href="#film-horror">Film: Horror</a>
        <a href="#film-indie">Film: Indie & Arthouse Theaters</a>
        <br/>
        <a href="#general">General</a>
        <br/>
        <a href="#green-gardens">Green: Community & Guerrilla Gardens</a>
        <a href="#green-markets">Green: Farmers’ Markets & Produce Shops</a>
        <a href="#green-foraging-general">Green: Foraging, General</a>
        <a href="#foraging-seasonal">Green: Foraging, Seasonal</a>
        <a href="#green-general">Green: General</a>
        <a href="#green-hiking-parks">Green: Hiking & Parks</a>
        <br/>
        <a href="#mid-page">Intermission: Middle of the Page Dopamine</a>
        <br/>
        <a href="#literature">Literature</a>
        <br/>
        <a href="#music-above-philly">Music: Above Ground Venues</a>
        <a href="#music-bluegrass">Music: Bluegrass</a>
        <a href="#music-classical">Music: Classical</a>
        <br/>
        <a href="#music-diy-coll-phl">Music: DIY Collectives, Show Aggregators, Promoters, & Labels</a>
        <a href="#music-diy-gen-phl">Music: DIY General</a>
        <a href="#music-diy-spots-phl">Music: DIY Spots</a>
        <br/>
        <a href="#music-electro-indust">Music: Electronic & Industrial</a>
        <a href="#music-hiphop-phl">Music: Hip Hop, Popping, Breaking</a>
        <a href="#music-jazz-blues">Music: Jazz & Blues</a>
        <a href="#music-metal">Music: Metal</a>
        <a href="#music-regional">Music: Regional Bands and Musicians</a>
        <br/>
        <a href="#photography">Photography</a>
        <br/>
        <a href="#theater">Theater</a>
        <br/>
        <a href="#closed-spaces-groups-events">Closed Spaces, Ended Groups, & Retired Events</a>
      </div>
    </div>
  )
};

export default Header;
