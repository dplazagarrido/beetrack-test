import axios from 'axios';
import {urlApiBack} from '../utils/appisUrlConfig';

const apiBeetrack = axios.create({
    baseURL: urlApiBack,
    timeout: 1000,
  });

export default apiBeetrack;