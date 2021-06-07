import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Container, Grid, Chip, Avatar } from '@material-ui/core'

import Rating from '@material-ui/lab/Rating'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'


import { listTutorDetails } from '../../redux/actions/tutorActions'

const DetalleAsesor = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const tutorDetails = useSelector(state => state.tutorDetails)
  const { loading, error, tutor } = tutorDetails

  useEffect(() => {
    router.query.id && dispatch(listTutorDetails(router.query.id))
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
        <h2>
          {tutor?.user?.name} {tutor?.user?.lastName}
        </h2>
        <Grid container spacing={2}>
          <Grid item container lg={5} justify='center'>
            <img
              className='tema__imagen'
              src='https://res.cloudinary.com/du17vjpcn/image/upload/v1623077991/public_asesorias/undraw_male_avatar_323b_ekqmpt.png'
              alt='tema-'
            />
            <Grid item container justify='center' lg={12} className='mb-2'>
              <Rating
                name='size-large'
                defaultValue={2}
                size='large'
                readOnly
              />
            </Grid>
            

            <Chip
              avatar={<Avatar>M</Avatar>}
              label={tutor?.level}
              color='primary'
              onClick={handleClick}
            />
            <Chip
              avatar={<Avatar>M</Avatar>}
              label={tutor?.school}
              color='primary'
              onClick={handleClick}
            />
          </Grid>
          <Grid item lg={7}>
            <h1>Sobre mi</h1>
            <p>{tutor?.description}</p>
            <h2>Contacto </h2>
            <label htmlFor=''>Telefono</label>
            <p>{tutor?.phoneNumber}</p>
            <label htmlFor=''>Correo</label>
            <p>{tutor?.user?.email}</p>
          </Grid>
        </Grid>
        <Grid container spacing={4}></Grid>
        <br />
        <br />
        <br />

        <Grid container justify='center'>
          <Link href='/asesoria'>
            <a className='btn-agendar'>Regresar</a>
          </Link>
        </Grid>
      </Container>
    </Layout>
  )
}

export default DetalleAsesor
