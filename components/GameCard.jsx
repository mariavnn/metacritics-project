import {
    View,
    Text,
    Image,
    StyleSheet,
    Animated,
    Pressable,
  } from "react-native";
  import React, { useEffect, useRef } from "react";

  import { Link } from "expo-router";
  import Colors from "../constants/Colors";
import { Score } from "./Score";
  
  export function GameCard({ game }) {
    return (
      <Link href={`/${game.slug}`} asChild>
        <Pressable style={styles.pressable}>
          <View key={game.slug} style={styles.card}>
            <Image source={{ uri: game.image }} style={styles.image} />
  
            <View style={styles.content}>
              <Text style={styles.title}>{game.title}</Text>
              <Score score={game.score} />
  
              <Text style={styles.description}>
                {game.description.slice(0, 100)}...
              </Text>
            </View>
          </View>
        </Pressable>
      </Link>
    );
  }
  
  export function AnimatedGameCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        delay: index * 500,
        useNativeDriver: true,
      }).start();
    }, [opacity, index]);
  
    return (
      <Animated.View style={{ opacity }}>
        <GameCard game={game} />
      </Animated.View>
    );
  }
  
  const styles = StyleSheet.create({
    card: {
      flexDirection: "row",
    },
    content: {
      marginLeft: 10,
    },
    image: {
      width: 107,
      height: 147,
      borderRadius: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
      marginVertical: 10,
    },
    description: {
      fontSize: 16,
      color: "#fff",
      flexShrink: 0,
    },
    pressable: {
      borderColor: "black",
      marginBottom: 20,
      marginTop: 10,
      backgroundColor: Colors.backgroundSecondary,
      borderRadius: 20,
      padding: 10,
    },
  });