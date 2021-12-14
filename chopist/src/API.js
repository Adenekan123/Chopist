import {
  SEARCH_BASE_URL,
  CATEGORIES_BASE_URL,
  CATEGORIES_SEARCH_URL,
  AREAS_BASE_URL,
  AREAS_SEARCH_URL,
  ALL_BASE_URL,
  ONE_BASE_URL,
  LEFTTERS_BASE_URL,
  // API_URL,
  // API_KEY,
  // REQUEST_TOKEN_URL,
  // LOGIN_URL,
  // SESSION_ID_URL
} from './config';

// const defaultConfig = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// };

const apiSettings = {
  fetchFoods: async (searchTerm) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}`
      : `${ALL_BASE_URL}`;
      console.log(endpoint);
    return await (await fetch(endpoint)).json();
  },
  fetchFoods_filter: async (filter) => {

        let endpoint = '';
        const filterType = Object.keys(filter).filter(key => filter[key] !== '' && filter[key] !== null)[0];

        console.log(filterType,'From API');

        
        if(filterType === 'area'){endpoint = `${AREAS_SEARCH_URL}${filter[filterType]}`}

        else if(filterType === 'category'){ endpoint = `${CATEGORIES_SEARCH_URL}${filter[filterType]}`}

        else  endpoint = `${LEFTTERS_BASE_URL}${filter[filterType]}`

        console.log(endpoint)
        return await (await fetch(endpoint)).json();
   
  },
  fetchFood: async foodId => {
    const endpoint = `${ONE_BASE_URL}${foodId}`;
    console.log(endpoint);
    return await (await fetch(endpoint)).json();
  },

  fetchCategories: async () => {
    const endpoint =
       `${CATEGORIES_BASE_URL}`
    return await (await fetch(endpoint)).json();
  },
  fetchAreas: async () => {
    const endpoint =
       `${AREAS_BASE_URL}`
    return await (await fetch(endpoint)).json();
  },
  // fetchCredits: async movieId => {
  //   const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
  //   return await (await fetch(creditsEndpoint)).json();
  // },
  // Bonus material below for login
  // getRequestToken: async () => {
  //   const reqToken = await (await fetch(REQUEST_TOKEN_URL)).json();
  //   return reqToken.request_token;
  // },
  // authenticate: async (requestToken, username, password) => {
  //   const bodyData = {
  //     username,
  //     password,
  //     request_token: requestToken
  //   };
  //   // First authenticate the requestToken
  //   const data = await (
  //     await fetch(LOGIN_URL, {
  //       ...defaultConfig,
  //       body: JSON.stringify(bodyData)
  //     })
  //   ).json();
  //   // Then get the sessionId with the requestToken
  //   if (data.success) {
  //     const sessionId = await (
  //       await fetch(SESSION_ID_URL, {
  //         ...defaultConfig,
  //         body: JSON.stringify({ request_token: requestToken })
  //       })
  //     ).json();
  //     return sessionId;
  //   }
  // },
  // rateMovie: async (sessionId, movieId, value) => {
  //   const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

  //   const rating = await (
  //     await fetch(endpoint, {
  //       ...defaultConfig,
  //       body: JSON.stringify({ value })
  //     })
  //   ).json();

  //   return rating;
  // }
};

export default apiSettings;
