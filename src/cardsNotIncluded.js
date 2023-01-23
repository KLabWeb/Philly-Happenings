<h1 id="music-diy-coll-nyc" className="category">Music: DIY Collectives, Show Listings, & Labels - NYC</h1> <h2 className="wip"> (work in progress)</h2>
{MUSICDIYCOLLECTIVESNYC.map(data => {
    return (
      <DetailCard key={data.title} data={data}/>
    );
})}
