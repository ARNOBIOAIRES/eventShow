import { gql, useQuery } from "@apollo/client"


const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id 
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

export default function App() {

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  /*  useEffect(() => {
     client.query({
       query: GET_LESSONS_QUERY,
     }).then(response => {
       console.log(response.data)
     })
   }, []) */

  return (

    <ul>
      {
        data?.lessons.map((lesson: Lesson) => {
          return <li key={lesson.id}>{lesson.title} </li>
        })
      }
    </ul>


  )
}

