import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './laoyut.module.css'

type LayoutProps = {
  children: unknown
}
export default class Layout extends React.Component<LayoutProps> {
  render(): JSX.Element {
    let {children} = this.props
    return (
      <div className="font-mono">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>Georg Ludewig, Software Engineer in Bern</title>
        </Head>
        <header className="w-full p-6">
          <div className="flex">
            <div className="flex bg-accent-front">
              <Link href="/">
                <a className="">
                  <div className="align-center p-3 text-accent-back">Georg Ludewig</div>
                </a>
              </Link>
            </div>
            <div className={`flex-grow  ${styles.fill} `}></div>
          </div>
          <nav className="mt-4 text-primary flex space-x-4">
            <Link href="/">
              <a className="underline">Home</a>
            </Link>
            <Link href="/resume">
              <a className="underline">Resume</a>
            </Link>
            <Link href="/projects">
              <a className="underline">Projects</a>
            </Link>
            <Link href="/contact">
              <a className="underline">Contact</a>
            </Link>
          </nav>
        </header>
        <main className="w-full p-6">{children}</main>
        <footer className="w-full p-6"></footer>
      </div>
    )
  }
}
