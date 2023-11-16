import React from "react";
import trackList from '../TrackList/trackList'

function searchResults() {
    return (
        <div className="SearchResults">
      <h2>Results</h2>
      <trackList />
    </div>
    )
}

export default searchResults;