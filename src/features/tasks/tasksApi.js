import { apiSlice } from "../api/apiSlice";

export const tasksApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

     getTasks:builder.query({
        query: () => "/tasks",
        providesTags: ["Tasks"],
     }),

    getTasksId:builder.query({
      query: (id) => `/tasks/${id}`,
      providesTags: ["Tasks"],
     }),

    addNewTask:builder.mutation({
        query:(data) => ({
            url: "/tasks",
            method: "POST",
            body: data,
        }),
        invalidatesTags: ["Tasks"],
       //optimistic 

        async onQueryStarted (arg, {queryFulfilled, dispatch}) {
          const pathResult = dispatch(
            apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
              draft.unshift({ id: crypto.randomUUID(), ...arg });
             
            //  draft.push({...arg})
               
            })
        )
        try {
         await queryFulfilled;
 
          } catch {
            pathResult.undo();
          }
            
        }
    }),

    fullItemUpdate:builder.mutation({
      query: ({ id,...data}) => ({
          url: `/tasks/${id}`,
          method: "PATCH",
          body: data,
      }),

      invalidatesTags: ["Tasks"],
      async onQueryStarted({id, ...data}, { queryFulfilled, dispatch }) {
          //optimistic cache update start   
   
          
       const pathResult = dispatch(
          
              apiSlice.util.updateQueryData("getTasksId", undefined, (draft) => {
                
                  const taskIndex = draft.findIndex((el) => el.id === id);
                  draft[taskIndex] = { ...draft[taskIndex], ...data };

                 
              })
        )
           
          try {
              await queryFulfilled;
            } catch {
              pathResult.undo();
            }

          
          
          //optimistic cache update end

      },
    }),

    statusUpdate:builder.mutation({
        query: ({ id,...data}) => ({
            url: `/tasks/${id}`,
            method: "PATCH",
            body: data,
        }),

        invalidatesTags: ["Tasks"],
        async onQueryStarted({id, ...data}, { queryFulfilled, dispatch }) {
            //optimistic cache update start   
            // var itemArg = arg;
            
         const pathResult = dispatch(
            
                apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
                  
                        // const draftItem =  draft.find(c => c.id === itemArg.id);
                        // draftItem.status = arg.status;
                        
                    
                    const taskIndex = draft.findIndex((el) => el.id === id);
                    draft[taskIndex] = { ...draft[taskIndex], ...data };
                     //draftConversation.status = arg.status;
                   
                })
          )
             
            try {
                await queryFulfilled;
              } catch {
                pathResult.undo();
              }

            
            
            //optimistic cache update end

        },
    }),

    itemDelete:builder.mutation({
      query: ({ id,...data}) => ({
          url: `/tasks/${id}`,
          method: "DELETE",
          
      }),
      invalidatesTags: ["Tasks"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
          //optimistic cache update start
   
       const pathResult = dispatch(
        apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            
          
          
            //const draftConversation =  draft.find(c => c);
            
            const taskIndex = draft.find((el) => el.id === arg.id);
            draft.splice(taskIndex, 1);
                    
                          
                          
              //draftConversation.status = arg.status;
            
        })
          )
          try {
              await queryFulfilled;
            } catch {
              pathResult.undo();
            }

          //optimistic cache update end

      },
    }),

    }),
});

export const {useGetTasksQuery, useGetTasksIdQuery, useAddNewTaskMutation, useStatusUpdateMutation, useItemDeleteMutation,useFullItemUpdateMutation } = tasksApi;