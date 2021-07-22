import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Row, Col } from 'antd';
import productActions from '../redux/Product/actions';
import { Card } from 'antd';
const { Meta } = Card;

function Product() {
    const { products, loader } = useSelector(state => state.productReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: productActions.GET_PRODUCT,
            payload: { 'page': '1' },
        });
    }, []);

    const handleDelete = (productId) => {
        dispatch({
            type: productActions.DELETE_PRODUCT,
            payload: { 'product_id': productId },
        });
    };

    return (
        <div className="dashboard">
            {loader ?
                <div>Loading</div> :
                <Row>
                    {products.map((product, index) => (
                        <Col span={8} key={index}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={product.image} />}
                            >
                                <Meta title={product.name} description={product.description} />
                                <input value="Delete" type="button" onClick={() => handleDelete(product.id)}></input>
                            </Card>
                        </Col>
                    ))}
                </Row>
            }
        </div>
    );
}

export default Product;
