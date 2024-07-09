import { Button } from 'primereact/button'
import PageHeaderComponent from '../../../../../components/PageHeader'
import { Container, CategoryIcon, CategoryContainer } from '../design'
import { FaPlane } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'
import { IoFastFood } from 'react-icons/io5'
import clsx from 'clsx'
import usePrefersColorSchema from '../../../../../hooks/usePrefersColorSchema'
import { iconsSize } from '../../../../../styles/global'

function CategoriesRead(): JSX.Element {
  const { prefColorSchema } = usePrefersColorSchema()

  const headerControls: JSX.Element = (
    <Button
      type='button'
      onClick={() => {
        console.log('Add new category')
      }}
      rounded
      className='bg-purple-500 hover:bg-purple-400 border-purple-700'
    >
      <GoPlus size={iconsSize} /> Cadastrar
    </Button>
  )

  return (
    <Container className='CategoriesRead p-5 mx-auto'>
      <PageHeaderComponent pageName='Classificações' controls={headerControls} />

      <CategoryContainer className='gap-1'>
        <div
          className={clsx(
            'p-2 border-round-lg border-3 surface-border',
            (prefColorSchema === 'dark' && 'bg-gray-300') || 'surface-200',
          )}
        >
          <div className='flex gap-2 justify-content-between align-items-center'>
            <CategoryIcon className='border-purple-100 border-2 bg-purple-500 p-2 border-round-lg flex align-items-center justify-content-center'>
              <IoFastFood size={iconsSize} color='white' />
            </CategoryIcon>
            <p className='m-0 p-0'>Alimentação</p>
            <Button
              className='p-0'
              severity='help'
              text
              icon='pi pi-ellipsis-v'
              type='button'
              rounded
            />
          </div>
        </div>

        <div
          className={clsx(
            'p-2 border-round-lg border-3 surface-border',
            (prefColorSchema === 'dark' && 'bg-gray-300') || 'surface-200',
          )}
        >
          <div className='flex gap-2 justify-content-between align-items-center'>
            <CategoryIcon className='border-purple-100 border-2 bg-purple-500 p-2 border-round-lg flex align-items-center justify-content-center'>
              <AiFillHome size={iconsSize} color='white' />
            </CategoryIcon>
            <p className='m-0 p-0'>Casa</p>
            <Button
              className='p-0'
              severity='help'
              text
              icon='pi pi-ellipsis-v'
              type='button'
              rounded
            />
          </div>
        </div>

        <div
          className={clsx(
            'p-2 border-round-lg border-3 surface-border',
            (prefColorSchema === 'dark' && 'bg-gray-300') || 'surface-200',
          )}
        >
          <div className='flex gap-2 justify-content-between align-items-center'>
            <CategoryIcon className='border-purple-100 border-2 bg-purple-500 p-2 border-round-lg flex align-items-center justify-content-center'>
              <FaPlane size={iconsSize} color='white' />
            </CategoryIcon>
            <p className='m-0 p-0'>Viagens</p>
            <Button
              className='p-0'
              severity='help'
              text
              icon='pi pi-ellipsis-v'
              type='button'
              rounded
            />
          </div>
        </div>
      </CategoryContainer>
    </Container>
  )
}

export default CategoriesRead
