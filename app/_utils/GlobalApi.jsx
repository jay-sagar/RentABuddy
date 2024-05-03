const { default: axios } = require("axios");

const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL:'http://localhost:1337/api',
    headers:{
        'Authorization':`Bearer ${API_KEY}`
    }
})

const getCategory=()=>axiosClient.get('/categories?populate=*');

const getCastList=()=>axiosClient.get('/casts?populate=*');

const getCastByCategory = (category) =>axiosClient.get('/casts?filters[categories][Name][$in]='+category+"&populate=*");

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
    sendEmail,
    getUserBookingList,
    deleteBooking
}
