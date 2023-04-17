import axios from "axios";

const Home = ({ restaurants, error }: any) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <ul>
      {restaurants.data.map((restaurant: any) => (
        <li key={restaurant.id}>{restaurant.attributes.name}</li>
      ))}
    </ul>
  );
};

Home.getInitialProps = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:1337/api/restaurants");
    const restaurants = res.data;
    return { restaurants };
  } catch (error) {
    return { error };
  }
};

export default Home;
