import React from "react";
import "./App.css";
import { About } from "./about";
import { Notices } from "./notices";

export const Header = props => {
  return (
    <div key={props.key} className="header">
      <h1 className="pageTitle">Philly Happenings</h1>

      <About />

      <h1 className="category">Site Index</h1>
      <div className="headerIndex">
        <a href="#events-by-month">Annual Events by Month</a>
        <a href="#events-by-week">Monthly Events by Week</a>
        <a href="#events-by-day">Weekly Events by Day</a>
        <br/>
        <a href="#anarchist-philly">Anarchist, Rad, & Adjacent - Philly</a>
        <a href="#anarchist-nyc">Anarchist, Rad, & Adjacent - NYC</a>
        <br/>
        <a href="#anime-philly">Anime - Philly</a>
        <a href="#anime-nyc">Anime - NYC</a>
        <a href="#anime-dc">Anime - DC</a>
        <br/>
        <a href="#cycling">Cycling</a>
        <br/>
        <a href="#film-festivals">Film: Festivals</a>
        <a href="#film-groups">Film: Groups</a>
        <a href="#film-horror">Film: Horror</a>
        <a href="#film-indie">Film: Indie & Arthouse Theaters</a>
        <br/>
        <a href="#general">General</a>
        <br/>
        <a href="#green-gardens">Green: Community & Guerrilla Gardens</a>
        <a href="#green-markets">Green: Farmers’ Markets & Produce Shops</a>
        <a href="#green-fishing">Green: Fishing</a>
        <a href="#green-foraging-general">Green: Foraging, General</a>
        <a href="#foraging-seasonal">Green: Foraging, Seasonal</a>
        <a href="#green-general">Green: General</a>
        <a href="#green-hiking-parks">Green: Hiking & Parks</a>
        <br/>
        <a href="#literature">Literature</a>
        <br/>
        <a href="#music-above-philly">Music: Above Ground Venues - Philly</a>
        <a href="#music-above-pitts">Music: Above Ground Venues - Pittsburgh</a>
        <a href="#music-above-nj">Music: Above Ground Venues - NJ</a>
        <br/>
        <a href="#music-bluegrass">Music: Bluegrass</a>
        <a href="#music-classical">Music: Classical</a>
        <br/>
        <a href="#music-diy-coll-phl">Music: DIY Collectives, Show Listings, & Labels - Philly</a>
        <a href="#music-diy-coll-sc">Music: DIY Collectives, Show Listings, & Labels - State College</a>
        <a href="#music-diy-coll-pitts">Music: DIY Collectives, Show Listings, & Labels - Pittsburgh</a>
        <br/>
        <a href="#music-diy-gen-phl">Music: DIY General - Philly</a>
        <a href="#music-diy-gen-nj">Music: DIY General - NJ</a>
        <a href="#music-diy-gen-nyc">Music: DIY General - NYC</a>
        <br/>
        <a href="#music-diy-spots-phl">Music: DIY Spots - Philly</a>
        <a href="#music-diy-spots-sc">Music: DIY Spots - State College</a>
        <a href="#music-diy-spots-pitts">Music: DIY Spots - Pittsburgh</a>
        <a href="#music-diy-spots-nj">Music: DIY Spots - NJ</a>
        <br/>
        <a href="#music-electro-indust">Music: Electronic & Industrial</a>
        <a href="#music-hiphop-phl">Music: Hip Hop, Popping, Breakdancing</a>
        <a href="#music-metal">Music: Metal</a>
        <a href="#music-regional">Music: Regional Bands and Musicians</a>
        <br/>
        <a href="#photography">Photography</a>
        <br/>
        <a href="#theater">Theater</a>
        <br/>
        <a href="#music-diy-wip">Music: DIY Work in Progress</a>
      </div>

      <Notices />
    </div>
  )
};

export default Header;
