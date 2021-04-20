import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTopics } from '../redux/actions/topicsActions'

export default function Home() {
  const dispatch = useDispatch()
  const topicList = useSelector(state => state.topicList)
  const { loading, error, topics } = topicList
  useEffect(() => {
    dispatch(listTopics())
  }, [dispatch])
  console.log(topics)
  return (
   
    <h1>Hola</h1>
  )
}
