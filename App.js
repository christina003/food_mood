import React, { useState, useRef, useEffect } from "react";
import { Alert, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import Login from "./components/Login/Login";
import HeaderBar from "./components/HeaderBar";
import Swiping from "./components/Swiping/Swiping";
import Matches from "./components/Matches/Matches";
import Profile from "./components/Profile/Profile";
import FooterBar from "./components/FooterBar";
import Loading from "./components/Loading";
import axios from "axios";
const YELP_API = require("./yelpAPI");

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [userLiked, setUserLiked] = useState([]);
  const [matches, setMatches] = useState([]);
  const [currentIndex, setIndex] = useState(0);
  const [login, setLogin] = useState(false);
  const [module, setModule] = useState("");
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("sacramento");
  const [count, setCount] = useState(0);
  const swipingRef = useRef(null);

  useEffect(() => {
    if (module === "profile" && count === 0) {
      yelpRestaurants(location, "profile");
      setCount(1);
    }
  }, [restaurants]);

  const yelpRestaurants = async (yelpLocation, currentModule) => {
    let yelpFul = axios.create({
      baseURL: "https://api.yelp.com/v3",
      headers: {
        Authorization: `Bearer ${YELP_API}`,
        "Content-type": "application/json",
      },
    });
    try {
      const { data } = await yelpFul("/businesses/search", {
        params: {
          location: `${location}`,
          term: "restaurant",
          limit: 50,
        },
      });
      const businesses = data.businesses;
      businesses.forEach(
        (business) => (business.groupLiked = Math.random() < 0.3)
      );
      setRestaurants(businesses);
      if (currentModule === "loading") {
        setModule("swiping");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllRestaurants = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/restaurants");
      setUserLiked(res.data.userLike);
      setMatches(res.data.match);
    } catch (err) {
      console.log(err);
    }
  };

  const getMatchedRestaurants = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/restaurants/matches"
      );
      setMatches(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const matchedRestaurant = async (restaurant) => {
    restaurant.userLiked = true;
    try {
      await axios.post(
        `http://localhost:3000/api/restaurants/matches`,
        restaurant
      );
      getMatchedRestaurants();
    } catch (err) {
      console.log(err);
    }
  };

  const userLikedRestaurant = async (restaurant) => {
    restaurant.userLiked = true;
    try {
      await axios.post(
        `http://localhost:3000/api/restaurants/userlikes`,
        restaurant
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = () => {
    setLogin(true);
    setModule("loading");
    getAllRestaurants();
    yelpRestaurants(location, "loading");
  };

  const handleMatchDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/restaurants/matches/${id}`);
      getMatchedRestaurants();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    setCount(0);
    yelpRestaurants(newLocation, "profile");
  };

  const nextRestaurant = () => {
    const newIndex =
      restaurants.length - 2 === currentIndex ? 0 : currentIndex + 1;
    setIndex(newIndex);
  };

  const handleLike = (currentRestaurant) => {
    if (currentRestaurant.groupLiked) {
      Alert.alert("Matched!", "Jason liked this too");
      matchedRestaurant(currentRestaurant);
      nextRestaurant();
    } else {
      userLikedRestaurant(currentRestaurant);
      nextRestaurant();
    }
  };

  const handleDislike = () => {
    nextRestaurant();
  };

  const handleLikeButton = () => {
    swipingRef.current.openLeft();
  };

  const handleDislikeButton = () => {
    swipingRef.current.openRight();
  };

  const handleModuleChange = (module) => {
    setModule(module);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <View style={styles.container}>
      {login === false && (
        <View style={styles.container}>
          <Login handleLogin={handleLogin} />
        </View>
      )}

      {login && (
        <View style={styles.container}>
          <HeaderBar handleModuleChange={handleModuleChange} />

          {module === "loading" && (
            <View>
              <Loading />
            </View>
          )}

          {module === "swiping" && (
            <View style={styles.swiperContainer}>
              <View style={styles.swiper}>
                {restaurants.length > 1 &&
                  restaurants.map(
                    (restaurant, index) =>
                      currentIndex === index && (
                        <Swiping
                          key={index}
                          ref={swipingRef}
                          currentIndex={currentIndex}
                          restaurants={restaurants}
                          handleLike={handleLike}
                          handleDislike={handleDislike}
                        ></Swiping>
                      )
                  )}
              </View>
              <FooterBar
                handleLikeButton={handleLikeButton}
                handleDislikeButton={handleDislikeButton}
              />
            </View>
          )}
          {module === "matches" && (
            <View>
              <Matches
                matches={matches}
                handleMatchDelete={handleMatchDelete}
              />
            </View>
          )}

          {module === "profile" && (
            <View>
              <Profile
                handleLogout={handleLogout}
                handleLocationChange={handleLocationChange}
                location={location}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swiper: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    paddingLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.5,
    elevation: 8,
  },
  swiperContainer: {
    flex: 1,
  },
});
