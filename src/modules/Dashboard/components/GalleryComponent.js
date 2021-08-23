import { Form, Input, Button, Select, Tag } from "antd";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const GalleryComponent = () => {
  const props = {
    name: "file",
    multiple: true,
    action: "",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="addForm container-fluid">
      <div>
        <h5>Upload Images</h5>
        <p>
          We are not responsible for any damages caused by the use of this
          website, or by posting business listings here. Please use our site at
          your own discretion and exercise good judgement as well as common
          sense when advertising business here.
        </p>
      </div>
      <div className="row mt-3">
        <div className="col-lg-12 col-md-12 col-sm-12">
          {/* <label>
              Business Name<sup className="text-danger">*</sup>
            </label> */}
          <Form.Item
            name="images"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag images to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other bad images
              </p>
            </Dragger>
          </Form.Item>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <label>Video URL</label>
          <Form.Item
            name="video"
            rules={[
              {
                required: true,
              },
            ]}
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
        }
      `}</style>
    </div>
  );
};

export default GalleryComponent;
