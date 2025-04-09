import axios from "axios";

const SearchImages = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=9TINDXLTpHzuiDoHe0auL6704ZWxe6TH2EdIlK-1npw'
    const response =await axios.get(url,{
        params:{
            query:'cars'
        }
    })
    console.log(response)
    return response.data.results
}

export default SearchImages