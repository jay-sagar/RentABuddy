const { default: axios } = require("axios");
import middleware from './middleware'; // Assuming middleware.js is in the same directory

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: 'https://rentabuddy-strapi.onrender.com/api',
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

const getCategory = async () => {
  // Call middleware if applicable (optional, see explanation below)
  // if (/* condition for authentication required */) {
  //   await middleware(req); // Assuming middleware accepts the request object
  // }

  const response = await axiosClient.get('/categories?populate=*');
  return response.data;
};

const getCastList = () => axiosClient.get('/casts?populate=*');

const getCastByCategory = (category) => axiosClient.get('/casts?filters[categories][Name][$in]='+category+"&populate=*");

const getCastById = (id) => axiosClient.get('/casts/'+id+"?populate=*")

const bookAppointment = (data) => axiosClient.post('/appointments', data);

// const sendEmail = (data) => axios.post('/api/sendEmail', data);

const getUserBookingList = (userEmail) => axiosClient.get("/appointments?[filters][Email][$eq]="+userEmail+"&populate=[casts][image][populate][0]=url&populate=*");

const deleteBooking = (id) => axiosClient.delete('/appointments/'+id);

export default {
  getCategory,
  getCastList,
  getCastByCategory,
  getCastById,
  bookAppointment,
  // sendEmail,
  getUserBookingList,
  deleteBooking
};
