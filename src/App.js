
import test from './testfile0'
/*

testfile0 отрабатывает без ошибок
в файлах testfile1, testfile2, testfile3 и testfile4 есть ошибки. Каждый из этих файлов в себе содержит описание того, что должна делать функция test
Необходимо исправить ошибки в файлах. И проверить, работает ли функция, как задумано, подключив соответствующий файл вместо текущего на второй строчке

*/

function App() {

  const argument = 200;

  return (
    <div className="App" style={{display:"flex", justifyContent:"center", alignItems:"center", height: "100vh"}}>
     <h1>Передадим аргумент {argument} и получим результат {test(argument)} </h1>
    </div>
  );
}

export default App;
