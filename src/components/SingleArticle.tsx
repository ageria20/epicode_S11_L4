import { Button, Card, Container} from "react-bootstrap"
import { Article } from "../interfaces/Article"


 interface SingleArticleProps {
    article: Article
 }

const SingleArticle = ({ article }:  SingleArticleProps) => {
    

    
    return (
        <Container>
                <Card>
      <Card.Img variant="top" src={article.image_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.summary}
        </Card.Text>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
        </Container>
    )
}
export default SingleArticle