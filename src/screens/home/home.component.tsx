export default function Home(){
    return(
        <div className='container'>
            <div className='avatar'/>
            <div className='username'>@popotki</div>
            <div className='post'>
                Se la gente non facesse qualche volta cose stupide,<br/>
                niente di intelligente sarebbe mai fatto.
                <div className='post__title'>[Wittgenstein - il film]</div>
            </div>
            <a className='link' href='https://www.instagram.com/popotki/' target='_blank'>instagram</a>
            <a className='link' href='https://www.facebook.com/popotki/' target='_blank'>facebook</a>
            <a className='link' href='https://vimeo.com/popotki' target='_blank'>vimeo</a>
            <a className='link' href='https://youtube.com/@popotki' target='_blank'>youtube</a>
            <a className='link' href='https://medium.com/@popotki' target='_blank'>medium</a>
        </div>
    )
}
