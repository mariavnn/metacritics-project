import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import {useState, useEffect} from "react";
import { Screen } from "../components/Screen";
import { Logo } from "../components/Logo";
import { AnimatedGameCard } from "../components/GameCard";
import { getLatestGames } from "../lib/metacritic";


export default function Main() {
  const [games, setGames] = useState([]);

  // useEffect(() => {
  //   getLatestGames().then((games) => {
  //     setGames(games);
  //   });
  // }, []);

  return (
    <Screen>
      {games.length === 0 ? (
        <ActivityIndicator/>
      ): (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({item, index}) => (
            <AnimatedGameCard index={index} game={item}/>
          )}
        />
      )}
      {/* <View style={styles.container}>
        <Logo/>
        <Text style={styles.text}>HOME </Text>
      </View> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  text:{
    fontSize: 20,
    color: "#fff",
  }
});