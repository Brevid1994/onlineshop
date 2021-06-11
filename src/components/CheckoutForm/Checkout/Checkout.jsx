import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button,  CssBaseline } from '@material-ui/core'
import { commerce } from '../../../lib/commerce'
import { Link, useHistory } from 'react-router-dom'
import useStyle from './styles'
import  AddressForm  from '../AddressForm'
import  PaymentForm  from '../PaymentForm'


const steps = ['Адресс доставки', 'Платежная информация']


const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [shippingData, setShippingData] = useState({})
    const [isFinished, setIsFinished] = useState(false)
    const classes = useStyle();
    const history = useHistory();

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })

                setCheckoutToken(token)
            } catch(error) {
                history.pushState('/')
            }
        }

        generateToken()
    }, [cart, history])

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)


    const next = (data) => {
        setShippingData(data)

        nextStep()
    }

    const timeout = () => {
        setTimeout(() => {
            setIsFinished(true)
        }, timeout);
    }

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant='h5'>Благодарим за покупку, Ваш заказ привезут через 15 минут, ждите звонка курьера! Хорошего дня!) {order.customer.firstname}{order.customer.lastname}!</Typography>
                <Divider className={classes.divider}/>
                <Typography variant='subtitle2'>Order ref: {order.customer_reference}</Typography>
            </div>
            <br/>
            <Button component={ Link } to='/' variant='outlined' type='button'>Вернуться домой</Button> 
        </>
    ) : isFinished ? (
        <>
        <div>
            <Typography variant='h5'>Благодарим за покупку, Ваш заказ привезут через 15 минут, ждите звонка курьера! Хорошего дня!)</Typography>
            <Divider className={classes.divider}/> 
        </div>
        <br/>
        <Button component={ Link } to='/' variant='outlined' type='button'>Вернуться домой</Button> 
    </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress/>
        </div>
    );

    if(error){
        <>
        <Typography variant='h5'>Ошибка: {error}</Typography>
        <br/>
        <Button component={ Link } to='/' variant='outlined' type='button'>Вернуться домой</Button> 
        </>
    }

    const Form = () => activeStep === 0 
    ? <AddressForm checkoutToken={checkoutToken} next={next}/> 
    : <PaymentForm shippingData={shippingData} nextStep={nextStep} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={onCaptureCheckout} timeout={timeout}/>
        


    return (
        <>
        <CssBaseline/>
        <div className={classes.toolber}/>
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant='h4' align='center'>Заказ</Typography>
                <Stepper activeStep={activeStep} classname={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
            </Paper>

        </main>
            
        </>
    )
}

export default Checkout
