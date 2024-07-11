import { Button, Card, Container} from "react-bootstrap"
import { Article } from "../interfaces/Article"


 interface SingleArticleState {
    article: Article
 }

const SingleArticle = ({ article }:  SingleArticleState) => {
    

    
    return (
        <Container>
                <Card>
      <Card.Img variant="top" src={article.image_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.summary}
        </Card.Text>
        <Button variant="primary">Get Details</Button>
      </Card.Body>
    </Card>
        </Container>
    )
}
export default SingleArticle