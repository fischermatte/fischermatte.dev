import React from 'react'
import {ResumeItem} from '../core/shared/resume.types'
import ResumeItemComponent from './resume-item.component'

interface Props {
  items: ResumeItem[]
}

const ResumeItemsComponent: React.FC<Props> = props => {
  const {items} = props
  return (
    <div className="mt-7 space-y-7">
      {items.map(item => (
        <ResumeItemComponent item={item} key={item.title} />
      ))}
    </div>
  )
}
export default ResumeItemsComponent
