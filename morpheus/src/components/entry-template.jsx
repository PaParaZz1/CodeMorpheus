import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { PaperAirplaneIcon } from "@primer/octicons-react";
import image from "components/entry_new.png";



function FailedTask(props) {
    const failImageUrl = process.env.REACT_APP_FAIL_IMAGE_URL
    return (
        <div className="photo-frame">
            <img src={failImageUrl}  alt="CodeMorpheus" />
            <span className="notfound">查无此人</span>
        </div>
    );
}

function Entry(props) {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = e => {
    e.preventDefault();  // necessary
    setIsLoading(true);
    console.log('call handleSubmit', e)
    props.setUserName(e.target[0].value);
  };
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`
  };

  const waitingImageUrl = process.env.REACT_APP_WAITING_IMAGE_URL
  console.log('wq', waitingImageUrl)

  return (
    <div className="entry" style={styles}>
      {isLoading && (
      <div className="photo-frame">
          <img src={waitingImageUrl}  alt="CodeMorpheus" />
          <span className="notfound">飞速运转中...</span>
      </div>
      )}
      <form onSubmit={handleSubmit} className="form-container">
          <input type="text" placeholder="请输入您的 GitHub 用户名"/>
          <button type="submit" disabled={isLoading}>
            <PaperAirplaneIcon size={16} />
          </button>
      </form>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
            <div style={{ position: "absolute", bottom: "22px", margin: "0px", color: "rgb(199, 93, 77)"}}>
              <span style={{ fontSize: "10px", fontWeight: 800}}>{"OpenDILab 出品，版权所有 © 2023"}</span>
            </div>
            <div style={{ position: "absolute", bottom: 0, right: 0, margin: "24px" }}>
              <QRCodeSVG value="https://github.com/opendilab/CodeMorpheus" size={32} fgColor={"#AE2012"}/>
            </div>
          </div>
    </div>
  );
}

export default Entry;