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
          reviewList.map(item => <p key={item.id}>{item.content}</p>)
        ) : (
          <p>No reviews here ^_^</p>
        )}
      </div>
    </section>
  );
};

export default Reviews;
