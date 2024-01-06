import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { Card, Image, Button } from 'semantic-ui-react';
import { ProductService } from '../services/productService';
function ProductDetail() {
    let { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        let productService = new ProductService();
        productService.getByProductId(id).then(
            result => setProduct(result.data)
        )
    }, [id])
    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Image
                        floated='center'
                        size='small'
                        src={product.thumbnail} wrapped ui={false}
                    />
                    <Card.Content>

                        <Card.Header>{product.title}</Card.Header>
                        <Card.Meta>{product.category}</Card.Meta>
                        <Card.Description>
                            <strong>{product.description}</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Sepete Ekle
                            </Button>
                            <Button basic color='red'>
                                Sepet Kontrol
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                {/* Diğer kartlar da benzer şekilde güncellenmeli */}
            </Card.Group>
        </div>
    );
}

export default ProductDetail;
