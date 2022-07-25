import PlaceCard from '../place-card/place-card';
import { OfferType } from '../../types/offer-type';
import { useState } from 'react';

type PlaceCardListProps = {
  rooms: OfferType[];
};

export default function PlaceCardList(props: PlaceCardListProps): JSX.Element {
  const { rooms } = props;
  const [, setCurrentID] = useState(NaN);

  const callback = (id: number) => setCurrentID(id);

  return (
    <div className='cities__places-list places__list tabs__content'>
      {rooms.map((room) => (
        <PlaceCard key={room.id} room={room} callback={callback}></PlaceCard>
      ))}
    </div>
  );
}
