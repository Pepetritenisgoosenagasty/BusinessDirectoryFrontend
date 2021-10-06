import React, { useEffect, useState } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import authServices from 'src/services/auth.services';
import { URL_UPLOAD_FILE } from '@/constants/routes';
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const  UploadImg = (props)  => {

  
let {fileList} = props
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
  })

useEffect(() => {
  handleSetUpload()
}, [state])




// useEffect(() => {
//   if(props.initialImages){
//     // setState({state, fileList: [...props?.initialImages]})
//   }
// }, [props?.initialImages])


const handleSetUpload = () => {

  if(props?.onUpload) props?.onUpload(state?.fileList)
  
  
}

const  handleCancel = () => setState({...state, previewVisible: false });

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setState({...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

 const  handleChange = ({ fileList }) => setState({ ...state,fileList });

 const { previewVisible, previewImage, previewTitle } = state;

 const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Click to Upload Images</div>
  </div>
);
   
const handleDelete = async (image) => {

  if(_.has(image,'id')){

    authServices.requestDELETE(URL_UPLOAD_FILE + '/'+ image?.id,image?.id).then(res => {
      if(res?.data){
        return true
      }
    }).catch(err => {
      return false
    })

  }else{
    return true
  }

}
    return (
      <>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
          onRemove={handleDelete}

        >
          {fileList?.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
    );
}

export default UploadImg;