import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    type: "video",
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": process.env.RAPID_API_Key,
    "x-rapidapi-host": process.env.RAPID_HOST_Key,
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
