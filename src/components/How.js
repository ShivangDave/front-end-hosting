export default ({ img }) => {
  return (
    <div className="how-div">
      <div className="container">
        <img
          src={img}
            className="image" />
        <div className="overlay">
          <div className="text">
            How Though?
          </div>
        </div>
      </div>
    </div>
  )
}
