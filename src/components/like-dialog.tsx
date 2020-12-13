import * as React from 'react'

interface Props {
  onClose: () => void
}

const LikeDialog: React.FC<Props> = props => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-90 flex text-accent-dark">
      <div className="relative p-8 bg-accent-normal w-full max-w-2xl m-auto flex-col flex">
        <div>Bla bla...</div>
        <div>
          <a
            role="button"
            className="text-accent-dark"
            tabIndex={0}
            onKeyDown={() => props.onClose()}
            onClick={() => props.onClose()}
          >
            Close
          </a>
        </div>
      </div>
    </div>
  )
}
export default LikeDialog
