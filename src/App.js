import './App.css';
import AllBookPage from './components/AllBooks/AllBookPage';
import BookPage from './components/BookPage/BookPage';
import RecommendBooks from './components/RecommendBooks/RecommendBooks';
import SearchBooks from './components/Search/Search Book/SearchBooks';
import SmallBook from './components/SmallBook/SmallBook';
import SearchPanel from './components/Search/Search Panel/SearchPanel';
import Tags from './components/Tags/Tags/Tags';

function App() {
  return (
    <>
      {/* <SmallBook /> */}
      {/* <RecommendBooks /> */}
      {/* <SearchBooks /> */}
      <SearchPanel />
      <Tags />
      {/* <AllBookPage /> */}
      {/* <BookPage /> */}

    </>
  );
}

export default App;
