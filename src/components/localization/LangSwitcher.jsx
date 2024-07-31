import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setLangAsync } from '../../services/i18n/i18nSlice'
import styled from 'styled-components'

const SelectHolder = styled.div`
  height: 2rem;
  width: 10rem;
`
export function LangSwitcher() {
  // Inline selectors. We'll refactor this to a hook
  // later to make it clean and reusable.
  const lang = useSelector((state) => state.get('i18n').lang)
  const supportedLangs = useSelector(
    (state) => state.get('i18n').supportedLangs
  )
  const dispatch = useDispatch()
  return (
    <SelectHolder>
      <select
        defaultValue={lang}
        onChange={(e) => dispatch(setLangAsync(e.target.value))}
      >
        {Object.entries(supportedLangs).map(([code, name]) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </SelectHolder>
  )
}
