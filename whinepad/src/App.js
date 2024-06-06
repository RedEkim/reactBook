// import logo from './logo.svg';
import './App.css';
import Excel from './components/Excel';
import Discovery from './components/Discovery';

const headers = localStorage.getItem('headers');
const data = localStorage.getItem('data');

if(!headers) {
  // headers = ['Title', 'Year', 'Raiting', 'Comments'];
  // data = ['Red whine', '2021', '3', 'meh'];
}

const isDiscovery = window.location.pathname.replace(/\//g, '') === 'discovery';

function App() {

  if (isDiscovery) {
    return <Discovery />;
  }
  return (
    <div>
      <Excel 
        headers={headers} 
        initialData={data}
      />
    </div>
  );
}

export default App;
