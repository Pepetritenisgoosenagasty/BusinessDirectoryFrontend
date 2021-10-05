import authServices from "src/services/auth.services"
import { handleError } from "src/utils/ErrorHandler"
import { handleErrorStatus } from "src/utils/handleErrorStatus"
import { enqueueSnackbar } from "./notification.action"



export const performGetQuery = (path) => {
    return authServices.requestGET(path).then(res => {
        let results = res?.data?.data

        return  results 
         
    }).catch(err => {
      handleErrorStatus(err)
    })
} 

export const performSelect = (path) =>  {
    return authServices.requestGET(path).then(res => {

        let results = res?.data?.data
        
        return  results
       
         
    }).catch(err => {
      handleErrorStatus(err)

    })
} 

export const performGetAll = (path) => dispatch => {
  return authServices.requestGET(path).then(res => {

      let results = res.data
      
      return  results 
     
       
  }).catch(err => {
    handleErrorStatus(err)

  })
} 


export const performCreate = (path,data) => dispatch => {

    return authServices.requestPOST(path,data).then(res => {
        let {data} = res
        dispatch(enqueueSnackbar({
            // message: data?.message,
            message: "Created Successfully",
            options: {
              variant: 'success' 
            }
          }))

          return data 

    }).catch(error => {
      if(error){

        handleError(error, dispatch)
      }
        return false
    })

}

export const performCreateReviews = (path,data) => dispatch => {

  return authServices.requestPOSTReviews(path,data).then(res => {
      let {data} = res
      dispatch(enqueueSnackbar({
          // message: data?.message,
          message: "Review Submitted Successfully",
          options: {
            variant: 'success' 
          }
        }))

        return data 

  }).catch(error => {
    if(error){

      handleError(error, dispatch)
    }
      return false
  })

} 

export const performUpdate = (path,data) => dispatch => {

    return authServices.requestPUT(path,data).then(res => {
        let {data} = res
        dispatch(enqueueSnackbar({
            message: data?.name + " Update Successful",
            options: {
              variant: 'success' 
            }
          }))

          return data

    }).catch(error => {
        handleError(error, dispatch)
        return false
    })

} 

export const performPatch = (path,data) => dispatch => {

  return authServices.requestPATCH(path,data).then(res => {
      let {data} = res
      dispatch(enqueueSnackbar({
          message: data?.message,
          options: {
            variant: 'success' 
          }
        }))

        return true

  }).catch(error => {
      handleError(error, dispatch)
      return false
  })

} 


export const performDelete = (path) => dispatch => {

    return authServices.requestDELETE(path).then(res => {
        let {data} = res
        dispatch(enqueueSnackbar({
            message: data?.name + " deleted successfully",
            options: {
              variant: 'success' 
            }
          }))

          return true

    }).catch(error => {
        handleError(error, dispatch)
        return false
    })

}


export const toastSuccess = (message) => dispatch =>{
    dispatch(enqueueSnackbar({
        message: message,
        options: {
          variant: 'success' 
        }
      }))
}

export const toastError = (message) => dispatch =>{
    dispatch(enqueueSnackbar({
        message: message,
        options: {
          variant: 'error' 
        }
      }))
}