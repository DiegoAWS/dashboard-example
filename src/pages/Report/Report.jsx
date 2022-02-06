import React from 'react';
import MainTable from '../../components/MainTable/MainTable';
import SelectionUpperCard from '../../components/SelectionUpperCard/SelectionUpperCard';
import './Report.scss';

function Report() {
  
  return <div>
    <SelectionUpperCard />
    <div className='tablesContainer'>
      <div className='mainTableContainer'>
        <MainTable />
      </div>
      <div className='rightTable'>Right Table</div>
    </div>
  </div>;
}

export default Report;
