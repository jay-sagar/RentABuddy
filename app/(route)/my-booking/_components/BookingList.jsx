import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';
import moment from 'moment';
import Image from 'next/image';
import React from 'react';
import CancelAppointment from './CancelAppointment';
import GlobalApi from '@/app/_utils/GlobalApi';
import { toast } from 'sonner';

function BookingList({ bookingList, updateRecord }) {
  const onDeleteBooking = (item) => {
    console.log(item);
    GlobalApi.deleteBooking(item.id).then((resp) => {
      console.log(resp);
      if (resp) {
        toast('Booking Delete Successfully!');
        updateRecord();
      }
    });
  };

  const isExpired = (bookingDate, bookingTime) => {
    const currentDate = new Date();
    const bookingDateTime = new Date(bookingDate);
    const [hour, minute] = bookingTime.split(':');
    bookingDateTime.setHours(parseInt(hour, 10), parseInt(minute, 10));

    return bookingDateTime < currentDate;
  };

  return (
    <div>
      {bookingList.length > 0 ? (
        bookingList.map((item, index) => (
          <div key={index} className="flex gap-4 items-center border p-5 m-3 rounded-lg">
            <div className="flex flex-col gap-2 w-full">
              <h2 className="font-bold text-[18px] items-center flex justify-between">
                {item.attributes.cast?.data?.attributes?.Name || 'Unknown Name'}
                {!isExpired(item.attributes.Date, item.attributes.Time) && (
                  <CancelAppointment onContinueClick={() => onDeleteBooking(item)} />
                )}
              </h2>
              <h2 className="flex gap-2">
                <Calendar className="text-primary h-5 w-5" />
                Appointment On: {item.attributes.Date ? moment(item.attributes.Date).format('DD-MMM-YYYY') : 'Unknown Date'}
              </h2>
              <h2 className="flex gap-2">
                <Clock className="text-primary h-5 w-5" />
                At Time : {item.attributes.Time || 'Unknown Time'}
              </h2>
            </div>
          </div>
        ))
      ) : (
        <div className="h-[150px] w-full bg-slate-100 animate-pulse rounded-lg"></div>
      )}
    </div>
  );
}

export default BookingList;
