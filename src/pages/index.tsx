import {LayoutComponent} from '../components/layout.component'
import * as React from 'react'
import dynamic from 'next/dynamic'

const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false,
})

interface Props {
  title?: string
}

export default class Home extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <LayoutComponent>
        <div className="flex justify-center items-center bg-accent-normal text-accent-dark text-xl h-32">
          <Typewriter
            onInit={typewriter => {
              typewriter.start()
            }}
            options={{
              strings: [
                'Open Source',
                'KISS!',
                'Domain Driven Design',
                'Green 🌳',
                'Serverless',
                'Team',
                'Event Driven',
                'Cloud',
                'Tailwind CSS',
                '❤️ LineageOS ❤️',
                'Cycling',
                'Typescript',
                'Guitar 🎵',
                '<span class="line-through">Java EE</span>',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </LayoutComponent>
    )
  }
}
