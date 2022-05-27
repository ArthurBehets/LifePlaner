import { Link } from 'react-router-dom'

function Home() {
 return (
     <div>
         You home
        <Link to='/calendar'>Calendrier</Link>
     </div>
 )
}

export default Home;