import { Col, Container, Row } from "react-bootstrap"
import SingleArticle from "./SingleArticle"
import { useEffect, useState } from "react"
import { Article } from "../interfaces/Article"

const Home = () => {
    
    const [articles, setArticles] = useState<Article[]>([])

    const getArticles = async() => {
        try {
            const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles")
            if(resp.ok) {
                const res = await resp.json()
                setArticles(res.results)
            }
            else {
                throw new Error;
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        articles && (
        <Container className="mt-5">
            <h1>Articles</h1>
            <Row>
            {articles.map(article  => {
                
            <Col xs={12} md={3}>
            <SingleArticle key={article.id} article={articles}/>
            </Col>})}
            </Row>
        </Container>)
    )
}
export default Home