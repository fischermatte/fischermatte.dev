import React, {BaseSyntheticEvent, useEffect, useState} from 'react'
import {Like} from '../pages/api/likes'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'

interface Props {
  onClose: (e: BaseSyntheticEvent) => void
}

async function fetchLikes(): Promise<Like[]> {
  try {
    return await fetch(`/api/likes`).then(res => res.json())
  } catch (error) {
    throw new Error(error)
  }
}

const LikeDialog: React.FC<Props> = props => {
  const [data, setData] = useState({count: 0})

  useEffect(() => {
    fetchLikes().then(likes => setData({count: likes.length}))
  }, [])

  function onLike(event: BaseSyntheticEvent): void {
    event.stopPropagation()
    setData({count: ++data.count})
  }
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-90 flex text-accent-dark">
      <div className="relative p-6 bg-accent-normal w-full max-w-2xl m-auto flex-col flex">
        <div className="font-bold py-2 text-lg">Awesome!</div>
        <div className="mb-2">
          Seems you are interested in meaningful content. Please click the like button so a counter in a fancy cloud
          database can be increased.
          <div className="py-4 text-accent-dark text-4xl  select-none ">
            <a
              className="hover:text-accent-contrast"
              role="button"
              title="Like it"
              tabIndex={0}
              onClick={e => onLike(e)}
              onKeyDown={e => {
                if (e.key === 'Enter') onLike(e)
              }}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
            </a>
            <span className="ml-2">{data.count}</span>
          </div>
        </div>
        <div className="text-center py-2 select-none">
          <button
            className="text-accent-normal bg-accent-dark py-2 px-4 hover:bg-accent-contrast"
            tabIndex={0}
            onClick={e => props.onClose(e)}
            onKeyDown={e => {
              if (e.key === 'Enter') props.onClose(e)
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
export default LikeDialog
