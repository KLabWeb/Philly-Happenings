import React from "react";
import "./App.css";
import { DetailCard } from "./detailCard";
import { ForagingByDateCards } from "./foragingCardContainer"
import { ANARCHISTPHILLY, ANIMEPHILLY, CYCLING, FILMFESTIVALS, FILMGROUPS,
  FILMHORROR, FILMINDIE, GENERAL, GREENGARDENS, GREENMARKETS,
  GREENFORAGINGGENERAL, GREENGENERAL, GREENHIKINGPARKS, LITERATURE,
  MUSICABOVEPHILLY, MUSICBLUEGRASS, MUSICDIYCOLLECTIVESPHL,
  MUSICDIYGENPHL, MUSICDIYSPOTSPHL, MUSICELECTROINDUST, MUSICHIPHOP,
  MUSICMETAL, MUSICREGIONAL, PHOTOGRAPHY, THEATER, CLOSED} from "./data";
import { VideoPlayer } from "./video";

export const Cards = () => {
  return (
      <div>
        <h1 id="anarchist-philly" className="category">Anarchist, Rad, & Adjacent</h1>
        {ANARCHISTPHILLY.map(data => {
            return (
              <DetailCard key={data.title} data={data}/>
            );
          })}

        <h1 id="anime-philly" className="category">Anime</h1>
        {ANIMEPHILLY.map(data => {
            return (
              <DetailCard key={data.title} data={data}/>
            );
        })}

        <h1 id="cycling" className="category">Cycling</h1>
        {CYCLING.map(data => {
            return (
              <DetailCard key={data.title} data={data}/>
            );
        })}

      <h1 id="film-festivals" className="category">Film: Festivals</h1>
      {FILMFESTIVALS.map(data => {
          return (
            <DetailCard key={data.title} data={data}/>
          );
      })}

    <h1 id="film-groups" className="category">Film: Groups & Newsletters</h1>
    {FILMGROUPS.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="film-horror" className="category">Film: Horror</h1>
    {FILMHORROR.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="film-indie" className="category">Film: Indie & Arthouse Theaters</h1>
    {FILMINDIE.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="general" className="category">General</h1>
    {GENERAL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="green-gardens" className="category">Green: Community & Guerrilla Gardens</h1>
    {GREENGARDENS.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="green-markets" className="category">Green: Farmers’ Markets & Produce Shops</h1>
    {GREENMARKETS.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="green-foraging-general" className="category">Green: Foraging, General</h1>
    {GREENFORAGINGGENERAL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="foraging-seasonal" className="category">Green: Foraging, Seasonal</h1> <h2 className="wip"> (work in progress)</h2>
    < ForagingByDateCards />

    <h1 id="green-general" className="category">Green: General</h1>
    {GREENGENERAL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}


    <h1 id="green-hiking-parks" className="category">Green: Hiking & Parks</h1>
    {GREENHIKINGPARKS.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <VideoPlayer />

    <h1 id="literature" className="category">Literature</h1>
    {LITERATURE.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-above-philly" className="category">Music: Above Ground Venues</h1>
    {MUSICABOVEPHILLY.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-bluegrass" className="category">Music: Bluegrass</h1> <h2 className="wip"> (work in progress)</h2>
    {MUSICBLUEGRASS.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-classical" className="category">Music: Classical</h1> <h2 className="wip"> (work in progress)</h2>
    <div className="card" style={{height: "100px"}}></div>

    <h1 id="music-diy-coll-phl" className="category">Music: DIY Collectives, Listings, Booking, & Labels</h1>
    {MUSICDIYCOLLECTIVESPHL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-gen-phl" className="category">Music: DIY General</h1>
    {MUSICDIYGENPHL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-spots-phl" className="category">Music: DIY Spots</h1>
    {MUSICDIYSPOTSPHL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-electro-indust" className="category">Music: Electronic & Industrial</h1> <h2 className="wip"> (work in progress)</h2>
    {MUSICELECTROINDUST.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-hiphop-phl" className="category">Music: Hip Hop, Popping, Breaking</h1> <h2 className="wip"> (work in progress)</h2>
    {MUSICHIPHOP.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-jazz-blues" className="category">Music: Jazz & Blues</h1> <h2 className="wip"> (work in progress)</h2>
      <div className="card" style={{height: "100px"}}></div>
    })}

    <h1 id="music-metal" className="category">Music: Metal</h1>
    {MUSICMETAL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-regional" className="category">Music: Regional Bands and Musicians</h1>
    {MUSICREGIONAL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="photography" className="category">Photography</h1>
    {PHOTOGRAPHY.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="theater" className="category">Theater</h1> <h2 className="wip"> (work in progress)</h2>
    {THEATER.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}


    <h1 id="closed-spaces-groups-events" className="category">Closed Spaces & Groups + Retired Events</h1>
    {CLOSED.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <br/><br/><br/><br/>
  </div>
  );
};
