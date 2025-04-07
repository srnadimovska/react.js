import "./catImg.css"
function CatImg({url}) {
    return (
        <div className="cat-div" >
            <img src={url} alt="CatImg" />
        </div>
    )
}

export default CatImg