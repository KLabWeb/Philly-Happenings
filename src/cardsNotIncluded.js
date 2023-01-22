<h1 id="music-artists" className="category">Music: Regional Musicians and Artists</h1> <h2 className="wip"> (work in progress)</h2>
{MUSICARTISTS.map(data => {
    return (
      <DetailCard key={data.title} data={data}/>
    );
})}
