import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Link from 'next/link'

const CardProfile = () => {
  return (
    <div class='cardProfile'>
      <Link href='/asesores/123456'>
        <img
          src='https://res.cloudinary.com/du17vjpcn/image/upload/v1621985542/public_asesorias/undraw_profile_pic_ic5t_xhiicp.png'
          alt='John'
        />
      </Link>
      <Link href='/asesores/123456'>
        <h2>Eduardo Apodaca</h2>
      </Link>
      <p class='title'>Instituto Tecnologico de Toluca</p>
      <Rating name='size-large' defaultValue={2} size='large' readOnly />

      <p>
        <button className='btn-profile'>Seleccionar</button>
      </p>
    </div>
  )
}

export default CardProfile
