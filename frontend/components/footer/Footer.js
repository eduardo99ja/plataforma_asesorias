import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { Grid } from '@material-ui/core'
import Link from 'next/link'
function Copyright() {
  return (
    <Typography
      variant='body2'
      color='textSecondary'
      align='center'
      className='copyrigth'
    >
      {'Copyright © '}
      <Link color='inherit' href=''>
        TeachMe
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#3e40d9',
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}))

export default function Footer(props) {
  const classes = useStyles()
  const { description, title } = props

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid
            container
            item
            lg={12}
            md={12}
            sm={12}
            spacing={4}
            justify='center'
          >
            <Grid item lg={6} md={6} sm={12}>
              <h1>Asesorias</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                doloribus neque hic architecto amet voluptatum vitae, cupiditate
                illum corporis exercitationem eos qui velit dolorum itaque optio
                reprehenderit iure aperiam laudantium.
              </p>
            </Grid>
            <Grid
              container
              item
              lg={6}
              md={6}
              sm={12}
              justify='center'
              spacing={5}
            >
              <Grid item lg={6} md={6} sm={12}>
                <h2>Niveles</h2>
                <ul>
                  <li>
                    <Link href='/'>
                      <a>Primaria</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Secundaria</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Bachillerato</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Licenciatura</a>
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item lg={6} md={6} sm={12}>
                <h2>Páginas</h2>

                <ul>
                  <li>
                    <Link href='/'>
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Acerca de nosotros</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Categorias</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a>Quiero ser asesor</a>
                    </Link>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className='copyrigth-section'>
          <Grid item lg={12} md={12} sm={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}
