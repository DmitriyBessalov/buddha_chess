import React, {useEffect} from 'react';
import {web_protocol, backend} from "../conf";

export const Article = () => {
  const [title, setTitle] = React.useState("")
  const [content, setContent] = React.useState("")

  if (window.location.pathname === '/') {
    window.history.replaceState(null, null, '/ru/');
  }

  useEffect(() => {
    const uri = window.location.pathname.split('/')
    const _json = '{"lang": "' + uri[1] + '", "slug": "/' + decodeURI(uri[2]) + '"}'

    console.log(_json)

    fetch(web_protocol + backend + '/api/article/', {
      method: 'POST',
      body: _json
    }).then(
      async response => ({
        status: response.status,
        body: await response.text()
      })
    ).then(response => {
      if (response.status === 200) {
        setTitle(JSON.parse(response.body).title)
        setContent(JSON.parse(response.body).content)
      }
    })
  }, [])


  return (
    <>
      <title>{title}</title>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{__html: content}}/>
    </>
  )
}