# Example of dynamical import with problem using bable 7.9

## Create new project

npx create-react-app my-app
cd my-app/
rm src/App.css src/index.css src/logo.svg
mkdir src/MyModule

Create file **renderMyModule.js** and add code as below

```
import React from 'react';

const MyModule = () => (
  <>
    <h1>My Module</h1>
    <p>This module is loaded with dynamical import ...</p>
  </>
);

export default MyModule;
```

Update **App.js** :

```
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
```

And remove useless import from **index.js**
```
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```

## Run

```
yarn start
```


# Version

nodeJS              13.14.0  
npx                 6.14.4  
create-react-app    3.3.0  


