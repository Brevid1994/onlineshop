import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyle from './styles'
import  AddressForm  from '../AddressForm'
import  PaymentForm  from '../PaymentForm'


const steps = ['Адресс доставки', 'Платежная информация']


const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyle();

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => activeStep === 0 ? <AddressForm/> : <PaymentForm/>
        


    return (
        <AddressForm>
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
                {activeStep === steps.lenght ? <Confirmation /> : <Form />}
            </Paper>

        </main>
            
        </AddressForm>
    )
}

export default Checkout
