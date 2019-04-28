'use strict';

import axios from 'axios';

// request as ajax
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// default content type
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// set base Url
axios.defaults.baseURL = '/';

// intercept the response
axios.interceptors.response.use((response) => {
    // add any conditions before passing response to the actions.
    return response;
});
