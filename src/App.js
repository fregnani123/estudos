import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import axios from 'axios';

function App() {
  const count1 = useSelector(state => state.counter1.count);
  const count2 = useSelector(state => state.counter2.count);
  const count3 = useSelector(state => state.counter3.count);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const urlGetProdutoDate = 'http://204.216.187.179:3000/findProduto';
  const auth = 'Basic ' + btoa('Freg123:Freg_1308');

  useEffect(() => {
    axios.get(urlGetProdutoDate, {
      headers: {
        'Authorization': auth
      }
    })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar pedidos:', error.response ? error.response.status : error.message);
      });
  }, []);

  const renderData = () => {
    return data.map((produto, index) => (
      <div key={index}>
        <h2>{produto.nome}</h2>
        <p>Categoria: {produto.categoria}</p>
        <p>Preço: {produto.preco}</p>
        {/* Adicione mais campos conforme necessário */}
      </div>
    ));
  };

  return (
    <div>
      <div>
        <p>Contador 1</p>
        <h1>Contador: {count1}</h1>
        <button onClick={() => dispatch(increment('counter1'))}>Incrementar</button>
        <button onClick={() => dispatch(decrement('counter1'))}>Decrementar</button>
      </div>

      <div>
        <p>Contador 2</p>
        <h1>Contador: {count2}</h1>
        <button onClick={() => dispatch(increment('counter2'))}>Incrementar</button>
        <button onClick={() => dispatch(decrement('counter2'))}>Decrementar</button>
      </div>

      <div>
        <p>Contador 3</p>
        <h1>Contador: {count3}</h1>
        <button onClick={() => dispatch(increment('counter3'))}>Incrementar</button>
        <button onClick={() => dispatch(decrement('counter3'))}>Decrementar</button>
      </div>

      <div>
        <h2>Produtos:</h2>
        {renderData()}
      </div>
    </div>
  );
}

export default App;
