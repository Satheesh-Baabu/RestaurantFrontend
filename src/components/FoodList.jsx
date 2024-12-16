import React from 'react'

function FoodList() {
    return (
        <div className="card bg-base-100 w-72 shadow-xl">
  <figure>
    <img
      src="https://t4.ftcdn.net/jpg/08/56/29/69/240_F_856296990_Z5xSxdnoM98cIbszHimBJ5Bvbe9qxasy.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Chappathi</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add Cart</button>
    </div>
  </div>
</div>
    )
}

export default FoodList