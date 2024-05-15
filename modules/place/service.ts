import axios from 'axios';

import { Place, Tag } from './interfaces';

export const fetchPlaces = async (): Promise<Place[] | null> => {
  try {
    const apiUrl = '/142c21c3e8e54ef36e33f5dc6cf54077/raw/94ebab16839484f06d42eb799e30d0a945ff1a1b/freshket-places.json'
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + apiUrl)

    return res?.data || null;
  } catch {
    return null;
  }
}

export const fetchTags = async (): Promise<Tag[] | null> => {
  try {
    const apiUrl = '/fa49e0a5c6100d50db781f28486324d2/raw/55bc966f54423dc73384b860a305e1b67e0bfd7d/freshket-tags.json'
    const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + apiUrl)

    return res?.data || null;
  } catch {
    return null;
  }
}
