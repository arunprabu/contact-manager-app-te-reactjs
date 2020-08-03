import React, { Component } from 'react';

class TrendingShows extends Component {

  state = {
    showsList: [
      { id: 1, name: 'The Planet Earth', host: 'David Attenborough', isInWatchList: false},
      { id: 2, name: 'Cricket World Cup 2020', host: 'Ganguly', isInWatchList: false},
      { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false},
      { id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', isInWatchList: false}
    ]
  };


  addToWatchlistHandler = () => {
    // Todo: Make add to watchlist functionality 
    console.log(this);
    this.setState( {
      showsList: [
        { id: 1, name: 'The Planet Earth', host: 'David Attenborough', isInWatchList: true},
        { id: 2, name: 'Cricket World Cup 2020', host: 'Ganguly', isInWatchList: false},
        { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false},
        { id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', isInWatchList: false}
      ]
    });
  }

  render() {

    /* loop thru here */
    let showsLi = null; 

    if(this.state.showsList && this.state.showsList.length > 0 ) {
      showsLi = this.state.showsList.map( ( show, index) => {
        console.log(show);
        return (
          <li className='list-group-item' key={index}>
            #{show.id} {show.name} 
            - hosted by {show.host}
            <button type="button" 
              className="btn btn-primary btn-sm float-right" onClick={this.addToWatchlistHandler}>
                { show.isInWatchList? 'In Watchlist' : 'Add to Watchlist' }
            </button>
          </li>
        )
      })
    }
    

    return (
      <div className='text-left'>
        <ul className="list-group">
          {
            this.state.showsList && this.state.showsList.length > 0 ? 
            showsLi
            :
            <div>Shows List is empty</div>
          }
          

        </ul>
      </div>
    )
  }
}

export default TrendingShows;
