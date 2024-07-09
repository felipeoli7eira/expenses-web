import { Button } from 'primereact/button'
import { Container } from '../design'
// import { MdFilterAlt } from 'react-icons/md'
import { GoPlus } from 'react-icons/go'
import { CgDetailsLess } from 'react-icons/cg'

// import { Column } from 'primereact/column'
// import { DataTable } from 'primereact/datatable'
import { Card } from 'primereact/card'
import usePrefersColorSchema from '../../../../../hooks/usePrefersColorSchema'
import clsx from 'clsx'
import { theme } from '../../../../../styles/Theme'
import { iconsSize } from '../../../../../styles/global'
import PageHeaderComponent from '../../../../../components/PageHeader'

function ExpensesRead(): JSX.Element {
  const expenses = [
    {
      name: 'Aluguel',
      type: 'Fixa',
      details: '',
      value: 650,
      incalc: 'Sim',
    },
    {
      name: 'Cartão de crédito',
      type: 'Variável',
      details: '',
      value: 1650,
      incalc: 'Sim',
    },
  ]

  const { prefColorSchema } = usePrefersColorSchema()

  const headerControls: JSX.Element = (
    <Button
        type='button'
        onClick={() => {
            console.log('')
        }}
        rounded
        className='bg-purple-500 hover:bg-purple-400 border-purple-400 hover:border-purple-300 border-2'
    >
        <GoPlus size={iconsSize} /> Cadastrar
    </Button>
  )

  return (
    <Container className='ExpensesRead p-5 mx-auto'>
      <PageHeaderComponent pageName='Despesas' controls={headerControls} />

      <div className='flex flex-column gap-1'>
        {expenses.map((expense, index) => (
          <Card
            key={index}
            className={clsx({
              'shadow-none': true,
              'bg-gray-300': prefColorSchema === 'light',
              'bg-black-alpha-40': prefColorSchema === 'dark',
            })}
          >
            <div className='flex flex justify-content-between align-items-center'>
              <p className='text-base m-0 font-normal'>{expense.name}</p>

              <Button text type='button' security='help' icon={<CgDetailsLess size={iconsSize} color={theme.colors.purple} />} />
            </div>
          </Card>
        ))}
      </div>

      {/* <DataTable value={expenses} scrollable stripedRows scrollHeight="400px" size='small' className='font-normal'>
        <Column field='name' header='Despesa'></Column>
        <Column field='type' header='Tipo'></Column>
        <Column field='details' header='Detalhes'></Column>
        <Column field='value' header='Valor'></Column>
        <Column field='incalc' className='m-0' header='Sistematica'></Column>
      </DataTable> */}
    </Container>
  )
}

export default ExpensesRead
