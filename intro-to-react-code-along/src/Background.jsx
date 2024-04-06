const Background = ({imgUrl}) => {
    return (
        <div>
            <img src={imgUrl} alt="Background Image Mall" style={{height:"100%", width:"auto", objectFit:"cover"}} />
        </div>
    )
}

export default Background