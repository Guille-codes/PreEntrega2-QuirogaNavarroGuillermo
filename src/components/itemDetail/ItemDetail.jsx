import React from 'react'
import { Container, Card, Row, Text, Spacer } from "@nextui-org/react";

const ItemDetail = ( {product} ) => {
  return (
        <Container xs css={{margin:"70px"}} justify="start">
          <Text h1 >{product.name}</Text>
        <Card css={{ $$cardColor: '$colors$white' }}>
          <Card.Body>
            <Row justify="start" align="center">
              <Text h6 size={15} color="#211617" css={{ m: 0 }}>
              <h2>Descripción</h2>
              <Spacer y={0.5} />
              {product.description}
              </Text>
            </Row>
          </Card.Body>
        </Card>
      </Container>
  )
}

export default ItemDetail