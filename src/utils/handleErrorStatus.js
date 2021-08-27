import { enqueueSnackbar } from "src/redux/actions/notification.action"
import authServices from "src/services/auth.services"

export const handleErrorStatus = (error) => {
    if(!error.response){
        // return dispatch(enqueueSnackbar({
        //   message: 'Network Error Try again',
        //   options: {
        //     variant: 'info' 
        //   }
        // }))
      }else{

        if(typeof error.response != 'undefined' && error.response.data.status_code == 401){
          if (typeof window !== 'undefined') {
            authServices.signout()
          }
        }
        
      //   dispatch(enqueueSnackbar({
      //     message: error.response.data.error,
      //     options: {
      //       variant: 'error' 
      //     }
      //   }))
      }


   
      return false  
}

