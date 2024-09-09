import { apiSlice } from '../../app/api/apiSlice';

export const favoritesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addFavorite: builder.mutation({
      query: (productId) => ({
        url: '/users/favorites',
        method: 'POST',
        body: { productId },
      }),
      invalidatesTags: ['Favorites'],
    }),
    removeFavorite: builder.mutation({
      query: (productId) => ({
        url: `/users/favorites/${productId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Favorites'],
    }),
    getFavorites: builder.query({
      query: () => '/users/favorites',
      providesTags: ['Favorites'],
    }),
  }),
});

export const {
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
  useGetFavoritesQuery,
} = favoritesApiSlice;