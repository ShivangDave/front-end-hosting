export default ({ img, text, link }) => {
  return (
    <div className="how-div">
      <a
        href="https://github.com/ShivangDave/front-end-hosting#lets-host-this-app"
          target="_blank" className="container">
        <img
          src={img}
            className="image" />
        <div className="overlay">
          <div className="text">
            { text }
          </div>
        </div>
      </a>
    </div>
  )
}
