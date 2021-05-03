import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import AppLayout from '../components/AppLayout';
import { useQuery } from 'react-query';
import fetchAsync from '../lib/fetch';
import { ActivityIndicator, Button, Modal, Portal, Provider } from 'react-native-paper';


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


    //for modal
     const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'blue', padding: 20 };


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
                
                <Portal>
                      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                             <Text>Expensive ship.</Text>
                      </Modal>
                </Portal>
                           <Button mode="contained" onPress={showModal}>
                                    Buy this Starship
                            </Button>                
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
          <Provider>
          <StarshipContainer />
          </Provider>
        </ScrollView>
      </AppLayout>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fbc4ab',      
    },
    card: {
      margin: 20,
      padding: 20,
      backgroundColor: '#f08080',
      borderRadius: 20,
    },
    safeContainer: {
      backgroundColor: '#0000',
    },
  });
  
export default StarShipScreen;