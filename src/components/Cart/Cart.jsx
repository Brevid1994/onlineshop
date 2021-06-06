import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core'

import useStyles from './styles'
import CartItem from './Cartitem/CartItem'

const Cart = ({ cart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography varient='subtitle'>У вас нет товаров в корзинеб пора бы уже выбрать что-то и добавить!</Typography>
    )

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item}/>
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant='h4'>Итого к оплате: {cart.subtotal.formatted_with_symbol}</Typography>
            <div>
                <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Очистить корзину</Button>
                <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Оформить заказ</Button>
            </div>
        </div>
        </>
    )

    if(!cart.line_items) return 'Загрузка ...'

    return (
        <Container>
            <div className={classes.toolber} />
            <Typography className={classes.title} variant='h3' gutterBottom>Ваша корзина</Typography>
            { !cart.line_items.length ? <EmptyCart/> : <FilledCart/>}

        </Container>
    )
}
export default Cart
