import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Showrooms = () => {
  const [expanded, setExpanded] = useState(false);
  const [api, setApi] = useState([]);

  // function to delete data from DB
  // const deletedatafromapi = async(id)=>{
  //   let del = await fetch(`http://127.0.0.1:8000/${id}`,{
  //     method:"DELETE"
  //   })
  //   del = await del.json();
  //   // confirm("Are you sure you want to delete the room.");
  //   if (window.confirm('Are you sure you wish to delete this item?'))this.onCancel();
  // }

  const deletedatafromapi = async (id) => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      let del = await fetch(`http://127.0.0.1:8000/${id}`, {
        method: "DELETE",
      });
      del = await del.json();
      this.onCancel();
    }
  };

  // function to fetch data from DB and show
  const fetchapi = async () => {
    const url = await fetch("http://127.0.0.1:8000/");
    const data = await url.json();
    setApi(data);
  };

  useEffect(() => {
    fetchapi();
  }, [deletedatafromapi]);

  // function to handle showmore...
  function handleShowMore() {
    const textDiv = document.getElementById("carouseltext");
    const showMoreBtn = document.getElementById("show-more-btn");

    if (expanded) {
      textDiv.style.height = "100px";
      showMoreBtn.innerHTML = "Show More...";
    } else {
      textDiv.style.height = "auto";
      showMoreBtn.innerHTML = "Show Less...";
    }
    setExpanded(!expanded);
  }
  return (
    <>
      <div className="hr1_parent">
        <hr className="hr1" />
      </div>
      {
        api.map((api) => (
          <div className="col-lg-12 carouselparentdiv">
            <div className="carouseldiv col-lg-3">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      className="d-block w-100"
                      src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2023/03/17/0855/CHIRC-R0001-King-City-View.jpg/CHIRC-R0001-King-City-View.16x9.jpg?imwidth=1280"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="images\Grand-Hyatt-Seattle-P082-Bathroom.4x3.png"
                      alt="First slide"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      className="d-block w-100"
                      src="images\Grand-Hyatt-Seattle-P082-Bathroom.4x3.png"
                      alt="First slide"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="carouseltext" id="carouseltext">
                <h6>{api.title}</h6>
                <p>{api.description}</p>
              </div>
              {/* show more and show less */}
              <a id="show-more-btn" onClick={handleShowMore}>
                {expanded ? "Show Less..." : "Show More..."}
              </a>
            </div>
            <div className="col-lg-3 carouselbtn">
              <h3>${api.price}</h3>
              <p>Avg/Night (USD)</p>
              <table>
                <tr>
                  <td>
                    <Link to={`/updaterooms/${api._id}`}>
                      <button
                        className="btn updatebtn"
                        style={{ width: "95%" }}
                      >
                        Update{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      style={{
                        width: "95%",
                        backgroundColor: "rgb(170, 13, 13)",
                      }}
                      className="btn btn-danger"
                      onClick={() => deletedatafromapi(api._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        )) //api.map function ends here
      }
    </>
  );
};

export default Showrooms;
