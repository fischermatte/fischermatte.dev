import React, {BaseSyntheticEvent, useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {fromFetch} from 'rxjs/fetch'
import {switchMap} from 'rxjs/operators'

interface Props {
  onClose: (e: BaseSyntheticEvent) => void
}
const LikeDialog: React.FC<Props> = props => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const subscription = fromFetch('api/likes')
      .pipe(switchMap(response => response.json()))
      .subscribe(likes => setCount(likes.length))
    return () => subscription.unsubscribe()
  }, [])

  function onLike(event: BaseSyntheticEvent): void {
    event.stopPropagation()
    setCount(count + 1)
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
            <span className="ml-2">{count}</span>
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
