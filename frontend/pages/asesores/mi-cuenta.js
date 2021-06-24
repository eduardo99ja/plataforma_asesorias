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
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import FaceIcon from '@material-ui/icons/Face'
import DoneIcon from '@material-ui/icons/Done'
import Paper from '@material-ui/core/Paper'
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
import { register } from '../../redux/actions/tutorActions'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}))

const MyCuenta = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const router = useRouter()
  const tutorRegister = useSelector(state => state.tutorRegister)
  const { loading, error, tutorInfo } = tutorRegister

  //Get id user logged
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (tutorInfo) {
      router.push('/asesores/asesorias')
    }
  }, [tutorInfo])
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  )
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Matematicas' },
    { key: 1, label: 'Fisica' },
    { key: 2, label: 'Ingles' },
    { key: 3, label: 'Historia' },
    { key: 4, label: 'Quimica' },
  ])
  const [chipMaterias, setChipMaterias] = React.useState([
    
  ])
  const handleDelete = chipToDelete => () => {
    setChipMaterias(chips =>
      chips.filter(chip => chip.key !== chipToDelete.key)
    )
  }
  const handleClick = chipToAdd => () => {
   setChipMaterias( [
     ...chipMaterias,
    { key: chipToAdd.key, label:chipToAdd.label },
    
  ])
  }
  const handleDateChange = date => {
    setSelectedDate(date)
  }
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async formData => {
      let { id } = jwt_decode(userInfo.token)

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
              <Grid item xs={12} sm={12}>
                <TextField
                  name='description'
                  variant='outlined'
                  required
                  fullWidth
                  id='description'
                  label='Descripción'
                  autoFocus
                  placeholder='Describe quien eres y tus estudios para que la gente te conozca'
                  multiline
                  onChange={formik.handleChange}
                  error={formik.errors.description}
                />
              </Grid>
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
              <Grid item xs={12} sm={12}>
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
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='hourPrice'
                  label='Pago deseado por hora (pesos)'
                  name='hourPrice'
                  value={formik.values.hourPrice}
                  onChange={formik.handleChange}
                  error={formik.errors.hourPrice}
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
                    label='Fecha de nacimiento'
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
            <h2>Materias disponibles</h2>
            <div className={classes.root}>
              <Paper component='ul' className={classes.root}>
                {chipData.map(data => {
                  let icon

                  return (
                    <li key={data.key}>
                      <Chip
                        avatar={<Avatar>M</Avatar>}
                        label={data.label}
                        clickable
                        color='primary'
                        onDelete={handleClick(data)}
                        deleteIcon={<DoneIcon />}
                      />
                    </li>
                  )
                })}
              </Paper>
            </div>
            <h2>Materias Seleccionadas para impartir</h2>
            <div className={classes.root}>
              <Paper component='ul' className={classes.root}>
                {chipMaterias.map(data => {
                  let icon

                  return (
                    <li key={data.key}>
                      <Chip
                        icon={icon}
                        label={data.label}
                        color='secondary'
                        onDelete={handleDelete(data)}
                        className={classes.chip}
                      />
                    </li>
                  )
                })}
              </Paper>
            </div>
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
    description: '',
    birthday: new Date(),
    phoneNumber: '',
    level: '',
    school: '',
    gender: 'femenino',
    hourPrice: 20,
  }
}

function validationSchema() {
  return {
    description: Yup.string().required(true),
    birthday: Yup.string().required(true),
    phoneNumber: Yup.string().required(true),
    level: Yup.string().required(true),
    school: Yup.string().required(true),
    gender: Yup.string().required(true),
    hourPrice: Yup.number().required(true),
  }
}

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}
