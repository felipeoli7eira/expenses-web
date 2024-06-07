import React from 'react'

export default interface DefaultTemplateProps {
  children: React.ReactElement
}

export interface NavigationProps {
  navigationIsOpen: boolean
}

export interface useAppNavigationHookProps {
  navigationIsOpen: boolean,
  handleNavigationState: () => void
}
