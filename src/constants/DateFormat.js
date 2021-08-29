import dayjs from  "dayjs";
import localizedFormat  from 'dayjs/plugin/localizedFormat'
dayjs.extend(localizedFormat)


const formatDate = (date) => {
    try {
        if(date != null){
            return dayjs(date).format('MMMM, D')
        }

        return ''
        
    } catch (error) {
        console.log(error)
    }
}

const formatTime = (time) => {
    try {

        if(time != null){

            return dayjs(time).format('h:mm:s A')
        }

        return ''
        
    } catch (error) {
        console.log(error)
    }
}



const formatDateHuman = (date) => {
    try {
        if(date != null){

            return dayjs(date).format('LL')
        }

        return ''
        
    } catch (error) {
        console.log(error)
    }
}

const formatDay = (day) => {
    try {
        if(day != null) {
            return dayjs().date(day)
        }
    } catch (error) {
        console.log(error)
    }
}

export {formatDate, formatTime, formatDateHuman, formatDay}