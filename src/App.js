import React, { useCallback, useRef, useState} from 'react';
import Bed from "./components/Bed";

import './App.scss';


const App = () => {

  const [data, setData] = useState(
    [
      {'component' : <Bed />, id: 1},
      {'component' : <Bed />, id: 2},
      {'component' : <Bed />, id: 3},
      {'component' : <Bed />, id: 4},
      {'component' : <Bed />, id: 5},
      {'component' : <Bed />, id: 6},
      {'component' : <Bed />, id: 7},
      {'component' : <Bed />, id: 8},
    ]
  );

  const observer = useRef();
  const lastElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setData(
          [...[...data],
          ...[{'component' : <Bed />, id: data.length + 2},
          {'component' : <Bed />, id: data.length + 3},
          {'component' : <Bed />, id: data.length + 4}]]
          );
    }});
    if (node) {
      observer.current.observe(node);
    }
  }, [data]);

  return (
    <div className="app">
      <div className="app__wrapper">
        {
          data.map((item) => {
              if (data.length === item.id) {
              return (
              <div
                className='app__wrapper__item'
                ref={lastElementRef}
                key={item.id}
              >
                {item.component}
              </div>
              )
            } else {
              return (
                <div
                  className='app__wrapper__item'
                  key={item.id}
                >
                  {item.component}
                </div>
              )
            }})
        }
      </div>
    </div>
  );
};

export default App;
