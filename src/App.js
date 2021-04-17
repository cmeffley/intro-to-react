import './App.css';
import Counter from './Counter';

const App = () => { 

  const array = [
    {
      appName: "Counter 1",
      counterValue: 100
    },
    {
      appName: "Counter 6",
      counterValue: 200
    },
    {
      appName: "Counter 3",
      counterValue: 300
    },
    {
      appName: "Counter 15",
      counterValue: 500
    },
  ];

  return (
    <>
    { array.map((counter, i) => <Counter key={i} appName={counter.appName} counterValue={counter.counterValue}/>)
    }
  
    </>
  )
}

export default App;
