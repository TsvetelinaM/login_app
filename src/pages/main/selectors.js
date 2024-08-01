import { createSelector } from 'reselect'

const errorMsg = (state) => state.getIn(['main', 'errorMsg'])
const successMsg = (state) => state.getIn(['main', 'successMsg'])

export const getErrorMsg = createSelector([errorMsg], (errorMsg) => errorMsg)
export const getSuccessMsg = createSelector(
  [successMsg],
  (successMsg) => successMsg
)
