import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import {
  Container,
  Grid,
  Chip,
  Avatar,
  TextField,
  Button,
} from '@material-ui/core'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import CardTopic from '../../components/card/Card'
import { useRouter } from 'next/router'
import { listThemeDetails } from '../../redux/actions/themeActions'
import { listTutors } from '../../redux/actions/tutorActions'
import CardProfile from '../../components/card/CardProfile'
import { createOrder } from '../../redux/actions/orderActions'

const Tema = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const themeDetails = useSelector(state => state.themeDetails)
  const { loading, error, theme } = themeDetails

  const tutorList = useSelector(state => state.tutorList)
  const { tutors } = tutorList

  useEffect(() => {
    router.query.id && dispatch(listThemeDetails(router.query.id))
  }, [dispatch, router.query.id])

  useEffect(() => {
    dispatch(listTutors())
  }, [dispatch])
  const handleClick = () => {
    console.info('You clicked the Chip.')
  }

  const [details, setDetails] = useState('')

  const [tutorSelected, setTutorSelected] = useState({})

  //date picker
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = date => {
    setSelectedDate(date)
  }
  //time picker
  const [selectedTime, setSelectedTime] = useState()

  const handleTimeChange = time => {
    setSelectedTime(time)
  }
  //Reducer de la orden
  const orderCreate = useSelector(state => state.orderCreate)
  const { order, success, error: errorOrder } = orderCreate
  //Camvbiar de pagina al crear orden
  useEffect(() => {
    if (success) {
      router.push(`/asesoria/${order._id}`)
    }
    // eslint-disable-next-line
  }, [router, success])

  //crear asesoria
  const placeClassHandler = () => {
    const order = {
      tutor: tutorSelected._id,
      dateClass: selectedDate,
      timeClass: selectedTime,
      classItems: [
        {
          name: theme.title,
          qty: 1,
          price: tutorSelected.hourPrice,
          theme: theme._id,
          details: details,
        },
      ],
      paymentMethod: 'Paypal',
      itemsPrice: tutorSelected.hourPrice,
      taxPrice: 20,
      totalPrice: tutorSelected.hourPrice + 20,
    }
    

    dispatch(createOrder(order))
  }
  return (
    <Layout>
      <Container maxWidth='md'>
        <h2>{theme.title}</h2>
        <Grid container spacing={2}>
          <Grid item lg={5}>
            <img
              className='tema__imagen'
              src='https://res.cloudinary.com/du17vjpcn/image/upload/v1619569005/public_asesorias/materia_prpbyg.png'
              alt='tema-'
            />
            <Chip
              avatar={<Avatar>M</Avatar>}
              label={theme?.subject?.level}
              color='primary'
              onClick={handleClick}
            />
            <Chip
              avatar={<Avatar>M</Avatar>}
              label={theme?.subject?.name}
              color='primary'
              onClick={handleClick}
            />
          </Grid>
          <Grid item lg={7}>
            <h3>Descripción</h3>
            <p>{theme.description}</p>
            <h3>Subtemas</h3>
            <ul>
              {theme?.subthemes?.map(subtheme => (
                <li>{subtheme}</li>
              ))}
            </ul>
          </Grid>
        </Grid>
        <h4>Agendar asesoría</h4>
        <Grid container spacing={4} justify='center'>
          <Grid item lg={6} container justify='space-between'>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin='normal'
                id='date-picker-dialog'
                label='Elegir fecha'
                format='MM/dd/yyyy'
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardTimePicker
                margin='normal'
                id='time-picker'
                label='Seleccionar hora'
                value={selectedTime}
                onChange={handleTimeChange}
                KeyboardButtonProps={{
                  'aria-label': 'change time',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid container spacing={4} justify='center' className='mb-3'>
          <Grid item lg={6} sm={12} xs={12}>
            <TextField
              id='outlined-multiline-static'
              label='Detalles adicionales'
              multiline
              rows={5}
              value={details}
              onChange={e => setDetails(e.target.value)}
              variant='outlined'
              className='tema__agenda-detalles'
            />
          </Grid>
        </Grid>
        <h3>Asesores disponibles para este tema</h3>
        <Grid container spacing={3}>
          {tutors.map(tutor => {
            return (
              <Grid key={tutor._id} item lg={3}>
                <CardProfile
                  tutor={tutor}
                  setTutor={setTutorSelected}
                  tutorSelected={tutorSelected}
                />
              </Grid>
            )
          })}
        </Grid>
        <Grid container justify='center'>
          <Button onClick={placeClassHandler}>
            <a className='btn-agendar'>Agendar asesoria</a>
          </Button>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Tema
