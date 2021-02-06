const players = [
  {
    name: "Guil",
    score: 50
  },
  {
    name: "Treasure",
    score: 85
  },
  {
    name: "Ashley",
    score: 95
  },
  {
    name: "James",
    score: 80
  }
];

const Header = (props) => {
 
  return (
  <header>
    <h1>{props.title}</h1>
    <span className="stats">{props.totalPlayers}</span>
  </header>
  );

}


const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">{props.name}</span>

      <Counter score={props.score}/>
    </div>
  );
}


const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"></button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={1}/>

      {/*players list */}

     
      <Player name="Razianne" score={30}/>
      <Player name="Kezianne" score={20}/>  
      <Player name="Sol" score={60}/>
      <Player name="Amanda" score={40}/>
      <Player name="Collins" score={40}/>

    </div>
  );
  


}


ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);






