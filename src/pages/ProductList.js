import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Checkbox, Icon, Menu, Table } from 'semantic-ui-react'
import { ProductService } from '../services/productService';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';

export default function ProductList() {

    const dispatch = useDispatch()/* BİR FONKSİYONU ÇAĞIRMAK İÇİN useDispatch kullanılır */


    const [products, setProducts] = useState([]);
    //lifecyle hook
    useEffect(() => {
        let productService = new ProductService();
        productService.getProducts().then(
            result => setProducts(result.data.products)
        )
    }, [])//companent yüklendiğinde yapılması istenilen ne ise ilk bloğa yaz

    const handleAddToCart = (product) => {
        console.log(product);
        dispatch(addToCart(product))

    }
    return (//componentDidMount 
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ürün İsmi</Table.HeaderCell>
                        <Table.HeaderCell>Birim Fiyat</Table.HeaderCell>
                        <Table.HeaderCell>Stok Adeti</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Kategori</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        products.map(product => (
                            <Table.Row key={product.id}>
                                <Table.Cell><Link to={`/products/${product.id}`}>{product.title}</Link></Table.Cell>
                                <Table.Cell>{product.price}</Table.Cell>
                                <Table.Cell>{product.stock}</Table.Cell>
                                <Table.Cell>{product.description}</Table.Cell>
                                <Table.Cell>{product.category} </Table.Cell>
                                <Table.Cell><Button onClick={() => handleAddToCart(product)}>Sepete Ekle</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
