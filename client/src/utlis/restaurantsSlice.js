import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurants: [],
  filteredRestaurants: [],
  filterCriteria: {
    cuisine: '',
    rating: ''
  },
};

const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    setRestaurants: (state, action) => {
      state.restaurants = action.payload;
      state.filteredRestaurants = applyFilters(action.payload, state.filterCriteria);
    },
    setFilterRestaurants: (state, action) => {
     
      state.filteredRestaurants = applyFilters(action.payload, state.filterCriteria);
    },
    setFilterCriteria: (state, action) => {
      state.filterCriteria = { ...state.filterCriteria, ...action.payload };
      state.filteredRestaurants = applyFilters(state.restaurants, state.filterCriteria);
    },
  },
});

const applyFilters = (restaurants, criteria) => {
  const { cuisine, rating } = criteria;
  return restaurants.filter((resData) => {
    const resCuisine = resData.info.cuisines || []; 
    const resRating = resData.info.avgRating || 0; 

    const matchesCuisine = !cuisine || resCuisine.some(c=>c.toLowerCase().includes(cuisine.toLowerCase()));
    const matchesRating = !rating || resRating >= rating;

    return  matchesCuisine && matchesRating;
  });
};


export const { setRestaurants, setFilterCriteria ,setFilterRestaurants } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
