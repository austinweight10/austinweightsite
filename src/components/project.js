import React from 'react'
import ProjectDictonary from './projectDictonary'

const getLink = link => {
  return (
    <p>
      Visit the site{' '}
      <a href={link} target="_blank">
        {'here'}
      </a>
    </p>
  )
}

const Project = ({ selectedProject }) => {
  const selected = ProjectDictonary.filter(x => x.name === selectedProject)[0]
  if (selected) {
    return (
      <div className={'AW__project' + ' AW__project__' + selected.name}>
        <h1>{selected.title}</h1>
        <p>
          {selected.intro}
          {selected.link ? getLink(selected.link) : null}
        </p>
        {selected.images.map((x, i) => (
          <img src={x} key={i} />
        ))}
        {selected.videos
          ? selected.videos.map((x, i) => (
              <video
                src={x}
                key={i}
                width="300"
                height="250"
                muted="muted"
                loop="loop"
                autoplay="autoplay"
              />
            ))
          : null}
      </div>
    )
  }
  return null
}

export default Project
