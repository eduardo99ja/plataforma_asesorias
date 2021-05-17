import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Layout from '../components/layout/Layout'
import { Container, Grid } from '@material-ui/core'

import CardTopic from '../components/card/Card'
import { listSubjects } from '../redux/actions/subjectActions'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

const catalogo = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [materia, setMateria] = React.useState('')
  const [nivel, setNivel] = React.useState('')

  const dispatch = useDispatch()

  const subjectList = useSelector(state => state.subjectList)
  const { loading, error, subjects } = subjectList

  useEffect(() => {
    dispatch(listSubjects())
  }, [dispatch])
  console.log(subjects)

  const handleChangeMateria = event => {
    setMateria(event.target.value || '')
  }
  const handleChangeNivel = event => {
    setNivel(event.target.value || '')
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const SelectDialog = () => {
    return (
      <div>
        <Button onClick={handleClickOpen}>Filtrar temas</Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={open}
          onClose={handleClose}
        >
          <DialogTitle>Seleccionar filtros</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor='demo-dialog-native'>Nivel</InputLabel>
                <Select
                  native
                  value={nivel}
                  onChange={handleChangeNivel}
                  input={<Input id='demo-dialog-native' />}
                >
                  <option aria-label='None' value='' />
                  <option value='sec'>Secundaria</option>
                  <option value='bach'>Bachillerato</option>
                  <option value='lic'>Licenciatura</option>
                </Select>
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel id='demo-dialog-select-label'>Materia</InputLabel>
                <Select
                  labelId='demo-dialog-select-label'
                  id='demo-dialog-select'
                  value={materia}
                  onChange={handleChangeMateria}
                  input={<Input />}
                >
                  <MenuItem value=''>
                    <em>Ninguno</em>
                  </MenuItem>
                  <MenuItem value='math'>Matematicas</MenuItem>
                  <MenuItem value='quim'>Quimica</MenuItem>
                  <MenuItem value='eng'>Ingles</MenuItem>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleClose} color='primary'>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
  return (
    <Layout>
      <Container maxWidth='lg'>
        <Grid container direction='row' justify='center'>
          <SelectDialog />
        </Grid>
        <Grid container>
          <Grid item container>
            <h2>Matematicas</h2>
          </Grid>
          <Grid item container lg={12}>
            {subjects.map(subject => {
              return (
                <Grid key={subject._id} item lg={3} md={4} sm={6} xm={12}>
                  <CardTopic  subject={subject} />
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default catalogo
