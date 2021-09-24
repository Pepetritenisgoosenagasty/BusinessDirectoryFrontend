import { Form, Input } from "antd";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import UploadImg from "./UploadImg";
import { useEffect, useState } from "react";

const { Dragger } = Upload;

const GalleryComponent = (props) => {
  const [fileList, setFileList] = useState([])


  const [uploadedFiles, setUploadedFiles] = useState([])

  useEffect(() => {
    setUploadedFiles([...fileList])
  }, [fileList])

  const handleUploadedFile = (fileList) => {
   
    fileList && setFileList([...fileList])
     
  }

  return (
    <div className="addForm container-fluid">
      <div>
        <h5>Upload Images</h5>
        <p>
        Input field with <code>*</code> on lable means field is required.
        </p>
      </div>
      <div className="row mt-3">
        <div className="col-lg-12 col-md-12 col-sm-12">
          {/* <label>
              Business Name<sup className="text-danger">*</sup>
            </label> */}
         {/* <Form.Item
              name="images"
              rules={[
                {
                  required: false,
                  message: "Please uplaod your profile!",
                },
              ]}
            >
              <Input type="file" allowClear multiple/>
            </Form.Item> */}
             <UploadImg fileList={fileList} onUpload={handleUploadedFile} />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <label>Video URL <small>(Optional)</small></label>
          <Form.Item
            name="video"
            
          >
            <Input placeholder="https://" />
          </Form.Item>
        </div>
      </div>

      <style jsx>{`
        h5 {
          color: #000;
          font-size: 0.8rem;
          font-weight: 600;
        }

        label,
        p {
          font-size: 0.7rem;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default GalleryComponent;
