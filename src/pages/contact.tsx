import LayoutComponent from '../components/layout.component'
import * as React from 'react'

interface Props {}
interface State {}

export default class Contact extends React.Component<Props, State> {
  render(): JSX.Element {
    return (
      <LayoutComponent>
        <h1>Contact</h1>
        <form name="contact" method="POST" data-netlify="true">
          <div className="mt-4">
            <label className="block">
              <input className="form-input mt-1 block w-full bg-gray-700" placeholder="Name" />
            </label>
          </div>
          <div className="mt-4">
            <label className="block">
              <input type="email" className="form-input mt-1 block w-full bg-gray-700" placeholder="Email" />
            </label>
          </div>
          <div className="mt-4">
            <label className="block">
              <textarea className="form-textarea mt-1 block w-full bg-gray-700" placeholder="Text" />
            </label>
          </div>
          <div className="mt-4">
            <button className="bg-accent-normal px-3 py-2 text-accent-dark font-bold w-32 rounded" type="submit">
              Send
            </button>
          </div>
        </form>
      </LayoutComponent>
    )
  }
}
