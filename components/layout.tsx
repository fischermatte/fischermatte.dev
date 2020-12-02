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
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <title>Georg Ludewig, Software Engineer in Bernlocal</title>
        </Head>
        <header className="w-full p-6">
          <div className="flex items-center justify-between">
            <div className={`${styles.header__logo} flex`}>
              <Link href="/">
                <a className={`${styles.header__logo__a} bg-secondary text-black`}>
                  <div className="align-center p-3">Georg Ludewig</div>
                </a>
              </Link>
            </div>
            {/*<div className="menu-trigger hidden">menu</div>*/}
          </div>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </nav>
        </header>
        <main className="w-full  p-6">{children}</main>
        <footer className="w-full p-6"> Footer</footer>
      </div>
    )
  }
}
