import React from 'react';

function Food({favorite}) {
  return <h1>I like {favorite}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food favorite="삼겹살" />
      <Food favorite="라면" />
      <Food favorite="김밥" />
      <Food favorite="오렌지" />
    </div>
  );
}

export default App;