import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type ApiResponse = {
  data: UserData[];
  page: number;
  per_page: number;

  total: number;
  total_pages: number;
};


interface CreateUserInput {
  name: string;
  job: string;
}

interface UpdateUserInput {
  id: number;
  name: string;
  job: string;
}
type UserData = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://reqres.in/api/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<ApiResponse, number>({
      query: (page) => `users?page=${page}`,
    }),
    createUser: builder.mutation<UserData, CreateUserInput>({
      query: (newUserData) => ({
        url: 'users',
        method: 'POST',
        body: newUserData,
      }),
    }),
    updateUser: builder.mutation<UserData, UpdateUserInput>({
      query: ({ id, ...userData }) => ({
        url: `users/${id}`,
        method: 'PUT',
        body: userData,
      }),
    }),
    deleteUser: builder.mutation<void, number>({
      query: (userId) => ({
        url: `users/${userId}`,
        method: 'DELETE',
      }),
    }),

  }),
})
export const { useGetUsersQuery, useCreateUserMutation,useUpdateUserMutation, useDeleteUserMutation } = usersApi;