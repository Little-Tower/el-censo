import Head from 'next/head';
import Cultivos from '../components/cultivos';
import Navbar from '../components/navbar';
import Partners from '../components/partners';
import Photos from '../components/photos';
import TxtHead from '../components/txtHead';
import Video from '../components/video';
import Footer from '../components/footer';

const Index = () => {
    return (
        <div>
            <Head>
                <title>Agrícola El Censo</title>
                <link rel="shortcut icon" href="favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar />
            <TxtHead />
            <Cultivos />
            <Photos />
            <Partners />
            <Video />
            <Footer />
        </div>
   )
}

export default Index;