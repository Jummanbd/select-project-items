import { apiSlice } from "../api/apiSlice";

export const projectsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => "/projects",
        providesTags: ["projects"],
           
        }),

    }),
  

 
});
export const {useGetProjectsQuery, useGetNameMatchQuery } = projectsApi;