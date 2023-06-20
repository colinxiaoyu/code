import './App.css';
import SearchCom from './component/searchCom';
import ResultCom from './component/resultCom';
import { useAtomValue } from 'jotai';
import { isDebouncingAtom } from '../state';
import { Suspense } from 'react';

function App() {

  const isDebouncing = useAtomValue(isDebouncingAtom);

  return (
    <main className="App">
      <SearchCom />

      <Suspense fallback={"Loading..."}>
        {isDebouncing ? "Loading..." : <ResultCom />}
      </Suspense>

    </main>
  );
}

export default App;
