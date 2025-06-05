import { useState, useEffect } from 'react';
import Item from './Item';
import { getWikiSearchResults } from './wikiApi';

const List = ({ searchTerm }) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchTerm) return;

    setLoading(true);
    setError(null);

    getWikiSearchResults(searchTerm)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [searchTerm]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  if (!data?.query?.pages) return null;

  const results = data.query.pages;

  return (
    <ul>
      {Object.values(results).map((result) => (
        <Item key={result.pageid} result={result} />
      ))}
    </ul>
  );
};
export default List;