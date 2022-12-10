
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navbar from "./components/navBar/NavBar"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container, Card, Row, Text} from "@nextui-org/react";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />
        <Route path="/cart" element={ 
        <Container xs css={{margin:"70px"}} justify="center">
        <Card css={{ $$cardColor: '$colors$white' }}>
          <Card.Body>
            <Row justify="start" align="center">
              <Text h6 size={30} color="#211617" css={{ m: 0 }}>
                Contenido del carrito.
              </Text>
            </Row>
          </Card.Body>
        </Card>
        </Container>}/>
        <Route path="*" element={ <h2>Esta url no existe.</h2> } />
      </Routes>
    </BrowserRouter>
  );
  
}

export default App;
