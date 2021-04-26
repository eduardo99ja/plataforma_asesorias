import { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { useDispatch, useSelector } from 'react-redux'
import { listTopics } from '../redux/actions/topicsActions'
import { Grid } from '@material-ui/core'
import Layout from '../components/layout/Layout'
import { Service } from '../components/home/Service'

const services = [
  {
    id: 1,
    title: 'Clases de regularización',
    description:
      '¿Se te dificulta un tema o materia escolar?, no hay problema nuestros asesores te ayudaran con cualquiera de nuestros 500+ temas disponibles',
    img:
      'https://res.cloudinary.com/du17vjpcn/image/upload/v1619458662/public_asesorias/classes_hqqpsc.png',
  },
  {
    id: 2,
    title: 'Asesorias pares',
    description:
      'Encuentra al asesor con el que te sientas más comodo, el te explicara el tema que necesitas y resolvera todas tus dudas.',
    img:
      'https://res.cloudinary.com/du17vjpcn/image/upload/v1619458662/public_asesorias/pairs_cfmabv.png',
  },
  {
    id: 3,
    title: 'Preparación para examenes',
    description:
      '¿Tienes un examen importante por realizar? , nosotros te ayudamos a estudiar y reforzar todos los temas que lo comprenden.',
    img:
      'https://res.cloudinary.com/du17vjpcn/image/upload/v1619458662/public_asesorias/exams_h1xius.png',
  },
]
export default function Home() {
  const dispatch = useDispatch()
  const topicList = useSelector(state => state.topicList)
  const { loading, error, topics } = topicList
  useEffect(() => {
    dispatch(listTopics())
  }, [dispatch])
  console.log(topics)

  const Banner = () => (
    <section className='banner_main'>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={5} md={5}>
            <div className='text-bg'>
              <h1>
                Encuentra tu
                <br /> Asesor ideal
              </h1>
              <span>Es hora de aprender</span>
              <p>
                Selecciona tu tema dentro de nuestro inmenso catalogo de
                materias, elige a tu asesor dependiendo de tus necesidades y
                genera tu asesoria de una manera facil y rapida.
              </p>
              <a href='#'>Empezar a buscar</a>
            </div>
          </Grid>
          <Grid item md={7} lg={7}>
            <div className='text-img'>
              <figure>
                <img
                  src='https://res.cloudinary.com/du17vjpcn/image/upload/v1619114093/public_asesorias/img_ngika4.png'
                  alt='banner'
                />
              </figure>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  )

  const HowItWorks = () => (
    <div id='' class='howKorks'>
      <Container>
        <Grid container>
          <Grid item md={12}>
            <div class='titlepage'>
              <h2>En que consiste</h2>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <div className='web_howKorks'>
              <figure>
                <img
                  src='https://res.cloudinary.com/du17vjpcn/image/upload/v1619402609/public_asesorias/book_a_class_saytjt.png'
                  alt='How it works'
                />
              </figure>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                quisquam incidunt non nemo. Sunt natus repudiandae assumenda
                voluptate, veniam perspiciatis voluptatum cum doloremque aliquam
                officia cupiditate. Sed esse dolor mollitia. Voluptatem optio
                odio reiciendis voluptatum impedit molestias. Eum atque dolorum
                totam consequatur quisquam expedita autem soluta! Laborum
                deleniti molestiae error debitis officiis? Voluptate ratione
                numquam a saepe molestias rem fuga!
              </p>
              <a href='#'>Empieza a buscar</a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  )

  const Services = () => {
    return (
      <div className='Services'>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={12}>
              <div className='titlepage'>
                <h2>Nuestros servicios</h2>
                <p>
                  Inscribete a nuestra plataforma para poder disfrutar
                  <br />
                  de todos los servicios que te ofrecemos
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {services.map(service => (
              <Service service={service} />
            ))}
          </Grid>
          <a class='read_more' href='#'>
            Crear cuenta
          </a>
        </Container>
      </div>
    )
  }

  return (
    <Layout>
      <Banner />
      <HowItWorks />
      <Services />
    </Layout>
  )
}
