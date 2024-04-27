import React from 'react'
import LayoutComponent from '../components/layout.component'

interface Props {}
const Contact: React.FC<Props> = () => {
  return (
    <LayoutComponent>
      <h1>{"Let's get in touch!"}</h1>
      <p>
        {"Any questions or need help? Don't hesitate to "}
        <a className="text-accent-normal underline cursor-pointer" href="https://swiss.social/@fischermatte">
          DM me on mastodon
        </a>{' '}
        !
      </p>
    </LayoutComponent>
  )
}
export default Contact
