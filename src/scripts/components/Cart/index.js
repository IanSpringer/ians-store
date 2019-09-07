export const addToCart = (id, qty = 1, options = {}) => {
  return new Promise((resolve, reject) => {
    const request = {
      quantity: qty,
      id: id,
      options: options
    }

    $.ajax({
        type: "POST",
        url: '/cart/add.js',
        data: request,
        dataType: 'json',
        success: function(data) {
          resolve(data)
        },
        error: function(jqXHR, textStatus, errorThrown) {
          reject(jqXHR.responseText)
        }
    })
  })
}

export const getCart = () => {
  return new Promise((resolve, reject) => {
      $.ajax({
        type: "GET",
        url: '/cart.js',
        dataType: 'json',
        success: function(data) {
          resolve(data)
        },
        error: function(jqXHR, textStatus, errorThrown) {
          reject(jqXHR.responseText)
      }
    })
  })
}
