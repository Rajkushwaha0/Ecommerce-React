function OrderDetailsProduct({ image, title, price, quantity, onRemove }) {
  const quantityAvailable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <div className="order-details-product d-flex flex-row">
        <div className="order-details-product-img d-flex">
          {/* <img  src={image}/> */}
          <img src="https://assets-global.website-files.com/6256995755a7ea0a3d8fbd11/6257ec77a5eb90b45167d7b1_607ec34ab018c9feb781d314_5.jpeg" />
        </div>
        <div className="order-details-product-data d-flex flex-column">
          {/* <div>{title}</div>
          <div>{price}</div> */}
        </div>
        <div className="order-details-product-actions d-flex flex-column">
          <div className="order-details-product-quantity">
            <div className="fw-bold">Quantity</div>
            <div className="form-group">
              <select className="form-select">
                {quantityAvailable.map((id) => (
                  //   <option selected={quantity == id} value={id} key={id}>
                  //     {id}
                  //   </option>
                  <option value={id} key={id}>
                    {id}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            className="order-details-product-remove btn btn-danger"
            // onClick={onRemove}
          >
            Remove
          </button>
        </div>
      </div>
      <hr />
    </>
  );
}

export default OrderDetailsProduct;
