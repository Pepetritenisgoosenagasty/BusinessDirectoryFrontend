import { Button, Form, Input } from "antd";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import UploadImg from "./UploadImg";
import { useEffect, useState } from "react";
import { DashboardCustomCard } from "@/components/CardComponent";

const { Dragger } = Upload;

const EditGalleryComponent = (props) => {
  const [fileList, setFileList] = useState([]);


  const handleUploadedFile = (fileList) => {
    fileList && setFileList([...fileList]);
  };

  useEffect(() => {
    props?.handleUpload(fileList);
  }, [fileList]);

  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    setUploadedFiles([...fileList]);
  }, [fileList]);

  useEffect(() => {
    setFileList([...props?.initialImages])
  console.log(props?.initialImages)
  }, [props?.initialImages])



  return (
    <div className="addForm container-fluid">
      <DashboardCustomCard>
        <div className="px-4 py-4">
          <div>
            <h5>Upload Images</h5>
            <p>
              Input field with <code>*</code> on lable means field is required.
            </p>
          </div>
          <div className="row mt-3">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <UploadImg  fileList={fileList} onUpload={handleUploadedFile} />
            </div>
          </div>
        </div>
      </DashboardCustomCard>
     {
       props.isActive && (   <div className="d-flex justify-content-between mt-3">
       <button style={{
             margin: "0 8px",
             background: "#fff",
             color: "#004ba8",
             border: "1px solid #004ba8",
             borderRadius: 30,
             width: 150,
             height: 40,
           }} htmlType="button" type="button" onClick={props.previousStep}>
         Previous
       </button>
         <Button
           htmlType="submit"
           type="primary"
           loading={props?.isloadingSubmit}
           className="submit-btn"
           style={{
             margin: "0 8px",
             background: "#379634",
             border: "none",
             borderRadius: 30,
             width: 150,
             height: 40
           }}
         >
           Submit
         </Button>
       </div>)
     }

      {/* <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <label>Video URL <small>(Optional)</small></label>
          <Form.Item
            name="video"
            
          >
            <Input placeholder="https://" />
          </Form.Item>
        </div>
      </div> */}

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

export default EditGalleryComponent;
