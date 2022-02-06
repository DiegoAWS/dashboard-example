import React from 'react';
import MainTable from '../../components/MainTable/MainTable';
import RightTable from '../../components/RightTable/RightTable';
import SelectionUpperCard from '../../components/SelectionUpperCard/SelectionUpperCard';
import './Report.scss';

function Report() {

  return <div>
    <SelectionUpperCard />
    <div className='tablesContainer'>

      <MainTable />

      <RightTable />
    </div>
  </div>;
}

export default Report;
