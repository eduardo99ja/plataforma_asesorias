import React, { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import { useRouter } from 'next/router'
import {
  Container,
  Grid,
  CssBaseline,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Link,
} from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import jwt_decode from 'jwt-decode'

import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/actions/pupilActions'

const MyCuenta = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const pupilRegister = useSelector(state => state.pupilRegister)
  const { loading, error, pupilInfo } = pupilRegister

  useEffect(() => {
    if (pupilInfo) {
      router.push('/catalogo')
    }
  }, [pupilInfo])
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  )

  const handleDateChange = date => {
    setSelectedDate(date)
  }
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async formData => {
      let { id } = jwt_decode(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYmQ3ZTU0ODc2M2I0NTM3MDNiYWJmNyIsImlhdCI6MTYyMzAzMTM4MCwiZXhwIjoxNjI1NjIzMzgwfQ.m3VrjQan1TYUoOrfwOEsfSsGDj_ZHW7WxZSvhZVZI-s'
      )
      console.log(id)
      formData = {
        ...formData,
        _id: id,
        user: id,
      }
      dispatch(register(formData))
    },
  })
  return (
    <Layout>
      <Container component='main' maxWidth='md'>
        <div className='form_container'>
          <h2>Mi cuenta</h2>
          <form
            className='form_cuenta'
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='phoneNumber'
                  variant='outlined'
                  required
                  fullWidth
                  id='phoneNumber'
                  label='Numero de telefono'
                  autoFocus
                  onChange={formik.handleChange}
                  error={formik.errors.phoneNumber}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='level'
                  label='Nivel de escolaridad'
                  name='level'
                  onChange={formik.handleChange}
                  error={formik.errors.level}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='school'
                  label='Escuela de procedencia'
                  name='school'
                  onChange={formik.handleChange}
                  error={formik.errors.school}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='normal'
                    name='birthday'
                    id='date-picker-inline'
                    label='Date picker inline'
                    value={formik.values.birthday}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>

              <Grid item xs={12}>
                <FormControl
                  component='fieldset'
                  //   className={classes.formControl}
                >
                  <FormLabel component='legend'>Genero</FormLabel>
                  <RadioGroup
                    aria-label='role'
                    name='gender'
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value='femenino'
                      control={<Radio />}
                      label='femenino'
                    />
                    <FormControlLabel
                      value='masculino'
                      control={<Radio />}
                      label='masculino'
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            {/* {loading && <LinearProgress />}
          {error && <Alert severity='error'>{error}</Alert>} */}
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              // className={classes.submit}
            >
              Crear cuenta
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Link href='#' variant='body2'>
                  ¿Ya tienes cuenta? Inicia sesión
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Layout>
  )
}

export default MyCuenta

function initialValues() {
  return {
    birthday: new Date(),
    phoneNumber: '',
    level: '',
    school: '',
    gender: 'femenino',
  }
}

function validationSchema() {
  return {
    birthday: Yup.string().required(true),
    phoneNumber: Yup.string().required(true),
    level: Yup.string().required(true),
    school: Yup.string().required(true),
    gender: Yup.string().required(true),
  }
}

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}
