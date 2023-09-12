import { Filter, OfferCard } from './components/index.js'
import data from './data.js'
import {useState} from 'react'

import './App.css';

function App() {

  const [filter, setFilter] = useState([]);
  const [display, setDisplay] = useState(false);

  const AllDeleteArray = () => {
      setFilter([])
      setDisplay(false)
  }

  const DeleteOneEl = (elementToDelete) => {
    setFilter(prevState => prevState.filter(item => item !== elementToDelete));
    if(filter.length === 1) {
      setDisplay(false)
      console.log(filter.length)
    }
  }

  const AddLanguageArray  = (languages) => {
    setFilter(prevState => [...prevState, languages]);
    if(display !== true) {
      setDisplay(true)
    }
  }

  const AddToolsArray  = (tools) => {
    setFilter(prevState => [...prevState, tools]);
    if(display !== true) {
      setDisplay(true)
    }
  }

  const AddRoleArray  = (role) => {
    setFilter(prevState => [...prevState, role]);
    if(display !== true) {
      setDisplay(true)
    }
  }

  const AddLevelArray  = (level) => {
    setFilter(prevState => [...prevState, level]);
    if(display !== true) {
      setDisplay(true)
    }
  }

  return (
    <div className="App">
        <Filter
          filter={filter}
          AllDeleteArray={AllDeleteArray}
          DeleteOneEl={DeleteOneEl}
          display={display}
        />

        <div className='offerCard-container'>

            {data.filter(item => {
              return filter.every(filterElement => 
                item.role.includes(filterElement) ||
                item.tools.includes(filterElement) ||  
                item.level.includes(filterElement) || 
                item.languages.includes(filterElement));
              }).map((data, key) => {
                return ( 
                    <OfferCard 
                      key={key}
                      id={data.id}
                      company={data.company}
                      logo={data.logo}
                      news={data.new}
                      featured={data.featured}
                      position={data.position}
                      role={data.role}
                      level={data.level}
                      postedAt={data.postedAt}
                      contract={data.contract}
                      location={data.location}
                      languages={data.languages}
                      tools={data.tools}
                      AddLanguageArray={AddLanguageArray}
                      AddToolsArray={AddToolsArray}
                      AddRoleArray={AddRoleArray}
                      AddLevelArray={AddLevelArray}
                    /> 
                  )})}
        </div>
    </div>
  );
}

export default App;
