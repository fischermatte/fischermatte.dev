import '../styles/main.css'
import {AppProps} from 'next/app'
import * as React from 'react'

// import {config, library} from '@fortawesome/fontawesome-svg-core'
// import '@fortawesome/fontawesome-svg-core/styles.css'
// import {faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons'
//
// config.autoAddCss = false
//
// library.add(faTwitter, faFacebook)

export default class MyApp extends React.Component<AppProps> {
  render(): JSX.Element {
    let {Component, pageProps} = this.props
    return <Component {...pageProps} />
  }
}
