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

  return (
    <Container className='ExpensesRead p-5 mx-auto'>
      <header className='flex flex-wrap justify-content-between mb-8'>
        <h1 className='font-light m-0 text-color'>Despesas</h1>
        <div className='controls'>
          <Button
            type='button'
            onClick={() => {
              console.log('')
            }}
            rounded
            className='bg-purple-500 hover:bg-purple-400 border-purple-700'
          >
            <GoPlus /> Nova despesa
          </Button>
        </div>
      </header>

      <div className='flex flex-column gap-1'>
        {expenses.map((expense, index) => (
          <Card
            key={index}
            className={clsx({
              'bg-white': prefColorSchema === 'light',
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
