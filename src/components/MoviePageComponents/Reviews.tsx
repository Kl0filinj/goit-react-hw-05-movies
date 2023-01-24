import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFilmReview } from 'services/api';
import { Box, Heading } from '@chakra-ui/react';

const Reviews: React.FC = props => {
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
    <Box as="section" mt="7">
      <Box bgColor="gray.700" p="8" borderRadius="sm">
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
          <Heading as="h2" fontSize="2xl">
            No reviews here ^_^
          </Heading>
        )}
      </Box>
    </Box>
  );
};

export default Reviews;
