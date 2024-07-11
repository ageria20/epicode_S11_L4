import { Col, Container, Row, Image } from "react-bootstrap"
import { Article } from "../interfaces/Article"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"




const Details = () => {

    const params = useParams()
    const [articleDet, setArticleDet] = useState<Article | null>(null)


    const detailsFetch = async() => {
        try {
            const resp = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${params.id}`)
            if(resp.ok) {
                const res = await resp.json()
                setArticleDet(res)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const dateConversion = (dateValue: Date) => {
        const date = new Date(dateValue)
        return date.toLocaleString()
    }


useEffect(() => {
    detailsFetch()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

    return (
        articleDet && <Container className="mt-5">
            <h1 className="mb-4">{articleDet.title}</h1>
            <Row>
                <Col xs={4}>
                    <Image src={articleDet?.image_url} className="w-100"/>
                </Col>
                <Col xs={8}>
                <Row className="flex-column justify-content-between">
                   
                    <div>
                        <p className="lead">{articleDet.summary}</p>
                        <a className="link-offset-2 link-underline link-underline-opacity-0" href={articleDet.url}>Check the link here 👈</a>
                        </div>
                        <div className="d-flex  justify-content-between align-items-end mt-auto">
                            
                            <p>Published: {dateConversion(articleDet.published_at)}</p>
                            <p>Last update: {dateConversion(articleDet.updated_at)}</p>
                        </div>
                    
                </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Details