import { enqueueSnackbar } from "src/redux/actions/notification.action"

export const handleError = (error,dispatch) => {
    if(!error.response){
        return dispatch(enqueueSnackbar({
          message: 'Network Error Try again',
          options: {
            variant: 'info' 
          }
        }))
      }else{
        
        dispatch(enqueueSnackbar({
          message: error.response.data.message,
          options: {
            variant: 'error' 
          }
        }))
      }
   
      return false  
}

