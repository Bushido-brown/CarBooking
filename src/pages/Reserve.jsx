import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Buttons/Loading';
import CarDetail from '../../components/Cars/CarDetail';

function Reservation() {
  const [ReserveOpener, setReserveOpener] = useState(true);
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  const toggleReservation = () => {
    setReserveOpener(!ReserveOpener);
  };

  const { id } = useParams();

  const car = cars.filter((car) => car.id === Number(id))[0];

  return (
    <section
      className="grid md:grid-cols-[4fr,_1fr] gap-3 items-center justify-between p-4  md:p-8 md:pt-8 "
      id="Reservation"
    >
      {car && car.id ? (
        <>
          <img
            src={car.image}
            alt={car.name}
            className="rounded-3xl max-h-screen w-11/12 md:w-full object-cover"
          />
          <CarDetail
            id={Number(id)}
            name={car.name}
            carType={car.car_type}
            carBrand={car.brand}
            carPrice={car.fee_per_day}
            carColor={car.color}
            toggleReservation={toggleReservation}
            ReserveOpener={ReserveOpener}
          />
        </>
      ) : <Loading message="Loading Car information..." /> }
    </section>
  );
}

export default Reservation;
