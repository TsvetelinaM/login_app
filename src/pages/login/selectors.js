import { createSelector } from 'reselect'

const isAuthenticated = (state) => state.getIn(['login', 'isAuthenticated'])
const authUserInfo = (state) => state.getIn(['login', 'authUserInfo'])

export const getIsAuthenticated = createSelector(
  [isAuthenticated],
  (isAuthenticated) => isAuthenticated
)

export const getAuthUserInfo = createSelector(
  [authUserInfo],
  (authUserInfo) => authUserInfo
)
