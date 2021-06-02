import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'
import useStyles from './styles'

const products = [
    { id: 1, name: 'Shooes', description: 'Good shooes', price: '$5', image: 'https://www.google.com/search?q=rhjcs+yfqr&tbm=isch&ved=2ahUKEwje2c_Jo_fwAhUHuSoKHVJyCmMQ2-cCegQIABAA&oq=rhjcs+yfqr&gs_lcp=CgNpbWcQAzIECAAQATIECAAQATIECAAQATIECAAQAToHCCMQ6gIQJzoCCAA6BQgAELEDOgYIABAKEAE6BAgAEApQ6n1Y_okBYPWKAWgBcAB4AIABYYgB1AaSAQIxMJgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=Epm2YN6IJIfyqgHS5KmYBg&bih=969&biw=1920&rlz=1C1GCEA_enBY935BY935#imgrc=0U0dXOofBFIjXM'},
    { id: 2, name: 'Macbook', description: 'Good macbook', price: '10', image: 'https://www.google.com/search?q=%D0%BC%D0%B0%D0%BA%D0%B1%D1%83%D0%BA&tbm=isch&ved=2ahUKEwj8w_G6o_fwAhUEyyoKHXKaDMgQ2-cCegQIABAA&oq=vfr%2Ceer&gs_lcp=CgNpbWcQARgAMgYIABAKEBg6BQgAELEDOgIIADoECAAQAzoGCAAQChABOgQIABABUJrVAVi83AFgqegBaABwAHgAgAFXiAGUBJIBATeYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=85i2YLz-KYSWqwHytLLADA&bih=969&biw=1920&rlz=1C1GCEA_enBY935BY935#imgrc=lgvlXht66jODHM'},
    { id: 3, name: 'Iphone', description: 'Good Iphone', price: '15', image: 'https://www.google.com/search?q=%D0%B0%D0%B9%D1%84%D0%BE%D0%BD&rlz=1C1GCEA_enBY935BY935&sxsrf=ALeKk03Rh_0EJdqBHasmUV5j1ax9hJG0tA:1622579441591&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiO7_C5o_fwAhXKlIsKHarnCeoQ_AUoAXoECAIQAw&biw=1920&bih=969#imgrc=BCdHVYvKXg2XtM'}
]


const Products = () => {
    const classes = useStyles()

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify='center' spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;