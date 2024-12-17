export const selectIsLoggedIn = state => state.users.isLoggedIn;
export const selectIsLoading = state => state.users.isLoading;
export const selectIsError = state => state.users.isError;
export const selectUserName = state => state.users.user?.name || 'User';