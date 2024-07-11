import { Button, Card, Container} from "react-bootstrap"
import { Article } from "../interfaces/Article"
import { useNavigate } from "react-router-dom"


 interface SingleArticleProps {
    article: Article
 }

const SingleArticle = ({ article }:  SingleArticleProps) => {
    

    const navigate = useNavigate()
    
    return (
        <Container>
                <Card>
      <Card.Img variant="top" src={article.image_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.summary}
        </Card.Text>
        <Button variant="primary" onClick={() => {
            navigate("/details/" + article.id)
        }}>Details</Button>
      </Card.Body>
    </Card>
        </Container>
    )
}
export default SingleArticle