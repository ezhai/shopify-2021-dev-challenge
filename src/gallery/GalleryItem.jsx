import { useCallback, useState } from 'react';
import T from 'prop-types';
import { keyframes, css } from '@emotion/react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIconFilled from '@mui/icons-material/Favorite';
import HeartIconOutlined from '@mui/icons-material/FavoriteBorderOutlined';

const ItemCard = styled(Card)`
  overflow: visible;
`;

const ItemContent = styled(CardContent)`
  padding: 1rem 1.5rem;
`;

const ItemHeader = styled(CardHeader)`
  & .MuiCardHeader-title {
    font-weight: bold;
  }
`;

const ItemInfo = styled.div`
  padding: 1rem 1.5rem 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const heartAnim = keyframes`
  from {
    transform: scale(1);
  }
  25% {
    transform: scale(4);
  }
  to {
    transform: scale(1);   
  }
`;

const HeartIconFilled = styled(FavoriteIconFilled)`
  color: #ED4956;
  animation: ${(props) => props.animate && css`${heartAnim} 0.96s 1`};
`;

const GalleryItem = ({ item, onItemLiked }) => {
  const [animate, setAnimate] = useState(false);

  const handleLike = useCallback(() => {
    onItemLiked(item.id);
    setAnimate(true);
  }, [item, onItemLiked]);

  const mediaType = item.media_type === 'video' ? 'iframe' : 'img';
  const HeartIcon = item.meta.userLiked ? HeartIconFilled : HeartIconOutlined;

  return (
    <ItemCard>
      <CardMedia component={mediaType} onDoubleClick={handleLike} src={item.url} />
      <ItemInfo>
        <CardActions>
          <IconButton aria-label="like the post" onClick={handleLike}>
            <HeartIcon animate={animate} fontSize="large" />
          </IconButton>
          <Typography>{`${item.meta.likes} like${item.meta.likes === 1 ? '' : 's'}`}</Typography>
        </CardActions>
        <Typography>{item.date}</Typography>
      </ItemInfo>
      <ItemHeader title={item.title} />
      <ItemContent>
        <Typography align="left">{item.explanation}</Typography>
        <br />
        <Typography align="left" color="text.primary">{`© ${item.copyright || 'unknown'}`}</Typography>
      </ItemContent>
    </ItemCard>
  );
};

GalleryItem.propTypes = {
  item: T.shape({
    id: T.string.isRequired,
    title: T.string.isRequired,
    media_type: T.string.isRequired,
    date: T.string.isRequired,
    url: T.string.isRequired,
    explanation: T.string.isRequired,
    copyright: T.string,
    meta: T.shape({
      likes: T.number.isRequired,
      userLiked: T.bool.isRequired,
    }),
  }).isRequired,
  onItemLiked: T.func.isRequired,
};

export default GalleryItem;
