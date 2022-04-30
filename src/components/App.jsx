import { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import SearchBar from './Searchbar/SearchBar';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import { Div } from './ImageGallery/ImageGallery.styles';

export default function App() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const handleFormSubmit = search => {
    setSearch(search);
    setPage(1);
    setResponse([]);
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    setLoading(true);
    fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${page}&per_page=12&key=26732383-f6cd41098d2c807081d5b5285`
    )
      .then(respon => {
        if (respon.ok) {
          return respon.json();
        }
        return Promise.reject(
          new Error(`По Вашому запиту нічого не знайдено!`)
        );
      })
      .then(respon => {
        if (respon.hits.length === 0) {
          alert(`По Вашому запиту нічого не знайдено!`);
          return;
        }
        const hits = respon.hits.map(({ webformatURL, id, largeImageURL }) => ({
          webformatURL,
          id,
          largeImageURL,
        }));
        setResponse(prevResponse => [...prevResponse, ...hits]);
        setTotal(respon.total);
      })
      .finally(setLoading(false));
  }, [search, page]);

  const handleClick = () => {
    setPage(prevState => prevState + 1);
    setLoading(true);
  };

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      {response && <ImageGallery imageArray={response} loading={loading} />}
      <Div>
        {response.length !== 0 && response.length < total && (
          <Button onClick={handleClick} />
        )}
        {loading && <Loader />}
      </Div>
    </div>
  );
}
