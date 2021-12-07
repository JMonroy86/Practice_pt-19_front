const CardUser = ({ user }) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png' className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{user?.username} </h5>
                        <p className="card-text">{user?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CardUser;