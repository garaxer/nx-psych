import { defaultApi } from 'libs/shared-types/src/lib/api/api';
import {
  BookingResponseDto,
  BookingResponseDtoTypeEnum,
} from 'libs/shared-types/src/lib/api/generated/api';

const Booking = ({
  q,
  bookings,
}: {
  q: string;
  bookings: BookingResponseDto[];
}) => {
  if (q) {
    console.log(q);
  }

  return (
    <div>
      Bookings page
      <div>
        {bookings.map((b) => (
          <div key={b.id}>{b.title}</div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let bookings: BookingResponseDto[] = [];
  // Todo use q to search, or get 2 at a time. Display like reactivities
  try {
    const res = await defaultApi.bookingControllerGetAllReports({
      type: BookingResponseDtoTypeEnum.Inperson,
    });
    bookings = res.data;
  } catch (error) {
    console.log('Error connecting to server 1');
    console.log(error);
  }

  return {
    props: {
      q: context.query.q ?? '',
      bookings,
    },
  };
}

export default Booking;
