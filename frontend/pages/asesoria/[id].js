import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { PayPalButton } from 'react-paypal-button-v2'
import { Container, Grid } from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'

import { useRouter } from 'next/router'

const Asesoria = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const [pagado, setPagado] = useState(false)

  //   useEffect(() => {
  //     router.query.id && dispatch(listThemeDetails(router.query.id))
  //   }, [dispatch, router.query.id])

  return (
    <Layout>
      <Container maxWidth='lg'>
        <h2>Asesoria </h2>
        <Grid container spacing={4}>
          <Grid item container lg={8}>
            <Grid item lg={6}>
              <h2>Asesor</h2>
              <p>
                <strong>Nombre: </strong>Carlos Hernandez Rivera
              </p>
              <p>
                <strong>Email: </strong>asesor@gmail.com
              </p>
            </Grid>
            <Grid item lg={6}>
              <h2>Asesorado</h2>
              <p>
                <strong>Nombre: </strong>Eduardo Jimenez Apodaca
              </p>
              <p>
                <strong>Email: </strong>eduardo1ja99@gmail.com
              </p>
            </Grid>

            <p className='asesoria-aceptada'>Asesoria Aceptada</p>
            {/* <p className='asesoria-no-pagada'>Asesoria pendiente de Aceptar</p> */}
            <Grid item lg={12}>
              <h2>Metodo de Pago</h2>
              <p>
                <strong>Metodo: </strong>Paypal
              </p>
            </Grid>
            <p className={!pagado ? 'asesoria-no-pagada' : 'asesoria-aceptada'}>
              {!pagado ? 'No pagado' : 'Pagado'}
            </p>
            <Grid item lg={12}>
              <h2>Tema</h2>
              <p>
                <strong>Nombre: </strong>Métodos de integración e integral
                indefinida
              </p>
              <p>
                <strong>Detalles: </strong>Enfoque especial en integracion por partes
              </p>
            </Grid>
          </Grid>

          <Grid item lg={4}>
            {!pagado && (
              <div className='panel-pago'>
                <p>Resumen de compra</p>
                <p>
                  <strong>Precio: </strong>$45
                </p>
                <p>
                  <strong>Comision: </strong>$5
                </p>
                <p>
                  <strong>Total: </strong>$50
                </p>
                <PayPalButton
                  amount={120}
                  onSuccess={() => console.log('si')}
                  onCancel={() => setPagado(true)}
                />
              </div>
            )}
            <br />
            {pagado && (
              <div className='panel-link'>
                <h2>Link de la asesoria</h2>
                <p>Topic: Métodos de integración e integral indefinida</p>
                <p>Time: Jun 30, 2021 01:00 PM Mexico City</p>
                <a href='https://us04web.zoom.us/j/75580303000?pwd=UXZGNnBzaEp0TGtIcW1LWFhmZzNJQT09'>
                  Abrir clase
                </a>
                <p>Meeting ID: 755 8030 3000 </p>
                <p>Passcode: hFWQT0</p>
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
      <script
        type='text/javascript'
        src='https://www.paypal.com/sdk/js?client-id=AcJaSnnVqRd8-ekRlrIivZ2Yc2YhGe3UL63lDXNDBexqgZ4UY4o6Y0ZBtx5mufqrupB3rtR_11upDbvO'
      ></script>
    </Layout>
  )
}

export default Asesoria
