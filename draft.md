import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import StarshipsScreen from './src/screens/StarshipsScreen';

const App = () => {

    const queryClient = new QueryClient;

    return (
        <QueryClientProvider client={queryClient}>
                <StarshipsScreen/>
         </QueryClientProvider>
    );

};

export default App;

/\*const App = () => {

    const renderItem = ({ item }) => {
        return(
            <View style={styles.card}>
            <Text>
                {item.name}
            </Text>
            <Text>
                {item.model}
            </Text>
            <Text>
                {item.manufacturer}
            </Text>
            <Text>
                {item.crew}
            </Text>
            </View>
        )
        }

return (
<SafeAreaView style={styles.safeContainer}>
<View style={styles.container}>
<FlatList
        data={data.results}
        renderItem={renderItem}
        />
</View>
</SafeAreaView>
);
};\*/

const StarshipsData = () => {
// 🥑 Query data with fetchAsync
const { status, error, data } = useQuery('starships', () =>
fetchAsync(`https://swapi.dev/api/starships/`)
);

     if(status === 'loading'){
         <View>
             <ActivityIndicator size="large"/>
             <Text>Loading...</Text>
         </View>
     }
     if(status === 'error'){
         <View>
             <Text>Error !</Text>
         </View>
     }

     return (
        /*<View>{JSON.stringify(data.results.map)}</View>*/
         data.results.map((starship) => (
            <Card style={styles.card}>
            <Card.Title title={starship.name} subtitle={starship.model} />
            <Card.Content>
              <Title>Manufacturer</Title>
              <Text>{starship.manufacturer}</Text>
              <Title>{starship.cost_in_credits} credits</Title>
            </Card.Content>
            <Card.Actions>
              <Button mode='contained'>Buy this spaceship</Button>
            </Card.Actions>

          </Card>
         ))
     )

}

const App = () => {

     const queryClient = new QueryClient;

    return (
        <QueryClientProvider client={queryClient}>
            <AppLayout title="Starships">
                <StarshipsData/>
            </AppLayout>
        </QueryClientProvider>
    );

};

const App = () => {

     const queryClient = new QueryClient;

    return (
        <QueryClientProvider client={queryClient}>
            <AppLayout title="Starships">
                <FlastList/>
            </AppLayout>
        </QueryClientProvider>
    );

};
