import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const Review = ({ checkoutToken }) => {
  return (
    <>
      <Typography variant='h6' gutterBottom>Товары в корзине</Typography>
      <List disablePadding>
          {checkoutToken.live.line_items.map((product) => (
            <ListItem style={{padding: '10px 0'}} key={product.name}>
              <ListItemText primary={product.name} secondary={`Кол-во: ${product.quantity}`}/>
              <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>
            </ListItem>
          ))}
          <ListItem style={{padding: '10px 0'}}>
            <ListItemText primary='Общая сумма заказа'/>
            <Typography variant='subtitle' style={{ fontWeight: 700}}>
              {checkoutToken.live.subtotal.formatted_with_symbol}  
            </Typography> 
          </ListItem>
      </List>
    </>
  )
}

export default Review
