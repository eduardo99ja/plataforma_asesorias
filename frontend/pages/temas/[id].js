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
} from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import CardTopic from '../../components/card/Card'
import { useRouter } from 'next/router'
import { listThemeDetails } from '../../redux/actions/themeActions'

const Tema = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const themeDetails = useSelector(state => state.themeDetails)
  const { loading, error, theme } = themeDetails

  useEffect(() => {
    router.query.id && dispatch(listThemeDetails(router.query.id))
  }, [dispatch, router.query.id])
  

  const handleClick = () => {
    console.info('You clicked the Chip.')
  }

  //date picker

  const [selectedDate, setSelectedDate] = useState(
    new Date('2014-08-18T21:11:54')
  )

  const handleDateChange = date => {
    setSelectedDate(date)
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
            <p>
              {theme.description}
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item lg={5}>
            <h4>Agendar asesoría para el día</h4>
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
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item lg={7}>
            <TextField
              id='outlined-multiline-static'
              label='Detalles adicionales'
              multiline
              rows={5}
              defaultValue='Agregar detalles para la asesoria'
              variant='outlined'
              className='tema__agenda-detalles'
            />
          </Grid>
        </Grid>
        <h3>Asesores disponibles para este tema</h3>
        <Grid container spacing={3}>
          <Grid item lg={3}>
            {/* <CardTopic /> */}
          </Grid>
          <Grid item lg={3}>
            {/* <CardTopic /> */}
          </Grid>
          <Grid item lg={3}>
            {/* <CardTopic /> */}
          </Grid>
          <Grid item lg={3}>
            {/* <CardTopic /> */}
          </Grid>
        </Grid>
        <Grid container justify='center'>
          <Link href='/asesoria'>
            <a className='btn-agendar'>Agendar asesoria</a>
          </Link>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Tema
