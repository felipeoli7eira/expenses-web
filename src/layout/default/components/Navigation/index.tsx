import React from 'react'

import usePrefersColorSchema from '../../../../hooks/usePrefersColorSchema'

import { RiHome2Line, RiUser4Line } from 'react-icons/ri'
import clsx from 'clsx'

import { PiChartBarHorizontalDuotone, PiNotepadDuotone } from 'react-icons/pi'

import { Aside, LogOutButton } from './../../design'
import { NavLink } from 'react-router-dom'

import { Tooltip } from 'primereact/tooltip'
import { NavigationProps } from '../../../../interfaces/DefaultTemplateProps'

import { appRoutesMap } from '../../../../routes/routes'

export default function Navigation({ navigationIsOpen }: NavigationProps): JSX.Element {
  const { prefColorSchema } = usePrefersColorSchema()

  const menuIconSize = 25
  const menuItemClassDesign = 'flex p-2 border-round-md hover:bg-black-alpha-20 '

  return (
    <Aside
      className={clsx(
        'h-full p-3 absolute flex flex-column justify-content-between align-items-center',
        prefColorSchema === 'light' ? 'bg-white-alpha-90' : 'bg-black-alpha-10',
      )}
      navigationIsOpen={navigationIsOpen}
    >
      <header className='w-full'>
        <nav className='w-full flex flex-column align-items-center gap-2'>
          <NavLink
            to={''}
            data-pr-tooltip='Controle'
            className={menuItemClassDesign.concat('home-navlink')}
          >
            <RiHome2Line size={menuIconSize} />
            <Tooltip target='.home-navlink' mouseTrackLeft={10} event='hover' />
          </NavLink>

          <NavLink
            to={''}
            data-pr-tooltip='Classificações'
            className={menuItemClassDesign.concat('levels-navlink')}
          >
            <PiChartBarHorizontalDuotone size={menuIconSize} />
            <Tooltip target='.levels-navlink' mouseTrackLeft={10} event='hover' />
          </NavLink>

          <NavLink
            to={appRoutesMap.expenseRead.path}
            data-pr-tooltip='Despesas'
            className={menuItemClassDesign.concat('expenses-navlink')}
          >
            <PiNotepadDuotone size={menuIconSize} />
            <Tooltip target='.expenses-navlink' mouseTrackLeft={10} event='hover' />
          </NavLink>
        </nav>
      </header>

      <footer>
        <LogOutButton
          type='button'
          data-pr-tooltip='Configurações'
          className={menuItemClassDesign.concat('user-navlink cursor-pointer p-0')}
          onClick={() => {
            console.log('logOut...')
          }}
        >
          <RiUser4Line size={menuIconSize} />
          <Tooltip target='.user-navlink' mouseTrackLeft={10} event='hover' />
        </LogOutButton>
      </footer>
    </Aside>
  )
}
