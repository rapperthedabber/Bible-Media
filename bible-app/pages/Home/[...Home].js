import Nav from "@/components/newNav"
import renderBible from 
export default function Home() {
    const musicArray = [{
        img: 'https://flxt.tmsimg.com/assets/p17982572_b_v10_aa.jpg',
        name: 'The Bible Podcast',
        episode: ' Jesus, the son of God'

    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BMmMwZDZlZjAtMjY1YS00ZTEzLThhOWQtNGQ1ZTZiMzRiZDQxXkEyXkFqcGdeQXVyNjc1NjkyMjE@._V1_.jpg',
        name: 'the Chosen',
        episode: 'Jesus of Nazareth'
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BMmMwZDZlZjAtMjY1YS00ZTEzLThhOWQtNGQ1ZTZiMzRiZDQxXkEyXkFqcGdeQXVyNjc1NjkyMjE@._V1_.jpg',
        name: 'the Chosen',
        episode: 'Jesus of Nazareth'
    },
    {
        img: 'https://m.media-amazon.com/images/M/MV5BMmMwZDZlZjAtMjY1YS00ZTEzLThhOWQtNGQ1ZTZiMzRiZDQxXkEyXkFqcGdeQXVyNjc1NjkyMjE@._V1_.jpg',
        name: 'the Chosen',
        episode: 'Jesus of Nazareth'
    }]
    return (
        <>
            <Nav />
            <div className="music">
                {musicArray.map((data) => (
                    <div className="musicContainer">
                        <img id='musicImage' src={data.img}></img>
                        <h1 id="name" >{data.name}</h1>
                        <h2 id="episode">{data.episode}</h2>
                    </div>
                ))}
            </div>
            <footer>
            </footer>
        </>

    )
}