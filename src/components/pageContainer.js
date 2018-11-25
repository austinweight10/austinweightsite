import React from 'react'
import Logo from './logo'
import Overlay from './overlay'

const PageContainer = ({ children, click, showWork }) => {
  return (
    <div className={'AW__index' + (showWork ? ' AW__index__open' : '')}>
      {showWork ? <Overlay click={click} /> : null}
      <Logo />
      {children}
    </div>
  )
}

export default PageContainer
