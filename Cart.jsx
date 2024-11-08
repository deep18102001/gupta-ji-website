import React, { useState, useEffect } from "react";

function Cart() {
  let [data, setdata] = useState([]);
  let [updataget, setupdataget] = useState([]);
  let [deep, setdeep] = useState([]);

  function cartupdate() {
    fetch("http://localhost:5000/Product", {
      method: "GET",
    }).then((response) => {
      return response.json().then((resp) => {
        setdata(resp);
      });
    });
  }

  useEffect(() => {
    cartupdate();
  }, []);

  function filterData() {
    let datafilter = data?.filter((item) => {
      return item.cart == "true";
    });
    console.log(datafilter, "datafilter");
    setdeep(datafilter);
  }
  useEffect(() => {
    filterData();
  }, [data]);

  // remove item

  function updatedated(id, updatedValue) {
    fetch(`http://localhost:5000/Product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(updatedValue),
    }).then((response) => {
      response.json().then((resp) => {
        console.log(resp, "respdeepak");
        cartupdate();
      });
    });
  }

  function remove(value) {
    const updatedValue = { ...value, cart: "false" };

    updatedated(value.id, updatedValue);
  }

  return (
    <div className="cart">
      {deep?.map((cart) => {
        return (
          <div>
            

            <div className="Maincssdiv">
              <img src={cart.image} />
              <p>{cart.type}</p>
              <p>{cart.category}</p>
              <p> {cart.description}</p>
              <p>{cart.price}</p>
              <button
                onClick={() => {
                  remove(cart);
                }}
              >
                {" "}
                remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
