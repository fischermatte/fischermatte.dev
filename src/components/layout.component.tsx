import '@fortawesome/fontawesome-svg-core/styles.css'
import {faGithub, faGitlab, faMastodon, faStackOverflow, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faPalette} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React, {PropsWithChildren} from 'react'
import {head} from '../../content/head'
import packageJson from '../../package.json'
import styles from './layout.component.module.css'

interface Props {}

const themes = ['theme-dark', 'theme-red', 'theme-monochrome']

const LayoutComponent: React.FunctionComponent<PropsWithChildren<Props>> = (props: PropsWithChildren<Props>) => {
  const router = useRouter()
  const page = router.pathname === '/' ? 'index' : router.pathname.replace('/', '')

  const switchTheme = () => {
    const currentTheme = document.body.classList.values().next().value
    document.body.classList.remove(...themes)
    let nextThemeIndex = themes.indexOf(currentTheme) + 1
    if (nextThemeIndex >= themes.length) {
      nextThemeIndex = 0
    }
    document.body.classList.add(themes[nextThemeIndex])
  }

  return (
    <div className="font-mono mx-auto max-w-screen-md min-w-[360px] px-4 py-6">
      <Head>
        <title>{head[page]?.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content={head[page]?.keywords} />
        <meta name="description" content={head[page]?.description} />
        <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://fischermatte.dev" />
        <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website" />
        <meta prefix="og: http://ogp.me/ns#" property="og:title" content={head[page]?.title} />
        <meta prefix="og: http://ogp.me/ns#" property="og:description" content={head[page]?.description} />
        <meta
          prefix="og: http://ogp.me/ns#"
          name="image"
          property="og:image"
          content="https://fischermatte.dev/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="fischermatte.dev" />
        <meta property="twitter:url" content="https://fischermatte.dev" />
        <meta name="twitter:image" content="https://fischermatte.dev/logo.png" />
        <meta name="twitter:title" content={head[page]?.title} />
        <meta name="twitter:description" content={head[page]?.description} />

        <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="favicon-512x512.png" sizes="512x512" />
        <link rel="apple-touch-icon" href="favicon-apple-touch.png" sizes="180x180" />
      </Head>
      <header>
        <div className="flex">
          <div className="flex bg-accent-normal">
            <Link href="/" className="py-3 px-5 text-accent-dark">
              <div className="flex flex-col lowercase">
                <div className="text-lg">Fischermatte</div>
                <div className="text-xs ml-6 self-end">Cloud Software Engineer</div>
              </div>
            </Link>
          </div>
          <div className={`flex-grow  ${styles.fill} `}>{}</div>
        </div>
        <nav className="mt-4 text-primary flex flex-wrap space-x-4 relative">
          <Link href="/" className={router.pathname == '/' ? styles.navLinkActive : styles.navLink}>
            Home
          </Link>
          <Link href="/resume" className={router.pathname == '/resume' ? styles.navLinkActive : styles.navLink}>
            Resume
          </Link>
          <Link href="/projects" className={router.pathname == '/projects' ? styles.navLinkActive : styles.navLink}>
            Projects
          </Link>
          <Link href="/contact" className={router.pathname == '/contact' ? styles.navLinkActive : styles.navLink}>
            Contact
          </Link>
          <a onClick={switchTheme} className={styles.themeLink}>
            <FontAwesomeIcon className="link" icon={faPalette} />
          </a>
        </nav>
      </header>
      <main className="py-6">{props.children}</main>
      <footer className="py-6 text-center">
        <div className="flex p-6 text-3xl justify-center p-5 space-x-4">
          <a rel="me" href="https://swiss.social/@fischermatte" title="fischermatte on Mastodon">
            <FontAwesomeIcon className="link" icon={faMastodon} />
          </a>
          <a href="https://twitter.com/fischermatte" title="fischermatte on Twitter">
            <FontAwesomeIcon className="link" icon={faTwitter} />
          </a>
          <a
            href="https://stackoverflow.com/users/524906/fischermatte?tab=profile"
            title="fischermatte on Stackoverflow"
          >
            <FontAwesomeIcon className="link" icon={faStackOverflow} />
          </a>
          <a href="https://github.com/fischermatte" title="fischermatte on Github">
            <FontAwesomeIcon className="link" icon={faGithub} />
          </a>
          <a href="https://gitlab.com/fischermatte" title="fischermatte on Gitlab">
            <FontAwesomeIcon className="link" icon={faGitlab} />
          </a>
        </div>
        <div className="text-sm">© fischermatte 2023</div>
        <div className="text-xs mt-2  opacity-60">
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
