import { StyleSheetManager } from 'styled-components';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import { store } from './store';
import GlobalStyles from './styles/global';

export default function App() {
  return (
    <StyleSheetManager>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
      <GlobalStyles />
    </StyleSheetManager>
  );
}
