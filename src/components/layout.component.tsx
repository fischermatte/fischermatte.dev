import * as React from 'react'
import {PropsWithChildren} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.component.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faGitlab, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {dom} from '@fortawesome/fontawesome-svg-core'
import packageJson from '../../package.json'
import {useRouter} from 'next/router'
import {global} from '../content/global'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const LayoutComponent: React.FunctionComponent<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  const router = useRouter()
  return (
    <div className="font-mono mx-auto max-w-screen-md">
      <Head>
        <title>{global.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content={global.meta.keywords} />
        <meta name="description" content={global.meta.description} />
        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" href="favicon-192x192.png" sizes="192x192" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" href="favicon-512x512.png" sizes="512x512" crossOrigin="anonymous" />
        <link rel="apple-touch-icon" href="favicon-apple-touch.png" sizes="180x180" crossOrigin="anonymous" />
        <style type="text/css">{dom.css()}</style>
      </Head>
      <header className="py-6">
        <div className="flex">
          <div className="flex bg-accent-normal">
            <Link href="/">
              <a className="py-3 px-5 text-accent-dark">
                <div className="flex flex-col">
                  <div className="text-lg mr-3">fischermatte</div>
                  <div className="text-xs self-end">engineering</div>
                </div>
              </a>
            </Link>
          </div>
          <div className={`flex-grow  ${styles.fill} `}>{}</div>
        </div>
        <nav className="mt-4 text-primary flex space-x-4">
          <Link href="/">
            <a className={router.pathname == '/' ? styles.navlinkActive : styles.navlink}>Home</a>
          </Link>
          <Link href="/resume">
            <a className={router.pathname == '/resume' ? styles.navlinkActive : styles.navlink}>Resume</a>
          </Link>
          <Link href="/projects">
            <a className={router.pathname == '/projects' ? styles.navlinkActive : styles.navlink}>Projects</a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname == '/contact' ? styles.navlinkActive : styles.navlink}>Contact</a>
          </Link>
        </nav>
      </header>
      <main className="py-6">{props.children}</main>
      <footer className="py-6 text-center">
        <div className="flex p-6 text-3xl justify-center p-5 space-x-4">
          <a href="https://twitter.com/fischermatte" title="fischermatte on Twitter">
            <FontAwesomeIcon className="link" icon={faTwitter} />
          </a>
          <a href="https://stackoverflow.com/users/524906/fischermatte" title="fischermatte on Stackoverflow">
            <FontAwesomeIcon className="link" icon={faStackOverflow} />
          </a>
          <a href="https://github.com/fischermatte" title="fischermatte on Github">
            <FontAwesomeIcon className="link" icon={faGithub} />
          </a>
          <a href="https://gitlab.com/fischermatte" title="fischermatte on Gitlab">
            <FontAwesomeIcon className="link" icon={faGitlab} />
          </a>
        </div>
        <div className="text-sm">© fischermatte 2020</div>
        <div className="text-xs mt-2 opacity-30">
          <a
            href="https://github.com/fischermatte/fischermatte-next"
            target="_blank"
            rel="noreferrer"
            title="View the fancy code of this site on Github"
          >
            Version {packageJson.version}
          </a>
        </div>
      </footer>
    </div>
  )
}
export default LayoutComponent
