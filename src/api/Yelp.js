import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ly6ND-wSI2C8gBjpiPHGtFKH6-cVVVjoCDW-Ow16KfrRV34-po0vzuFNEN14WknxExOvtvzEvSN6F-xB1oqjIpdOImaMgCPJ2OJ2PyYLRAYE0JwokPcwhv1FB_mhXnYx'
    }
})