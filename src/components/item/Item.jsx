
import {Link} from "react-router-dom"
import styles from "./Item.module.css"
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const Item = ({element}) => {


  return (
    // <div className={styles.card}>
    //   <h2>{element.name}</h2>
    //   <img src={element.img} alt="" className={styles.imgCard} />
    //   <h3>${element.price}</h3>
    //   <Link to={`/itemDetail/${element.id}`}>Ver detalle</Link>
    // </div>
    <Card css={{ w: "300px", h: "400px", marginTop: "100px", margin:"80px"}} className={styles.card}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffff">
          Nuevo
        </Text>
        <Text h3 color="#211617">
          {element.name}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={element.img}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row align="center">
        <Col>
          <Text color="#211617" size={20}>
            ${element.price}
          </Text>
          <Text color="#211617" size={12}>
            Cantidad disponible: {element.stock}
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Link to={`/itemDetail/${element.id}`}>
            <Button shadow color="white" auto>
              <Text
                css={{ color: "#211617" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Ver detalles
              </Text>
            </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  );
};

export default Item;
