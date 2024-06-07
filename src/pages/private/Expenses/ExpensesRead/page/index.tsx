import { Button } from 'primereact/button'
import { Container } from '../design'
import { MdFilterAlt } from 'react-icons/md'
import { GoPlus } from 'react-icons/go'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

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

  return (
    <Container className='ExpensesRead p-5 mx-auto'>
      <header className='flex align-items-center justify-content-between mb-8'>
        <h1 className='font-light m-0 text-color'>Despesas</h1>
        <div className='controls flex gap-2'>
          <Button rounded className='bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700'>
            <MdFilterAlt /> Filtros
          </Button>

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

      <DataTable value={expenses} className='font-light'>
        <Column field='name' header='Despesa'></Column>
        <Column field='type' header='Tipo'></Column>
        <Column field='details' header='Detalhes'></Column>
        <Column field='value' header='Valor'></Column>
        <Column field='incalc' className='m-0' header='Usada sistematicamente'></Column>
        <Column></Column>
      </DataTable>
    </Container>
  )
}

export default ExpensesRead
