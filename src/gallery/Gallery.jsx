import { useMemo } from 'react';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GalleryItem from './GalleryItem';
import Loading from './LoadingComponent';
import NoItems from './NoItemsComponent';
import useNasaImages from '../hooks/useNasaImages';

const GalleryContent = styled.div`
  width: 60vw;

  @media screen and (max-width: 600px) {
    width: 85vw;
  }
`;

const GalleryHeader = styled.div`
  margin: 10vh 10vw 5vh 10vw;
`;

const Gallery = () => {
  const [items, onItemLiked, isLoading] = useNasaImages();

  const galleryContent = useMemo(() => {
    if (!isLoading && items.length === 0) {
      return <NoItems />;
    }
    return (
      <>
        <GalleryContent>
          <Grid container spacing={6}>
            {items.map((item) => (
              <Grid key={item.id} item sm={12}>
                <GalleryItem item={item} onItemLiked={onItemLiked} />
              </Grid>
            ))}
          </Grid>
        </GalleryContent>
        {isLoading && <Loading />}
      </>
    );
  }, [items, onItemLiked, isLoading]);

  return (
    <>
      <GalleryHeader>
        <Typography variant="h3">
          Spacetagram
        </Typography>
        <Typography>
          Powered by NASA&apos;s Astronomy Photo of the Day API
        </Typography>
      </GalleryHeader>
      {galleryContent}
    </>
  );
};

export default Gallery;
