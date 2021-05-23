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
import { listThemes } from '../redux/actions/themeActions'

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
  const [materia, setMateria] = React.useState('all')
  const [nivel, setNivel] = React.useState('Bachillerato')

  const dispatch = useDispatch()

  const subjectList = useSelector(state => state.subjectList)
  const { loading, error, subjects } = subjectList
  const themeList = useSelector(state => state.themeList)
  const { themes } = themeList

  //Get Subjects for select
  useEffect(() => {
    dispatch(listSubjects(nivel))
  }, [dispatch, nivel])
  console.log(subjects)

  //Get themes
  useEffect(() => {
    dispatch(listThemes(materia))
  }, [dispatch, materia])

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
                  <option value='Secundaria'>Secundaria</option>
                  <option value='Bachillerato'>Bachillerato</option>
                  <option value='Licenciatura'>Licenciatura</option>
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
                  <MenuItem value='all'>Todas</MenuItem>
                  {subjects.map(subject => {
                    return (
                      <MenuItem key={subject._id} value={subject._id}>
                        {subject.name}
                      </MenuItem>
                    )
                  })}
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
           
          </Grid>
          <Grid item container lg={12}>
            {themes.map(theme => {
              return (
                <Grid key={theme._id} item lg={3} md={4} sm={6} xm={12}>
                  <CardTopic theme={theme} />
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
