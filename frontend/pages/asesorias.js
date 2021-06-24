import React from 'react'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import { Container, Paper, Grid, Button } from '@material-ui/core'

const Asesorias = () => {
  return (
    <Layout>
      <Container maxWidth='md'>
        <h2>Mis asesorias</h2>
        <Paper className='asesorias__card'>
          <Grid container spacing={3}>
            <Grid item xl={4}>
              <img
                className='asesorias__img'
                src='https://res.cloudinary.com/du17vjpcn/image/upload/v1619569005/public_asesorias/materia_prpbyg.png'
                alt=''
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6}>
              <div className='asesorias__detalles'>
                <div>Detalles</div>
                <div>Fecha:30/06/2021 Hora:13:00</div>
                <div>Asesor: Carlos Hernandez Rivera</div>
                <div>Detalles adicionales</div>
                <p>Enfoque especial en integracion por partes</p>
              </div>
            </Grid>
            <Grid item container xl={2} lg={2} md={2}>
              <Grid item xl={12} lg={12} md={12} className='asesorias__status'>
                <div><strong>Aceptada</strong></div>
                <Link href='/asesoria/[id]' as={`/asesoria/60a187b3d802501b642fe64c`}>
                  <Button variant='contained' color='primary'>
                   Ir a pagar
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper className='asesorias__card'>
          <Grid container spacing={3}>
            <Grid item xl={4}>
              <img
                className='asesorias__img'
                src='https://res.cloudinary.com/du17vjpcn/image/upload/v1619569005/public_asesorias/materia_prpbyg.png'
                alt=''
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6}>
              <div className='asesorias__detalles'>
                <div>Detalles</div>
                <div>Fecha: 03/05/2021 Hora:13:00</div>
                <div>Asesor: Eduardo Apodaca</div>
                <div>Detalles adicionales</div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, consequuntur similique! Facere facilis voluptate
                  possimus vero est. Ex rem aliquam voluptas repudiandae, ab
                  sint doloremque error fuga placeat omnis libero!
                </p>
              </div>
            </Grid>
            <Grid item container xl={2} lg={2} md={2}>
              <Grid item xl={12} lg={12} md={12} className='asesorias__status'>
                <div>Terminada</div>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <Paper className='asesorias__card'>
          <Grid container spacing={3}>
            <Grid item xl={4}>
              <img
                className='asesorias__img'
                src='https://res.cloudinary.com/du17vjpcn/image/upload/v1619569005/public_asesorias/materia_prpbyg.png'
                alt=''
              />
            </Grid>
            <Grid item xl={6} lg={6} md={6}>
              <div className='asesorias__detalles'>
                <div>Detalles</div>
                <div>Fecha: 03/05/2021 Hora:16:00</div>
                <div>Asesor: Eduardo Apodaca</div>
                <div>Detalles adicionales</div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, consequuntur similique! Facere facilis voluptate
                  possimus vero est. Ex rem aliquam voluptas repudiandae, ab
                  sint doloremque error fuga placeat omnis libero!
                </p>
              </div>
            </Grid>
            <Grid item container xl={2} lg={2} md={2}>
              <Grid item xl={12} lg={12} md={12} className='asesorias__status'>
                <div>Terminada</div>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Layout>
  )
}

export default Asesorias
