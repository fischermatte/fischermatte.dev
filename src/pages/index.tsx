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
              'GraphQL',
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
        My name is fischermatte, I am a Software Engineer located in Bern, Switzerland. Currently focusing on{' '}
        <span className="text-accent-normal">Serverless</span> and{' '}
        <span className="text-accent-normal">Cloud native web development</span>. The next paragraph is all about
        tech-lorem-ipsum since nobody cares about what is written here.
      </p>
      <p className="mt-6">
        Lorem ipsum dolor sit <span className="buzzword">open source</span>, consectetur adipiscing{' '}
        <span className="buzzword">event driven</span>, sed do eiusmod tempor <span className="buzzword">Angular</span>{' '}
        ut labore et dolore magna aliqua. <span className="buzzword">Reactive</span> sodales ut eu sem. Mauris{' '}
        <span className="buzzword">aws-cdk</span> neque gravida in fermentum et{' '}
        <span className="buzzword">infrastructure-as-code</span>.<span className="buzzword"> API-first</span> viverra
        mauris in <span className="buzzword">Typescript</span> sem fringilla. Amet nisl purus in
        <span className="buzzword"> domain driven design</span>. <span className="buzzword"> NoSQL</span> vel turpis
        nunc eget. <span className="buzzword"> TailwindCSS</span> consectetur adipiscing elit ut aliquam purus sit.
        Massa <span className="buzzword"> Next.js</span> duis ultricies <span className="buzzword"> Firebase</span>.
      </p>
      <p className="mt-6">Sincerely yours</p>
      <p className="mt-6">fischermatte</p>
    </LayoutComponent>
  )
}
export default Home
