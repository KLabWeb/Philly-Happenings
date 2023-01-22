import React from "react";
import "./App.css";
import { DetailCard } from "./detailCard";
import { ForagingByDateCard } from "./foragingByDateCard"
import { ANARCHISTPHILLY, NYCANARCHIST, ANIMEPHILLY, ANIMENYC, ANIMEDC, CYCLING,
  FILMFESTIVALS, FILMGROUPS, FILMHORROR, FILMINDIE, GENERAL, GREENGARDENS,
  GREENMARKETS, GREENFISHING, GREENFORAGINGGENERAL, GREENGENERAL, GREENHIKINGPARKS,
  LITERATURE, MUSICABOVEPHILLY, MUSICABOVEPITTS, MUSICABOVENJ, MUSICBLUEGRASS,
  MUSICCLASSICAL, MUSICDIYCOLLECTIVESPHL, MUSICDIYCOLLECTIVESSC,MUSICDIYCOLLECTIVESPITTS,
  MUSICDIYCOLLECTIVESNYC, MUSICDIYGENPHL, MUSICDIYGENNJ, MUSICDIYGENNYC, MUSICDIYSPOTSPHL,
  MUSICDIYSPOTSSC, MUSICDIYSPOTSPITTS, MUSICDIYSPOTSNJ, MUSICELECTROINDUST,
  MUSICHIPHOPPHL, MUSICMETAL, PHOTOGRAPHY, THEATER, MUSICDIYWIP} from "./data";
import { FRUITBERRY, MUSHROOM, MUSHROOMPSY, GREENS } from "./foragingData"

export const Cards = () => {
  return (
      <div>
        <h1 id="anarchist-philly" className="category">Anarchist, Rad, & Adjacent - Philly</h1> <h2 className="wip"> (work in progress)</h2>
        {ANARCHISTPHILLY.map(data => {
            return (
              <DetailCard key={data.title} data={data}/>
            );
          })}

        <h1 id="anarchist-nyc" className="category">Anarchist, Rad, & Adjacent - NYC</h1> <h2 className="wip"> (work in progress)</h2>
        {NYCANARCHIST.map(data => {
              return (
                <DetailCard key={data.title} data={data}/>
              );
        })}

        <h1 id="anime-philly" className="category">Anime - Philly</h1>
        {ANIMEPHILLY.map(data => {
            return (
              <DetailCard key={data.title} data={data}/>
            );
        })}

        <h1 id="anime-nyc" className="category">Anime - NYC</h1>
        {ANIMENYC.map(data => {
            return (
                <DetailCard key={data.title} data={data}/>
              );
        })}

        <h1 id="anime-dc" className="category">Anime - DC</h1>
        {ANIMEDC.map(data => {
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

    <h1 id="film-groups" className="category">Film: Groups</h1>
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

    <h1 id="green-fishing" className="category">Green: Fishing</h1> <h2 className="wip"> (work in progress)</h2>
    {GREENFISHING.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}
    <br/>

    <h1 id="green-foraging-general" className="category">Green: Foraging, General</h1> <h2 className="wip"> (work in progress)</h2>
    {GREENFORAGINGGENERAL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="foraging-fruit-berry" className="category">Green: Foraging, Fruit and Berry</h1>
    <ForagingByDateCard key={Math.random()} data={FRUITBERRY} />

    <h1 id="foraging-mushroom" className="category">Green: Foraging, Mushroom</h1>
    <ForagingByDateCard key={Math.random()} data={MUSHROOM} />

    <h1 id="foraging-mushroom-psy" className="category">Green: Foraging, Mushroom, Psychedelic</h1>
    <ForagingByDateCard key={Math.random()} data={MUSHROOMPSY} />

    <h1 id="foraging-greens" className="category">Green: Foraging, Greens</h1> <h2 className="wip"> (work in progress)</h2>
    <ForagingByDateCard key={Math.random()} data={GREENS} />

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

    <h1 id="literature" className="category">Literature</h1>
    {LITERATURE.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-above-philly" className="category">Music: Above Ground Venues - Philly</h1>
    {MUSICABOVEPHILLY.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-above-pitts" className="category">Music: Above Ground Venues - Pittsburgh</h1> <h2 className="wip"> (work in progress)</h2>
    {MUSICABOVEPITTS.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-above-nj" className="category">Music: Above Ground Venues - NJ</h1> <h2 className="wip"> (work in progress)</h2>
    {MUSICABOVENJ.map(data => {
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
    {MUSICCLASSICAL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-coll-phl" className="category">Music: DIY Collectives, Show Listings, & Labels - Philly</h1>
    {MUSICDIYCOLLECTIVESPHL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-coll-sc" className="category">Music: DIY Collectives, Show Listings, & Labels - State College</h1> <h2 className="wip"> (work in progress)</h2>
    {MUSICDIYCOLLECTIVESSC.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-coll-pitts" className="category">Music: DIY Collectives, Show Listings, & Labels - Pittsburgh</h1> <h2 className="wip"> (work in progress)</h2>
    {MUSICDIYCOLLECTIVESPITTS.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-coll-nyc" className="category">Music: DIY Collectives, Show Listings, & Labels - NYC</h1> <h2 className="wip"> (work in progress)</h2>
    {MUSICDIYCOLLECTIVESNYC.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-gen-phl" className="category">Music: DIY General - Philly</h1>
    {MUSICDIYGENPHL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-gen-nj" className="category">Music: DIY General - NJ</h1> <h2 className="wip"> (work in progress)</h2>
    {MUSICDIYGENNJ.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-gen-nyc" className="category">Music: DIY General - NYC</h1> <h2 className="wip"> (work in progress)</h2>
    {MUSICDIYGENNYC.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-spots-phl" className="category">Music: DIY Spots - Philly</h1>
    {MUSICDIYSPOTSPHL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-spots-sc" className="category">Music: DIY Spots - State College</h1>
    {MUSICDIYSPOTSSC.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-spots-pitts" className="category">Music: DIY Spots - Pittsburgh</h1>
    {MUSICDIYSPOTSPITTS.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-diy-spots-nj" className="category">Music: DIY Spots - NJ</h1>
    {MUSICDIYSPOTSNJ.map(data => {
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

    <h1 id="music-hiphop-phl" className="category">Music: Hip Hop, Popping, Breakdancing</h1> <h2 className="wip"> (work in progress)</h2>
    {MUSICHIPHOPPHL.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

    <h1 id="music-metal" className="category">Music: Metal</h1>
    {MUSICMETAL.map(data => {
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

    <h1 id="music-diy-wip" className="category">Music: DIY Work in Progress</h1>
    {MUSICDIYWIP.map(data => {
        return (
          <DetailCard key={data.title} data={data}/>
        );
    })}

  </div>
  );
};
