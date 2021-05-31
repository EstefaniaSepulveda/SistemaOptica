getAuth: tokenName => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    const token = localStorage.getItem('apollo-token')
    if (token) {
      return 'Bearer ' + token
    } else {
      return ''
    }
};