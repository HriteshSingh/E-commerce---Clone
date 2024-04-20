import React from 'react'

const Spinner = (props) => {
  return (
    <>
    {props.loading && (<div className='text-center'>
      <img src={(props.loading.src)} alt="" width={props.loading.width}/>
    </div>)}
    </>
  )
}

export default Spinner
