import axios from '../../utils/axios'
import domainConf from '../../utils/domain_conf'

const home = {
  apiTest () {
    return axios
      .get(domainConf.apiBaseURL + 'Index/index/index')
      .catch(function (error) {
        console.log(error)
      })
  }
}
export default home
