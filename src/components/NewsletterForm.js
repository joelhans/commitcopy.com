import { useRef, useState } from 'react'

import siteMetadata from '@data/siteMetadata'

const NewsletterForm = () => {
  const inputEl = useRef(null)
  const inputName = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${siteMetadata.newsletter.provider}`, {
      body: JSON.stringify({
        email: inputEl.current.value,
        name: inputName.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return
    }

    inputEl.current.value = ''
    inputName.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Successfully! 🎉 You are now subscribed.')
  }

  return (
    <div className="mb-0">
      {/* <div className="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{title}</div> */}
      <form className="flex flex-col" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="name-input">
            First name
          </label>
          <input
            autoComplete="given-name"
            className="px-4 py-4 rounded-md w-72 mb-6 dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600"
            id="name-input"
            name="name"
            placeholder={subscribed ? 'Hooray!  🎉' : 'Name'}
            ref={inputName}
            required
            type="text"
            disabled={subscribed}
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="px-4 py-4 rounded-md w-72 dark:bg-black focus:outline-none focus:ring-2 focus:border-transparent focus:ring-primary-600"
            id="email-input"
            name="email"
            placeholder={subscribed ? "You're subscribed." : 'Email address'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <div className="flex w-full mt-6 rounded shadow-sm">
          <button
            className={`whitespace-nowrap bg-orange px-6 py-4 rounded-md font-bold text-white text-lg ${
              subscribed ? 'cursor-default' : 'hover:bg-sea dark:hover:bg-sea'
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 dark:ring-offset-black transition-all`}
            type="submit"
            disabled={subscribed}
          >
            {subscribed ? 'Thank you!' : 'Subscribe'}
          </button>
        </div>
      </form>
      {error && (
        <div className="pt-2 text-sm text-red-500 w-72 sm:w-96 dark:text-red-400">{message}</div>
      )}
    </div>
  )
}

export default NewsletterForm
