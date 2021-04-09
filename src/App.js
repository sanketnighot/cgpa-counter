import './App.css';
import NavBar from './Components/NavBar';
import Container from 'react-bootstrap/Container';
import InputFields from './Components/InputFields';
import Footer from './Components/Footer';


function App() {
  return (
    <>
			<div style={{width: '100%'}}>
			<NavBar />
			</div>
		<div className="container">
			
				<div className="row" style={{marginTop : 70, scroll : true}}>
				<Container style={{
					marginTop : 20,
				}}>
					<InputFields/>
				</Container>
				</div>
			
			<Footer/>
			<br/><br/>
		</div>
    </>
  );
}

export default App;
