import React from 'react'
import Remove from '../../images/icon-remove.svg'


function Filter( {filter, AllDeleteArray, DeleteOneEl, display} ) {
  return (
          <div className='filter_section'>
          <div className={`filter_bar ${display ? 'flexElement' : 'deleteElement' }`}>
            <div className='filter_container'>
            {filter.map((filter, key) => {
            return(
              <div key={key} className='filter_container_button'>
                <p>{filter}</p>  
                <button onClick={() => DeleteOneEl(filter)}>
                  <img src={Remove} alt="RemoveButton"/>
                </button>
              </div>
            )})}

            </div>
                <p onClick={() => AllDeleteArray()} className='filter_clear_button'>clear</p>
              </div>
          </div>
  )
}

export default Filter