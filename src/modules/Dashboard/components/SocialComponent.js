import { Form, Input } from "antd";
import { useEffect, useState } from "react";

const SocialComponent = (props) => {
  const [business, setBusiness] = useState([])


  useEffect(() => {
    setBusiness({...props?.businessData})
  }, [props?.businessData])


useEffect(() => {
  props?.inputData?.setFieldsValue({
    linkedin: business?.social_media_handles?.linkedIn,
    facebook: business?.social_media_handles?.facebook,
    twitter: business?.social_media_handles?.twitter,
    youtube: business?.social_media_handles?.youtube,
  })
}, [business])
    return (
        <div className="addForm container-fluid">
        <div>
          <h5>Social Media</h5>
          <p>
          Input field with <code>*</code> on lable means field is required.
          </p>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <label>
                LinkedIn Profile URL <small>(Optional)</small>
              </label>
            <Form.Item
              name="linkedin"
            >
            <Input placeholder="http://linkedin.com/business-deirectory" />
            </Form.Item>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <label>
                Facebook Profile URL <small>(Optional)</small>
              </label>
            <Form.Item
              name="facebook"
            >
            <Input placeholder="http://facebook.com/business-deirectory" />
            </Form.Item>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <label>
                Twitter Profile URL <small>(Optional)</small>
              </label>
            <Form.Item
              name="twitter"
            >
            <Input placeholder="http://twitter.com/business-deirectory" />
            </Form.Item>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <label>
                Youtube URL <small>(Optional)</small>
              </label>
            <Form.Item
              name="youtube"
            >
            <Input placeholder="http://youtube.com/business-deirectory" />
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
    )
}

export default SocialComponent
