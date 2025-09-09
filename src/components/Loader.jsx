import React from 'react'

const Loader = () => {
  return (
    <>
      <div id="loader">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  )
}

export default Loader