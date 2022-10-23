import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFilmReview } from 'services/api';

const Reviews = () => {
  const [reviewList, setreviewList] = useState([]);
  const location = useLocation();
  const movieId = location.state.movieId;

  useEffect(() => {
    async function getFilmReviewInfo() {
      const review = await getFilmReview(movieId);
      setreviewList(review.results);
    }
    getFilmReviewInfo();
  }, [movieId]);
  return (
    <section>
      <div>
        {reviewList.length !== 0 ? (
          <ul>
            {reviewList.map(({ id, author, content }) => (
              <li key={id}>
                <p>
                  <b>{author}</b>
                </p>
                <p>{content}</p>
                <br />
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews here ^_^</p>
        )}
      </div>
    </section>
  );
};

export default Reviews;
