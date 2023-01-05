import React, { useEffect, useState } from "react";
import "./Cricket.css";

export default function Cricket() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    fetch("http://localhost:3001/cricket")
      .then((d) => {
        return d.json();
      })
      .then((res) => {
        setdata(res);
        console.log(res);
      });
  };

  return (
    <>
      {data.map((e) => {
        return (
          <div id="g-parent-div">
            <div id="g-main-div">
              <div className="cont1">
                {e.image ? (
                  <img className="profilepic" src={e.image} alt="postimg" />
                ) : (
                  <img
                    className="profilepic"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzyALOcLp4ykOIC4bim8L0xZIvgfLLZEo-mg&usqp=CAU"
                    alt="postimg"
                  />
                )}

                <div id="g-nu">
                  <div>
                    <h3 className="name">{e.name}</h3>
                  </div>
                  <div className="username">
                    {e.username} - {e.preofession}
                  </div>
                </div>
              </div>
              <div className="cont2">
                <span>{e.description}</span>
              </div>

              <div className="contto">{e.hastags}</div>
              <div className="cont3">
                <img src={e.image2} alt="postimg" />
              </div>

              <div className="cont5">
                <img
                  src="https://www.kooapp.com/img/profilePlaceholderYellow.svg"
                  alt="comment"
                />
                <div>Write your comment...</div>
              </div>

              <div className="cont4">
                <div>
                  <img
                    src="https://www.kooapp.com/img/Like1.5.svg"
                    alt="like"
                  />
                  <p>2</p>
                </div>
                <div>
                  <img
                    src="https://www.kooapp.com/img/Inactive-comment.svg"
                    alt="comment"
                  />

                  <p>2</p>
                </div>
                <div>
                  <img
                    src="https://www.kooapp.com/img/Rekoo1.5.svg"
                    alt="swap"
                  />
                </div>
                <div>
                  <a href="https://www.kooapp.com/img/Whatsapp1.5.svg">
                    <img
                      className="whatsappicon"
                      src="https://www.kooapp.com/img/cardFooterIcons/whatsapp_new.svg"
                      alt="whatsapp"
                    />
                  </a>
                </div>
                <div>
                  <img
                    src="https://www.kooapp.com/img/cardFooterIcons/share_new.svg"
                    alt="share"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
