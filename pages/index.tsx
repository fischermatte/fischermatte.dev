import * as React from 'react'
import Head from 'next/head'

type HomeProps = {
  title: string
}

class Home extends React.Component<HomeProps> {
  render(): JSX.Element {
    let {title} = this.props
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>

        <main>
          <h1>Moin Georg</h1>
          <span className="text-red-600">Haha</span>
          <button id="btn" type="button" className="btn btn-primary">
            Huhu
          </button>
        </main>
      </div>
    )
  }
}

export default Home
