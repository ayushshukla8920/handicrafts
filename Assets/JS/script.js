function buynow(pname,ppath,pprice) {
    // Product information (replace this with your actual product details)
    const productInfo = {
      name: pname,
      path: ppath,
      price: pprice,
    };
  
    // Create a query string for passing product information (optional)
    const queryString = `?name=${encodeURIComponent(productInfo.name)}&price=${encodeURIComponent(productInfo.path)}&description=${encodeURIComponent(productInfo.price)}`;
  
    // Redirect to the new page with the query string
    window.location.href = 'checkout.html' + queryString;
  };
  