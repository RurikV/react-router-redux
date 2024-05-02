import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HomePageState } from "../store/slices/HomePage";



export const HomePage: FC = () => {

  const homePageState: HomePageState = useSelector((state: any) => state.homePage);

  return <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>

    {homePageState?.news?.map(item =>
      <Card style={{ width: '18rem' }} key={item.id}>
        <Card.Header>
          <Card.Title>{item.group}</Card.Title>
        </Card.Header>
        <Card.Body style={{ minHeight: "100px" }}>
          <Card.Text>{item.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" href={item.url} target="_blank">Подробнее</Button>
        </Card.Footer>
      </Card>
    )}
  </div>
};
