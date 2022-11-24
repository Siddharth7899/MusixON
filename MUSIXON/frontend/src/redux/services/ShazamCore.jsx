import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers)=> {
        headers.set("X-RapidAPI-Key","d2fe4e92d8msh97c601ca2a38f6bp1549d0jsn980de1238165")

        return headers;
    }
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({query: ()=> `/charts/world`}),
      getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
      getSongsByCountry: builder.query({ query: (countryCode)=> `/charts/country?country_code=${countryCode}`}),
      getSongsBySearch : builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`})
    }),
}); 

export const {
    useGetTopChartsQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsBySearchQuery
} = shazamCoreApi;
