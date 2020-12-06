import LayoutComponent from '../components/layout.component'
import * as React from 'react'
import {faWrench} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

interface Props {
  title?: string
}

export default class Home extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <LayoutComponent>
        <div className="w-full text-center text-accent-normal py-12 bg-accent-normal text-accent-dark">
          <div className="mb-10 ">Under Construction</div>
          <FontAwesomeIcon className="text-4xl" icon={faWrench} />
        </div>
      </LayoutComponent>
    )
  }
}
