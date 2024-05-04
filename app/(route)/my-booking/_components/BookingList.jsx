import React from 'react';
import moment from 'moment';
import CancelAppointment from './CancelAppointment';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

function BookingList({ bookingList, updateRecord }) {
  const onDeleteBooking = (item) => {
    console.log(item);
    GlobalApi.deleteBooking(item.id).then(resp => {
      console.log(resp);
      if (resp) {
        toast('Booking Deleted Successfully!');
        updateRecord();
      }
    });
  };

  const today = moment().startOf('day');

  const upcomingBookings = bookingList.filter(item => {
    const bookingDate = moment(item.attributes.Date);
    return bookingDate.isSameOrAfter(today);
  });

  const expiredBookings = bookingList.filter(item => {
    const bookingDate = moment(item.attributes.Date);
    return bookingDate.isBefore(today);
  });

  return (
    <div>
      {upcomingBookings.length > 0 && (
        <>
          <h2 className="font-semibold text-lg mt-6">Upcoming Bookings</h2>
          {upcomingBookings.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 mt-4">
              <h3 className="text-xl font-semibold">
                {item.attributes.cast?.data?.attributes?.Name || 'Unknown Name'}
                <CancelAppointment onContinueClick={() => onDeleteBooking(item)} />
              </h3>
              <p>Appointment On: {moment(item.attributes.Date).format('DD-MMM-YYYY')}</p>
              <p>At Time: {item.attributes.Time}</p>
            </div>
          ))}
        </>
      )}

      {expiredBookings.length > 0 && (
        <>
          <h2 className="font-semibold text-lg mt-6">Expired Bookings</h2>
          {expiredBookings.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 mt-4">
              <h3 className="text-xl font-semibold">
                {item.attributes.cast?.data?.attributes?.Name || 'Unknown Name'}
                <CancelAppointment onContinueClick={() => onDeleteBooking(item)} />
              </h3>
              <p>Appointment On: {moment(item.attributes.Date).format('DD-MMM-YYYY')}</p>
              <p>At Time: {item.attributes.Time}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default BookingList;
