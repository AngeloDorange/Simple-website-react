import './App.css';
import Header from './components/header/header'
import About from './components/about/about'
import Services from './components/services/services'
import Form from './components/form/form'
import Footer from './components/footer/footer'


function App() {
    return (
        <div className="App">
           <Header /> <About />  <Services /> <Form /> <Footer />
        </div>
    )
}

export default App;