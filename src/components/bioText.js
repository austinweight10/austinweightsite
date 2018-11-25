import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import cv from '../images/Austin-Weight-CV.pdf'

const BioText = ({ click }) => (
  <div className="AW__projects_bio">
    <div className="AW__projects_bio__inner">
      <span>About</span>
      <h2>Hi there, I am Austin Weight.</h2>
      <h2>
        I live in Milton Keynes and work in London. I am a developer/designer
        and currently senior front-end developer at{' '}
        <a
          href="https://endclothing.com"
          target="_blank"
          className="AW__projects_bio__inner__text__link"
        >
          END.
        </a>
      </h2>
      <h2>
        In my student days studing graphic design at UCA I knew my interests
        lied in the web. Emergent behaviours and designing for complexity struck
        a appreciation for networks and development.
      </h2>
      <span>Skills</span>
      <h2>
        As a little boy, my favourite thing in the world was Lego. I loved how I
        could create new worlds brick by brick and it sparked a life-long love
        of design. Now fully-fledged and grown-up, I have found an industry that
        requires the same skills. Fitting together lots of smaller blocks
        whether this be building components in React or using functional
        programming to create something bigger and better.
      </h2>
      <h2>
        As a developer, I have enjoyed working on projects from building both
        client and server-side with Node and React, custom JavaScript sites that
        analyse images to working on WordPress, Magneto 1 and 2 with experience
        in php and JavaScript. I have worked on 3D projects with three.js along
        with AI using tensor flow for classifying images and building forecasts
        for trends.
      </h2>
      <h2>
        I have experience working in advertising on campaigns from prospecting
        to remarketing. My passion lies within performance driven design that is
        user tested. I enjoy analysis as I feel this is key to ensure
        statistically proven ideas are used to engage and advance business
        developments and break down concepts so they can be reused. In the
        design world, I find myself gravitating towards UX and how concepts can
        really influence customers.
      </h2>
      <Accordion>
        <AccordionItem expanded={true}>
          <AccordionItemTitle>
            <h3>skills</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <div className="AW__projects_bio__inner__text">
              <h2>Developer</h2>
              <span>JAVASCRIPT</span>
              <span>REACT</span>
              <span>REDUX</span>
              <span>JQUERY</span>
              <span>KNOCKOUT</span>
              <span>GULP</span>
              <span>GRUNT</span>
              <span>NPM</span>
              <span>YARN</span>
              <span>NODE</span>
              <span>EXPRESS</span>
              <span>ES6</span>
              <span>CSS</span>
              <span>SASS</span>
              <span>LESS</span>
              <span>PHP</span>
              <span>HTML5</span>
              <span>HTML EMAIL</span>
              <span>MJML</span>
              <span>DOCKER</span>
              <span>MAMP</span>
              <span>GIT</span>
              <span>GTM</span>
              <span>BITBUCKET</span>
              <span>WORDPRESSS</span>
              <span>MAGENTO</span>
              <span>MAGENTO 2</span>
              <span>SHELL SCRIPTING</span>
              <span>TESTING</span>
              <span>TDD</span>

              <h2>Designer</h2>
              <span>IDEA GENERATION</span>
              <span>GRAPHIC DESIGN</span>
              <span>ADVERTISING</span>
              <span>WEB DESIGN</span>
              <span>WIREFRAMING</span>
              <span>ILLUSTRATION</span>
              <span>DIGITAL & ANALOG PHOTOGRAPHY</span>
              <span>TYPOGRAPHY</span>
              <span>PRINT DESIGN</span>
              <span>UI DESIGN</span>
              <span>PAGE LAYOUT</span>
              <span>INVISION</span>
              <span>ADOBE SUITE</span>
              <span>ADOBE INDESIGN</span>
              <span>ADOBE ILLUSTRATOR</span>
              <span>ADOBE PHOTOSHOP</span>
            </div>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
      <h2>
        It wouldn't be a protfolio if there wasn't any shameless name dropping
        so here are a couple of companys I have been lucky enough to do work
        for:
      </h2>
      <Accordion>
        <AccordionItem expanded={true}>
          <AccordionItemTitle>
            <h3>clientele</h3>
          </AccordionItemTitle>
          <AccordionItemBody>
            <div className="AW__projects_bio__inner__text">
              <a href="https://www.abercrombie.co.uk/">Abercrombie And Fitch</a>
              <a href="https://ao.com/">AO.com</a>
              <a href="https://www.autotrader.co.uk/">Auto Trader</a>
              <a href="https://endclothing.com/">END.</a>
              <a href="https://www.feelunique.com/">FeelUnique</a>
              <a href="https://www.footasylum.com/">Footasylum</a>
              <a href="https://www.jigsaw-online.com/">Jigsaw</a>
              <a href="https://www.jimmychoo.com/">Jimmy Choo</a>
              <a href="https://www.karenmillen.com/">Karen Millen</a>
              <a href="https://www.matchesfashion.com/">Matchesfashion</a>
              <a href="https://www.missguided.co.uk/">Missguided</a>
              <a href="https://uk.monsoon.co.uk/">Monsoon</a>
              <a href="https://www.moo.com/">Moo</a>
              <a href="https://www.whistles.com/">Whistles</a>
            </div>
          </AccordionItemBody>
        </AccordionItem>
      </Accordion>
      <h2>
        You can contact me via email at{' '}
        <a
          href="mailto:example@email.com"
          className="AW__projects_bio__inner__text__link"
        >
          austinweight10@gmail.com
        </a>{' '}
        or on{' '}
        <a
          href="https://www.linkedin.com/in/austin-weight-bb371983"
          target="_blank"
          className="AW__projects_bio__inner__text__link"
        >
          linked in
        </a>{' '}
        or if you want to know more about me you can download my cv{' '}
        <a
          href={cv}
          target="_blank"
          className="AW__projects_bio__inner__text__link"
        >
          here
        </a>
      </h2>
    </div>
  </div>
)

export default BioText
