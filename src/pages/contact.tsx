import {LayoutComponent} from '../components/layout.component'
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
              <input name="name" className="form-input mt-1 block w-full bg-gray-700" placeholder="Name" />
            </label>
          </div>
          <div className="mt-4">
            <label className="block">
              <input
                type="email"
                name="email"
                className="form-input mt-1 block w-full bg-gray-700"
                placeholder="Email"
              />
            </label>
          </div>
          <div className="mt-4">
            <label className="block">
              <textarea name="message" className="form-textarea mt-1 block w-full bg-gray-700" placeholder="Message" />
            </label>
          </div>
          <div className="mt-4 text-center">
            <button className="bg-accent-normal py-2 text-accent-dark w-32 rounded hover:opacity-80" type="submit">
              Send
            </button>
          </div>
          {/* custom hidden input -> needed by netlify */}
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </LayoutComponent>
    )
  }
}