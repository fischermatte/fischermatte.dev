import React from 'react'
import {MouseEvent, KeyboardEvent} from 'react-dom'
import {useEffect, useState} from 'react'
import {Like} from '../pages/api/likes'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'

interface Props {
  onClose: () => void
}

async function fetchLikes(): Promise<Like[]> {
  try {
    return await fetch(`/api/likes`).then(res => res.json())
  } catch (error) {
    throw new Error(error)
  }
}

// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//   const likes = await fetchLikes()
//   return Promise.resolve({
//     props: {
//       likes,
//     },
//   })
// }

const LikeDialog: React.FC<Props> = props => {
  const [data, setData] = useState({count: 0})

  useEffect(() => {
    fetchLikes().then(likes => setData({count: likes.length}))
  }, [])

  function onLike(event: MouseEvent | KeyboardEvent): void {
    event.stopPropagation()
    setData({count: ++data.count})
  }
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-90 flex text-accent-dark">
      <div className="relative p-6 bg-accent-normal w-full max-w-2xl m-auto flex-col flex">
        <div className="font-bold py-2 text-lg">Awesome!</div>
        <div className="mb-2">
          Seems you are interested in meaningful content. Please klick the like button so a counter in a fancy cloud
          database can be increased.
          <div className="py-4 text-accent-dark text-4xl  select-none">
            <a role="button" title="Like it" onClick={e => onLike(e)} onKeyDown={e => onLike(e)} tabIndex={0}>
              <FontAwesomeIcon icon={faThumbsUp} />
            </a>
            <span className="ml-2">{data.count}</span>
          </div>
        </div>
        <div className="text-center py-2 select-none">
          <button
            className="text-accent-normal bg-accent-dark py-2 px-4"
            tabIndex={0}
            onKeyDown={() => props.onClose()}
            onClick={() => props.onClose()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
export default LikeDialog
