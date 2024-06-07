import { IoMenuOutline } from "react-icons/io5"

import DefaultTemplateProps from '../../interfaces/DefaultTemplateProps'
import { DefaultLayout, Content, ButtonChangeMenuState } from './design'

import Navigation from './components/Navigation'

import useAppNavigation from '../../hooks/useNavigation'

export default function DefaultTemplate({ children }: DefaultTemplateProps) {
  const { navigationIsOpen, handleNavigationState } = useAppNavigation()

  return (
    <DefaultLayout className='default-template flex relative'>
      <Navigation navigationIsOpen={navigationIsOpen} />

      <Content
        navigationIsOpen={navigationIsOpen}
        className='default-template-content absolute h-full overflow-y-auto overflow-x-hidden'
      >
        <header className='p-3 bg-black-alpha-20 shadow-1'>
          <ButtonChangeMenuState className='flex bg-none cursor-pointer' type='button' onClick={handleNavigationState}>
            <IoMenuOutline size={25} color='white' />
          </ButtonChangeMenuState>
        </header>
        {children}
      </Content>
    </DefaultLayout>
  )
}
