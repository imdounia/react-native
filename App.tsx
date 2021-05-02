// App.tsx
/*import  LoginScreen  from './src/screens/LoginScreen';
import StorybookUIRoot from './storybook';
// Should we show storybook instead of our app?
//
// ⚠️ Leave this as `false` when checking into git.
const SHOW_STORYBOOK = false;
const UI = SHOW_STORYBOOK && __DEV__ ? StorybookUIRoot : LoginScreen;
export default UI;
*/

import React from 'react';
import { Provider } from 'react-native-paper';
import { QueryClientProvider, QueryClient } from 'react-query';
import StarshipsScreen from './src/screens/StarshipsScreen';



const App = () => {

    const queryClient = new QueryClient;

    return (
        <QueryClientProvider client={queryClient}>
          <Provider>
                <StarshipsScreen/>
          </Provider>
         </QueryClientProvider>
    );
  };



export default App;