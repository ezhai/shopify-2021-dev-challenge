import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import { v4 as uuid } from 'uuid';

const MAX_RETRIES = 3;
const IMAGE_SET_SIZE = 16;

/**
 * Retrieves image metadata from local storage.
 *
 * @returns a map from image date to image metadata.
 */
const getImageMetadata = () => {
  let imageMetadata = {};
  try {
    imageMetadata = JSON.parse(localStorage.getItem('spacetagram') ?? '{}') ?? {};
  } catch {
    // pass
  }
  return imageMetadata;
};

/**
 * Queries items from NASA's Astronomy Picture of the Day API.
 *
 * @returns list of items that were queried.
 */
const queryNasa = async (startDate, endDate, retries = MAX_RETRIES) => {
  const req = new Request(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&start_date=${startDate}&end_date=${endDate}`,
    {},
  );
  const imageMetadata = getImageMetadata();

  return fetch(req)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`Error: ${res.status}`);
    })
    .then((data) => data.map((item) => ({
      ...item,
      id: uuid(),
      meta: {
        ...(imageMetadata[item.date] ?? {}),
        likes: imageMetadata[item.date]?.likes ?? Math.floor(Math.random() * 10),
        userLiked: imageMetadata[item.date]?.userLiked ?? false,
      },
    })))
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(`Failed to fetch from NASA API. Retries remaining: ${retries}`, err);
      if (retries > 1) {
        return queryNasa(startDate, endDate, retries - 1);
      }
      return [];
    });
};

/**
 * Converts a Date object to YYYY-MM-DD.
 * @param {Date} date date to covert
 *
 * @returns a string representing a date in YYYY-MM-DD format.
 */
const toNasaDate = (date) => date.toISOString().split('T')[0];

/**
 * Hook to query images from a NASA API, store them client-side, and update them.
 *
 * @returns the images, a callback to update the images, and the query state
 */
const useNasaImages = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const endDate = useRef(new Date());

  /**
   * Load the next set of images.
   */
  const loadImages = useCallback(async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);

    // set the dates to load the next set of images
    const startDate = new Date(endDate.current);
    startDate.setDate(startDate.getDate() - IMAGE_SET_SIZE);

    // fetch the images from NASA
    const startDateString = toNasaDate(startDate);
    const endDateString = toNasaDate(endDate.current);

    const queriedImages = await queryNasa(startDateString, endDateString);
    const allImages = [...images, ...queriedImages].sort((a, b) => b.date.localeCompare(a.date));

    // set the endDate to be the first image in the next set
    endDate.current = startDate;
    endDate.current.setDate(endDate.current.getDate() - 1);

    // update local state
    setImages(allImages);
    setIsLoading(false);
  }, [images, isLoading]);

  /**
   * Query the first set of images on component mount.
   */
  useEffect(() => {
    loadImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * Add listeners to load more images when the user scrolls to the bottom of the page.
   */
  useEffect(() => {
    const handleScroll = () => {
      // eslint-disable-next-line max-len
      if (window.innerHeight + document.documentElement.scrollTop + 10 >= document.scrollingElement.scrollHeight) {
        loadImages();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadImages]);

  /**
   * Toggles the "liked" status of gallery items when an item is liked/unliked.
   *
   * @param {string} itemId id of the item the user has liked/unliked.
   */
  const handleImageLiked = (itemId) => {
    const updatedItems = images.map((item) => {
      if (item.id !== itemId) {
        return item;
      }
      return {
        ...item,
        meta: {
          ...item.meta,
          likes: item.meta.userLiked ? item.meta.likes - 1 : item.meta.likes + 1,
          userLiked: !item.meta.userLiked,
        },
      };
    });

    // update image metadata in local storage
    const imageMetadata = getImageMetadata();
    updatedItems.forEach((image) => {
      imageMetadata[image.date] = image.meta;
    });
    try {
      localStorage.setItem('spacetagram', JSON.stringify(imageMetadata));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    setImages(updatedItems);
  };

  return [images, handleImageLiked, isLoading];
};

export default useNasaImages;
