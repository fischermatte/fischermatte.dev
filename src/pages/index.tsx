import LayoutComponent from '../components/layout.component'
import * as React from 'react'
import dynamic from 'next/dynamic'

const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false,
})

interface Props {
  title?: string
}

const Home: React.FC<Props> = () => {
  return (
    <LayoutComponent>
      <div className="flex justify-center items-center bg-accent-normal text-accent-dark text-xl h-32">
        <Typewriter
          onInit={typewriter => {
            typewriter.start()
          }}
          options={{
            strings: [
              'KISS!',
              'Open Source',
              'Domain Driven Design',
              'Green 🌳',
              'Serverless',
              'Team',
              'Event Driven',
              'Cloud',
              'Share',
              'Tailwind CSS',
              '❤ LineageOS ❤',
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
      <h1 className="mt-12">Moin!</h1>
      <p>
        My name is{' '}
        <a className="text-accent-normal" href="https://github.com/fischermatte" target="_blank" rel="noreferrer">
          fischermatte
        </a>
        {', I am a Software Engineer located in Bern, Switzerland. In the next paragraph I would like to place some more ' +
          'fancy text but since no one is reading this anyway I will go on with lorem ipsum.'}
      </p>
      <p className="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Dignissim sodales ut eu sem. Mauris augue neque gravida in fermentum et sollicitudin. Scelerisque
        viverra mauris in aliquam sem fringilla. Amet nisl purus in mollis. Pharetra vel turpis nunc eget. Amet
        consectetur adipiscing elit ut aliquam purus sit. Massa placerat duis ultricies lacus.
      </p>
      <p className="mt-6">Sincerely yours</p>
      <p className="mt-6">
        <a className="text-accent-normal" href="https://github.com/fischermatte" target="_blank" rel="noreferrer">
          fischermatte
        </a>
      </p>
    </LayoutComponent>
  )
}
export default Home
