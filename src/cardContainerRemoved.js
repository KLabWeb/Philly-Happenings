        <h1 id="anarchist-nyc" className="category">Anarchist, Rad, & Adjacent - NYC</h1> <h2 className="wip"> (work in progress)</h2>
        {NYCANARCHIST.map(data => {
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
