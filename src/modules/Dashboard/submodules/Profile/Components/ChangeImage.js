import { Avatar, Image, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

import { VscCloudUpload } from "react-icons/vsc";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

const changePicture = (props) => {

  const [loading, setLoading] = useState({
    isLoading: false,
    imageUrl: "",
  });

  useEffect(() => {
    if (props.initialPhoto != '') {
           props.handleSetUserProfileIMGPicture(props.initialPhoto)
      setLoading({ imageUrl: props.initialPhoto, isLoading: false });
    }
  }, [props.initialPhoto])

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading({
        ...loading,
        isLoading: true,
      });
      return;
    }

    if (info.file.status === "done") {
  
      getBase64(info.file.originFileObj, function (imageUrl) {
        setLoading({ imageUrl, isLoading: false });
        props.handleFileObject(info.file.originFileObj)
        props.handleFileSetter(imageUrl);
        props.handleSetUserProfileIMGPicture(imageUrl)
      });

    }
  };

  


  const uploadButton = (
    <div>
      {loading.isLoading ? (
        <LoadingOutlined />
      ) : (
       ''
        )}
            <Avatar size={150}>NO PICTURE</Avatar>

    </div>
  );
  return (
    <div>
      <Upload
        name="avatar"
        listType="picture-card"
        // className="avatar-uploader"
        showUploadList={false}
        action=""
        
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {props.userProfileIMG ? (
                      // <Avatar size={180} src={<Image src={props.userProfileIMG} />} >USER</Avatar>
                      <Avatar size={150} src={props.userProfileIMG} >USER</Avatar>
                      
          // <img src={props.userProfileIMG} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};

export default changePicture;
