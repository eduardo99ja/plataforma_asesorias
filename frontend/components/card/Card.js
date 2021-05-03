import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
const id = 'asd123456'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '10px',
  },
  media: {
    height: 140,
  },
})

const CardTopic = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://res.cloudinary.com/du17vjpcn/image/upload/v1619569005/public_asesorias/materia_prpbyg.png'
          title='tema'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Tema
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            laborum at. Assumenda aperiam eum omnis voluptates nihil quos
            necessitatibus sint!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Guardar
        </Button>
        <Link href='/temas/[id]' as={`/temas/${id}`}>
          <Button size='small' color='primary'>
            Ver más
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default CardTopic
