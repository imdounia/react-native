import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { MyStack } from './src/navigation/Navigator';
import StarshipsScreen from './src/screens/StarshipsScreen';



const App = () => {

    const queryClient = new QueryClient;
//<ApplicationProvider {...eva} theme={eva.dark}></ApplicationProvider>
//<MyStack/>
    return (
      
        <QueryClientProvider client={queryClient}>
          <NavigationContainer onStateChange={state => console.log('New state is', state)}>          
                <StarshipsScreen/>
            </NavigationContainer>
         </QueryClientProvider>
    );
  };



export default App;