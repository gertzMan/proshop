import { Row, Collapsefrom } from 'react-bootstrap'
import products from '../products'
const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            {products.map((product) => {
                <Col sm={12} md={6} lg={4} xl={3}>
                    <h3>{product.name}</h3>
                </Col>
            })}

        </>
    )
}
export default HomeScreen
