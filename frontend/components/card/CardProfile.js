import React from 'react'
import Rating from '@material-ui/lab/Rating'
import Link from 'next/link'

const CardProfile = ({ tutor }) => {
  return (
    <div class='cardProfile'>
      <Link href='/asesores/[id]' as={`/asesores/${tutor._id}`}>
        <img
          src='https://res.cloudinary.com/du17vjpcn/image/upload/v1621985542/public_asesorias/undraw_profile_pic_ic5t_xhiicp.png'
          alt='John'
        />
      </Link>
      <Link href='/asesores/[id]' as={`/asesores/${tutor._id}`}>
        <h2>
          {tutor.user.name} {tutor.user.lastName}
        </h2>
      </Link>
      <p class='title'>{tutor.school}</p>
      <Rating name='size-small' defaultValue={2} size='small' readOnly />
      <button className='btn-profile'>Seleccionar</button>
      
      
    </div>
  )
}

export default CardProfile
