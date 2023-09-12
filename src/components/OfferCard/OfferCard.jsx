import React from 'react'

function OfferCard({ id, company, logo, featured, position, role, level, postedAt, contract, location, languages, tools, news, AddLanguageArray, AddToolsArray, AddRoleArray, AddLevelArray, ArrayCompare }) {

  const test = () => {
    ArrayCompare = 'bonjour'
  }

  return (
    <div className='OfferCard-content' id={`OfferCard-${id}`}>

      <div className='OfferCard-info'>
        <img src={logo} alt="logo" />
        <div className='OfferCard-info-text'>
          <div className='OfferCard-info-company'>
            <p>{company} </p>
            <div> 
              <span className={news ? "displayElement" : "deleteElement"}>new!</span> 
              <span className={featured ? "displayElement" : "deleteElement"}>featured</span> 
            </div>
          </div>
          <p className='OfferCard-info-position'>{position}</p>
          <p className='OfferCard-info-post'><span>{postedAt}</span> . <span>{contract}</span> . <span>{location}</span></p>
        </div>
      </div>

        <hr className='separation' />

      <div className='OfferCard-tag-container'>
          <div onClick={() => AddRoleArray(role)} className='OfferCard-tag'>{role}</div>
          <div onClick={() => AddLevelArray(level)} className='OfferCard-tag'>{level}</div>

          {languages.map((languages, key) => {
            return <div onClick={() => { AddLanguageArray(languages); test()}} key={key} className='OfferCard-tag'>{languages}</div>
          })}

          {tools.map((tools, key) => {
            return <div onClick={() => AddToolsArray(tools)} key={key} className='OfferCard-tag'>{tools}</div>
          })} 
      </div>

    </div>
  )
}

export default OfferCard