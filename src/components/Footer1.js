import React from 'react'

const Footer1 = (props) => {
  return (
    <>
        <div className="raw-contain5" style={{backgroundColor: props.mode==='light'?'#f3f4f6':'#1f2937',color: props.mode==='light'?'#6b7280':'#c5d5db'}}>
          <p>&copy; 2023 hriteshCodesWear.com — All Rights Reserved</p>
        </div>
    </>
  )
}

export default Footer1
