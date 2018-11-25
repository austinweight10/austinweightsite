import React from 'react'

const Logo = ({ children, click, showWork }) => {
  return (
    <div className="AW__index__logo">
      <span className="AW__index__logo_inner">
        <div className="AW__index__logo_glitch_contain">
          <div class="glitch">
            <div class="glitch__img" />
            <div class="glitch__img" />
            <div class="glitch__img" />
            <div class="glitch__img" />
            <div class="glitch__img" />
          </div>
        </div>
      </span>
    </div>
  )
}

export default Logo
