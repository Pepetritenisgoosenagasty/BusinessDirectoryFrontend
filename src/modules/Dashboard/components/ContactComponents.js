import Map from "@/components/Map";
import { Form, Input, Select } from "antd";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useEffect, useState } from "react";
import { districts } from "@/constants/Districts";
import { Marker } from "@react-google-maps/api";


const { Option } = Select;




const ContactComponents = (props) => {
  const [value, setValue] = useState();
  const [data, setData] = useState({})
  
 

  useEffect(() => {
    setData({...props?.useLocation})
  }, [props?.useLocation])

props.inputData?.setFieldsValue({
  lat: data?.lat,
  lng: data?.lng
})


// console.log(props)

 //    Marker
 const MarkerContent = () => {
  const position = {
    lat: data?.lat,
    lng: data?.lng,
  };

  return (
    <>
      <Marker
        position={position}
        animation={google.maps.Animation.BOUNCE}
        icon={{
          url: "https://img.icons8.com/glyph-neue/64/000000/marker.png",
          scaledSize: new window.google.maps.Size(40, 40),
        }}
      />
    </>
  );
};


  return (
    <div className="addForm container-fluid">
      <div>
        <h5>Business Contact Information</h5>
        <p>
         Input field with <code>*</code> on lable means field is required.
        </p>
      </div>
      <div className="row mt-3">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-12">
              <label>
               City<sup className="text-danger">*</sup>
              </label>
              <Form.Item
                name="district"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  showSearch
                  style={{ width: "100%" }}
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {
                    districts.map((item, index )=> (
                      <Option key={index} value={item}>{item}</Option>

                    ))
                  }
                </Select>
              </Form.Item>
            </div>
            <div className="col-12">
              <label>
                Address
              </label>
              <Form.Item
                name="address"
              >
               <Input placeholder="eg. Naa Adjeley Street 435"/>
              </Form.Item>
            </div>
            <div className="col-12">
              <label>
                Phone Number<sup className="text-danger">*</sup>
              </label>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="GH"
                  value={value}
                  onChange={setValue}
                  maxLength={17}
                />
              </Form.Item>
            </div>
            <div className="col-12">
              <label>
                Email<sup className="text-danger">*</sup>
              </label>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input type="email" placeholder="info@example.com" />
              </Form.Item>
            </div>
            <div className="col-12">
              <label>
                Website
              </label>
              <Form.Item
                name="website"
               
              >
                <Input placeholder="https://" />
              </Form.Item>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <label>
            Your Current Location
          </label>
          <div style={{ width: "100%", height: "290px" }}>
            <Map zoom={10}> 
              <MarkerContent />
            </Map>
          </div>

        <div className="row mt-4">
        <div className="col-6">
              <label>
                Latitude
              </label>
              <Form.Item
                name="lat"
               
              >
                <Input  disabled/>
              </Form.Item>
            </div>
            <div className="col-6">
              <label>
                Longitude
              </label>
              <Form.Item
                name="lng"
               
              >
                <Input  disabled/>
              </Form.Item>
            </div>
        </div>
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

export default ContactComponents;
