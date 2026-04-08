import BookCall from './pages/BookCall';
import Home from './pages/Home';

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  return pathname === '/book-call' ? <BookCall /> : <Home />;
}

export default App;
