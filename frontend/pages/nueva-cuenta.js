import React, { useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/actions/userActions'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}))

const nuevaCuenta = () => {
  const router = useRouter()
  const classes = useStyles()
  const dispatch = useDispatch()

  const userRegister = useSelector(state => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      router.push('/perfil')
    }
  }, [userInfo])

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async formData => {
      console.log(formData)
      dispatch(register(formData))
    },
  })

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Nueva cuenta
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={formik.handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='name'
                variant='outlined'
                required
                fullWidth
                id='name'
                label='Nombre'
                autoFocus
                onChange={formik.handleChange}
                error={formik.errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Apellidos'
                name='lastName'
                autoComplete='lname'
                onChange={formik.handleChange}
                error={formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Correo electronico'
                name='email'
                autoComplete='email'
                onChange={formik.handleChange}
                error={formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Contraseña'
                type='password'
                id='password'
                autoComplete='current-password'
                onChange={formik.handleChange}
                error={formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <FormControl component='fieldset' className={classes.formControl}>
                <FormLabel component='legend'>Quiero ser</FormLabel>
                <RadioGroup
                  aria-label='role'
                  name='role'
                  value={formik.values.role}
                  onChange={formik.handleChange}
                >
                  <FormControlLabel
                    value='asesorado'
                    control={<Radio />}
                    label='Asesorado'
                  />
                  <FormControlLabel
                    value='asesor'
                    control={<Radio />}
                    label='Asesor'
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
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
  )
}

export default nuevaCuenta

function initialValues() {
  return {
    name: '',
    lastName: '',
    email: '',
    password: '',
    role: 'asesorado',
  }
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    lastName: Yup.string().required(true),
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  }
}
