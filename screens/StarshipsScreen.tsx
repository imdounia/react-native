import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { Item } from 'react-native-paper/lib/typescript/components/List/List';
import { useQuery } from 'react-query';
import AppLayout from '../src/components/AppLayout';
import fetchAsync from '../src/lib/fetch';


const ItemFilm = (props) => {
  console.log(props);
  return(
    <React.Fragment>
      {props.films.map((film) => {
        return(
          <Text key={film}>{film}</Text>
        )
      })}
    </React.Fragment>
  )
}

const StarshipContainer = () => {
    // 🥑 Query data with fetchAsync
    const { status, error, data } = useQuery('starships', () =>
     fetchAsync(`https://swapi.dev/api/starships/`)
     );

     if (status === 'loading') {
      return (
        <View>
          <ActivityIndicator size="large" />
          <Text>Loading</Text>
        </View>
      );
    }
  
    if (status === 'error') {
      return (
        <View>
          <Text>Error !!! | {JSON.stringify(error)}</Text>
        </View>
      );
    }


     if (status === 'success') {
      return (
        <View>
          {data.results.map((ship) => {
            return (
              <View style={styles.card} key={ship.name}>
                <Text>{ship.name}</Text>
                <Text>{ship.model}</Text>
                <Text>{ship.manufacturer}</Text>
                <Text>{ship.cost_in_credits} credits</Text>
                <ItemFilm films={ship.films}></ItemFilm>
                <Button mode="contained">Buy the starship</Button>
              </View>
            );
          })}
        </View>
      );
    }
  
    return;
  };
  
  const StarShipScreen = () => {
    return (
      <AppLayout title="Starships">
        <ScrollView>
          <StarshipContainer />
        </ScrollView>
      </AppLayout>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'pink',      
    },
    card: {
      margin: 20,
      padding: 20,
      backgroundColor: 'tomato',
      borderRadius: 20,
    },
    safeContainer: {
      backgroundColor: '#0000',
    },
  });
  
export default StarShipScreen;