import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './routes/App';

const initialState = {
  'user': {},
  'playing': {},
  'myList': [
  ],
  'trends': [
    {
      'id': 2,
      'slug': 'tvshow-2',
      'title': 'The Outsider',
      'subtitle': 'May 22, 2018',
      'type': 'Scripted',
      'language': 'English',
      'year': 2018,
      'contentRating': '16+',
      'duration': 164,
      'cover': 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/The_Outsider_by_Stephen_King.jpg/220px-The_Outsider_by_Stephen_King.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 3,
      'slug': 'tvshow-3',
      'title': 'Carrie',
      'subtitle': 'April 5, 1974',
      'type': 'Adventure',
      'language': 'English',
      'year': 2002,
      'contentRating': '16+',
      'duration': 137,
      'cover': 'https://upload.wikimedia.org/wikipedia/en/3/31/Carrienovel.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 4,
      'slug': 'tvshow-4',
      'title': 'The Shining',
      'subtitle': 'January 28, 1977',
      'type': 'Comedy',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 163,
      'cover': 'https://upload.wikimedia.org/wikipedia/en/4/4c/Shiningnovel.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 5,
      'slug': 'tvshow-5',
      'title': 'Pet Sematary',
      'subtitle': 'November 14, 1983',
      'type': 'Scripted',
      'language': 'English',
      'year': 2014,
      'contentRating': '16+',
      'duration': 194,
      'cover': 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/StephenKingPetSematary.jpg/220px-StephenKingPetSematary.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 6,
      'slug': 'tvshow-6',
      'title': 'The Dark Tower: The Gunslinger',
      'subtitle': 'June 10, 1982',
      'type': 'Scripted',
      'language': 'English',
      'year': 2017,
      'contentRating': '16+',
      'duration': 124,
      'cover': 'https://upload.wikimedia.org/wikipedia/en/d/db/The_Gunslinger.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 7,
      'slug': 'tvshow-7',
      'title': 'It',
      'subtitle': 'September 15, 1986',
      'type': 'Drama',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 179,
      'cover': 'https://upload.wikimedia.org/wikipedia/en/5/5a/It_cover.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
        'id': 8,
        'title': 'Under the Dome',
        'subtitle': 'November 10, 2009',
        'cover': 'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Under_the_Dome_Final.jpg/220px-Under_the_Dome_Final.jpg',
        'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4'
    },
    {
        'id': 9,
        'title': 'Revival',
        'subtitle': 'November 11, 2014',
        'cover': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Revival.jpg/220px-Revival.jpg'
    }
  ],
  'originals': [
    {
      'id': 8,
      'slug': 'tvshow-8',
      'title': 'Carrie',
      'subtitle' : 'November 3rd, 1976',
      'type': 'Action',
      'language': 'English',
      'year': 2012,
      'contentRating': '16+',
      'duration': 148,
      'cover': 'https://www.stephenking.com/images/movies/theatrical_movie/carrie/us_prop_embed.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 9,
      'slug': 'tvshow-9',
      'title': 'The Shining',
      'subtitle': 'May 23rd, 1980',
      'type': 'Action',
      'language': 'English',
      'year': 2019,
      'contentRating': '16+',
      'duration': 128,
      'cover': 'https://www.stephenking.com/images/movies/theatrical_movie/the_shining/us_prop_embed.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 10,
      'slug': 'tvshow-10',
      'title': 'Stand By Me',
      'subtitle': 'August 8th, 1986',
      'type': 'Animation',
      'language': 'English',
      'year': 2011,
      'contentRating': '16+',
      'duration': 346,
      'cover': 'https://www.stephenking.com/images/movies/theatrical_movie/stand_by_me/us_prop_embed.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 11,
      'slug': 'tvshow-11',
      'title': 'Pet Sematary',
      'subtitle': 'April 21st, 1989',
      'type': 'War',
      'language': 'English',
      'year': 2015,
      'contentRating': '16+',
      'duration': 226,
      'cover': 'https://www.stephenking.com/images/movies/theatrical_movie/pet_sematary/us_prop_embed.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 12,
      'slug': 'tvshow-12',
      'title': 'Misery',
      'subtitle': 'November 30th, 1990',
      'type': 'Comedy',
      'language': 'English',
      'year': 2018,
      'contentRating': '16+',
      'duration': 190,
      'cover': 'https://www.stephenking.com/images/movies/theatrical_movie/misery/us_prop_embed.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 13,
      'slug': 'tvshow-13',
      'title': 'The Shawshank Redemption',
      'subtitle': 'September 23rd, 1994',
      'type': 'Drama',
      'language': 'English',
      'year': 2010,
      'contentRating': '16+',
      'duration': 160,
      'cover': 'https://www.stephenking.com/images/movies/theatrical_movie/the_shawshank_redemption/us_prop_embed.jpg',
      'description': 'Vestibulum ac est lacinia nisi venenatis tristique',
      'source': 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
    {
      'id': 14,
      'title': 'The Green Mile',
      'subtitle': 'December 6th, 1999',
      'cover': 'https://www.stephenking.com/images/movie/26/us2.jpg'
    },
    {
      'id': 15,
      'title': 'IT - Part 1: The Losers Club',
      'subtitle': 'September 8th, 2017',
      'cover': 'https://www.stephenking.com/images/movie/41/itposter01.jpg'
    }
  ],
  'series': [
      {
          'id': 16,
          'title': 'Salems Lot',
          'subtitle': 'June 2nd, 2004',
          'cover': 'https://www.stephenking.com/images/television/7/salems_lot_2004.jpg'
      },
      {
          'id': 17,
          'title': 'IT',
          'subtitle': 'November 18th, 1990',
          'cover': 'https://www.stephenking.com/images/movies/tv_mini-series/it/us_prop_embed.jpg'
      },
      {
          'id': 18,
          'title': 'The Shining',
          'subtitle': 'April 27th, 1997',
          'cover': 'https://www.stephenking.com/images/movies/tv_mini-series/the_shining97/us_prop_embed.jpg'
      },
      {
          'id': 19,
          'title': 'The Stand',
          'subtitle': 'May 8th, 1994',
          'cover': 'https://www.stephenking.com/images/television/15/the_stand_miniseries.jpg'
      },
      {
          'id': 20,
          'title': 'Trucks',
          'subtitle': 'December 26th, 2000',
          'cover': 'https://www.stephenking.com/images/movies/tv_movie/trucks/us_prop_embed.jpg'
      },
      {
          'id': 21,
          'title': 'Under the Dome',
          'subtitle': 'June 24th, 2013',
          'cover': 'https://www.stephenking.com/images/television/utd/utd_property_embed.jpg'
      },
      {
          'id': 22,
          'title': 'Big Driver',
          'subtitle': 'October 18th, 2014',
          'cover': 'https://www.stephenking.com/images/television/20/lifetimebigdriverposter.jpg'
      }
  ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
