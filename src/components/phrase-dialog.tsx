import React, {BaseSyntheticEvent, useEffect, useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import {ajax} from 'rxjs/ajax'
import {Phrase} from '../shared/phrase.types'
import {Observable} from 'rxjs'
import {map, take} from 'rxjs/operators'

interface Props {
  phraseId: string
  onClose: (e: BaseSyntheticEvent) => void
}

const api = {
  getPhraseById(phraseId: string): Observable<Phrase> {
    return ajax.getJSON<Phrase>(`api/phrases/${phraseId}`).pipe(take(1))
  },
  likePhrase(phraseId: string): Observable<number> {
    return ajax.post(`api/phrases/${phraseId}/like`).pipe(
      take(1),
      map(resp => resp.response.totalLikes),
    )
  },
}

const PhraseDialog: React.FC<Props> = props => {
  const [phrase, setPhrase] = useState<Phrase>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const subscription = api.getPhraseById(props.phraseId).subscribe((phrase: Phrase) => {
      setPhrase(phrase)
      setLoading(false)
    })
    return () => subscription.unsubscribe()
  }, [])

  function onLike(event: BaseSyntheticEvent): void {
    event.stopPropagation()
    api.likePhrase(props.phraseId).subscribe(totalLikes => {
      setPhrase({
        ...phrase,
        totalLikes,
      })
    })
  }
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-90 flex text-accent-dark">
      <div className="relative p-6 bg-accent-normal w-full max-w-2xl m-auto flex-col flex">
        {loading && <div className="py-2">Loading...</div>}
        {!loading && (
          <div>
            <div className="font-bold py-2 text-lg">{phrase.title}</div>
            <div className="mb-2">
              {phrase.text} Please click the like button so a counter in a fancy cloud database can be increased.
              <div className="py-4 text-accent-dark select-none ">
                <div className="text-4xl">
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
                  <span className="ml-2">{phrase.totalLikes}</span>
                </div>
              </div>
            </div>
          </div>
        )}
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
export default PhraseDialog
