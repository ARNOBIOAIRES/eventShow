import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";



function EventPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      <main className='flex flex-1'>
        {
          slug ?
            <Videos lessonSlug={slug} />
            : <div className='flex-1' />
        }

        <Sidebar />
      </main>
    </div>
  )
}
export default EventPage