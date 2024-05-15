import { useEffect, useState } from 'react';

import { fetchPlaces, fetchTags } from './service';
import Card, { CardProps } from './components/Card';
import styles from './Place.module.css';

const Place = () => {
  const [places, setPlaces] = useState<CardProps[]>([])

  const fetchPlaceList = async () => {
    const resultPlaces = await fetchPlaces();
    const resultTags = await fetchTags();

    if (resultPlaces && resultTags) {
      const _places: CardProps[] = resultPlaces.map(item => {
        const tags = resultTags.filter(tagItem => item.tags.includes(tagItem.id));
        return {
          name: item.name,
          body: item.body,
          imgUrl: item.img_url,
          tags,
        }
      })
      setPlaces(_places);
    }
  }

  useEffect(() => {
    fetchPlaceList()
  }, [])

  return (
    <div className={styles.container}>
      {places.map(place => {
        return (
          <Card
            name={place.name}
            body={place.body}
            imgUrl={place.imgUrl}
            tags={place.tags}
          />
        )
      })}
    </div>
  )
}

export default Place;
