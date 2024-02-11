import React from 'react'
import Pie from '../Pie'
import State from '../state'
import Table from '../Table'
import './Chart.css'
import { useLocation } from 'react-router-dom'

const Chart = () => {
  const location = useLocation();
  const props = location.state.key;
  console.log(props.city)
  return (
    <div className="boxer">
    <div className='container'>
      <div className="chart">
        <div className="pie">
            <Pie city={props.city} />
        </div>
        <div className="state">
          <State city={props.city}/>
        </div>
      </div>
      <div className="table">
        <Table city={props.companies} />
      </div>

    </div>
    </div>
  )
}

export default Chart
