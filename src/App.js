import './App.css';
import NavBar from './Components/NavBar';
import Container from 'react-bootstrap/Container';
import InputFields from './Components/InputFields';
import Footer from './Components/Footer';


function App() {
  return (
    <>
		<NavBar/>

		<Container style={{
			marginTop : 20,
		}}>
			<InputFields/>
		</Container>
		<Footer/>
    </>
  );
}

export default App;
