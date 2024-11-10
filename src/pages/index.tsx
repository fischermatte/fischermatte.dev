import dynamic from 'next/dynamic'
import React, {BaseSyntheticEvent, useState} from 'react'
import LayoutComponent from '../components/layout.component'

const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false,
})

const PhraseDialog = dynamic(() => import('../components/phrase-dialog'))

interface Props {
  title?: string
}

const Home: React.FC<Props> = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = (e: BaseSyntheticEvent): void => {
    e.preventDefault()
    setModalOpen(true)
  }

  const closeModal = (e: BaseSyntheticEvent): void => {
    e.preventDefault()
    setModalOpen(false)
  }

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
      <h1 className="mt-12 mb-6">Moin moin!</h1>
      <div>
        Hello, I am Klaus Native - a Software Engineer located in Bern, Switzerland. Currently focusing on{' '}
        <span className="text-accent-normal">Serverless</span> and{' '}
        <span className="text-accent-normal">Cloud native web development</span>. The next paragraph is all about
        tech-lorem-ipsum since nobody cares about what is written on this website. If you really would like to read
        meaningful content on this page click {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          role="button"
          className="link underline"
          tabIndex={0}
          onClick={e => openModal(e)}
          onKeyDown={e => {
            if (e.key === 'Enter') openModal(e)
          }}
        >
          here
        </a>
        .{modalOpen && <PhraseDialog phraseId="285198995769262593" onClose={closeModal} />}
      </div>
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
      <p className="mt-6">Klaus</p>
    </LayoutComponent>
  )
}
export default Home
