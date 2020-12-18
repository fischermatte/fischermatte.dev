import React from 'react'
import {ResumeItem} from '../shared/resume.types'

interface Props {
  item: ResumeItem
}

const ResumeItemComponent: React.FC<Props> = props => {
  const {item} = props
  return (
    <div>
      <div className="mb-1">{item.title}</div>
      <div className="space-y-1">
        {item.subtitles.map(subtitle => (
          <div key={subtitle} className="opacity-60">
            {subtitle}
          </div>
        ))}
      </div>
    </div>
  )
}
export default ResumeItemComponent
