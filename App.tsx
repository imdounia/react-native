import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import StarshipsScreen from './screens/StarshipsScreen';



const App = () => {

    const queryClient = new QueryClient;

    return (
        <QueryClientProvider client={queryClient}>
                <StarshipsScreen/>
         </QueryClientProvider>
    );
  };



export default App;