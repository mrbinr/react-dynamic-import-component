import React from 'react';

const App = () => {
  const type = 'MyModule';
  const MyModule = React.lazy(() => import(`./${type}/render${type}`));

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <div className="App">
        <MyModule />
      </div>
    </React.Suspense>
  );
}

export default App;
