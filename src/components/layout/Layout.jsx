import React from 'react'

export const Layout = (props) => {
  return (
    <>
      <div className='root'>
        <div className='layout'>
          <div>{props.children}</div>
        </div>{/* layout */}
      </div>{/* root */}
    </>
  )
}
