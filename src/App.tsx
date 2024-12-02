import { StyleSheetManager } from 'styled-components';

import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

import GlobalStyles from './styles/global';

export default function App() {
  return (
    <StyleSheetManager>
      <RouterProvider router={router} />;
      <GlobalStyles />
    </StyleSheetManager>
  );
}
