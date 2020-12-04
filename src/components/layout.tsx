import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faGitlab, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {dom} from '@fortawesome/fontawesome-svg-core'

interface Props {
  children?: unknown
}

export default class Layout extends React.Component<Props> {
  render(): JSX.Element {
    const {children} = this.props
    return (
      <div className="font-mono mx-6 md:mx-30">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>fischermatte engineering</title>
          <style type="text/css">{dom.css()}</style>
        </Head>
        <header className="py-6">
          <div className="flex">
            <div className="flex bg-accent-normal">
              <Link href="/">
                <a className="py-3 px-5 text-accent-dark">
                  <div className="flex flex-col">
                    <div className="text-lg font-bold mr-3">fischermatte</div>
                    <div className="text-xs self-end">engineering</div>
                  </div>
                </a>
              </Link>
            </div>
            <div className={`flex-grow  ${styles.fill} `}></div>
          </div>
          <nav className="mt-4 text-primary flex space-x-4">
            <Link href="/">
              <a className="link">Home</a>
            </Link>
            <Link href="/resume">
              <a className="link">Resume</a>
            </Link>
            <Link href="/projects">
              <a className="link">Projects</a>
            </Link>
            <Link href="/contact">
              <a className="link">Contact</a>
            </Link>
          </nav>
        </header>
        <main className="py-6">{children}</main>
        <footer className="py-6 text-center">
          <div className="flex p-6 text-3xl justify-center p-5 space-x-4">
            <a href="https://twitter.com/fischermatte">
              <FontAwesomeIcon className="link" icon={faTwitter} />
            </a>
            <a href="https://stackoverflow.com/users/524906/fischermatte">
              <FontAwesomeIcon className="link" icon={faStackOverflow} />
            </a>
            <a href="https://github.com/fischermatte">
              <FontAwesomeIcon className="link" icon={faGithub} />
            </a>
            <a href="https://gitlab.com/fischermatte">
              <FontAwesomeIcon className="link" icon={faGitlab} />
            </a>
          </div>
          <div className="text-sm"> © fischermatte 2020 </div>
        </footer>
      </div>
    )
  }
}
