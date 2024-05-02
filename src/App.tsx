import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppRouter } from './router/AppRouter';
import { Provider } from 'react-redux';
import store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <AppRouter />
          </Layout>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
