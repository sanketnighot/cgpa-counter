import './App.css';
import NavBar from './Components/NavBar';
import Container from 'react-bootstrap/Container';
import InputFields from './Components/InputFields';

function App() {
  return (
    <>
		<NavBar/>

		<Container style={{
			marginTop : 20,
		}}>
			<InputFields/>
		</Container>
    </>
  );
}

export default App;
