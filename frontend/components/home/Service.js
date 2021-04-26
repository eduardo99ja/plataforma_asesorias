import React from 'react'
import { Grid } from '@material-ui/core'

export const Service = ({ service }) => {
  const { title, description, img } = service
  return (
    <Grid item xl={4} lg={4} md={4} sm={12}>
      <div className='Services-box'>
        <img src={img} alt={title} />

        <h3> {title}</h3>
        <p>{description}</p>
      </div>
    </Grid>
  )
}
