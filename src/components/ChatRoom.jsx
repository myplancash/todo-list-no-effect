import React from 'react';

function SearchResults({ query }) {
  
  const [page, setPage] = React.useState(1);
  const params = new URLSearchParams({ query, page });
  const results = useData(`/api/search?${params}`);

  function handleNextPageClick() {
    setPage(page + 1);
  }
  // ...
}

//extracting your fetching logic into a custom Hook like:

function useData(url) {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    let ignore = false

    fetch(url)
      .then(response => response.json())
      .then(json => {
        if(!ignore) {
          setData(json)
        }
      })

    return () => {
      ignore = true 
    }
  }, [url])
  return data

}