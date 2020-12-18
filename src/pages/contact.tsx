import React from 'react'
import LayoutComponent from '../components/layout.component'

interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <LayoutComponent>
      <h1>{"Let's get in touch!"}</h1>
      <p>{"Any questions or need help? Don't hesitate to contact me:"}</p>
      <form name="contact" method="POST" data-netlify="true" className="mt-4">
        <div className="mt-4">
          <label className="block">
            <input name="name" className="form-input mt-1 block w-full bg-gray-700" placeholder="Name" />
          </label>
        </div>
        <div className="mt-4">
          <label className="block">
            <input type="email" name="email" className="form-input mt-1 block w-full bg-gray-700" placeholder="Email" />
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
export default Contact
