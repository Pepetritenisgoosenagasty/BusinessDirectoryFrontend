import { Form, Input } from "antd";

const SocialComponent = () => {
    return (
        <div className="addForm container-fluid">
        <div>
          <h5>Social Media</h5>
          <p>
            We are not responsible for any damages caused by the use of this
            website, or by posting business listings here. Please use our site at
            your own discretion and exercise good judgement as well as common
            sense when advertising business here.
          </p>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <label>
                LinkedIn Profile URL
              </label>
            <Form.Item
              name="linkedin"
            >
            <Input placeholder="http://linkedin.com/business-deirectory" />
            </Form.Item>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <label>
                Facebook Profile URL
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
                Twitter Profile URL
              </label>
            <Form.Item
              name="twitter"
            >
            <Input placeholder="http://twitter.com/business-deirectory" />
            </Form.Item>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <label>
                Youtube URL
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
          }
        `}</style>
      </div>
    )
}

export default SocialComponent
