import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductAddAction } from "../Actions/productAction";
import "./admin.css";

const AddProductsAdmin = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brand, setBrand] = useState("WADBROS INDIA");
  const [type, setType] = useState("");
  const [description, setDescription] = useState([
    {
      key: "",
      value: "",
    },
  ]);
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");

  const handleDescriptionChange = (index, key, value) => {
    const updatedDescription = [...description];
    updatedDescription[index] = { key, value };
    setDescription(updatedDescription);
  };

  const addDescriptionField = () => {
    setDescription([...description, { key: "", value: "" }]);
  };
 
  const removeDescriptionField = (index) => {
    const updatedDescription = [...description];
    updatedDescription.splice(index, 1);
    setDescription(updatedDescription);
  };

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the product data to your backend API for processing
    const data = {
      name: name,
      image: image,
      brand: brand,
      type: type,
      description: description,
      price: price,
      details: details,
      category: category,
    };
    dispatch(ProductAddAction(data));
  
  };

  return (
    <div>
      <p
        className="companybox"
        style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
      >
        <div className="product-form-container">
          <h2>Add New Product</h2>
          <form onSubmit={handleSubmit} className="product-form">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              required
              autoComplete="off"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              required
              value={image}
              autoComplete="off"
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />

            <label>Type:</label>
            <select
              name="type"
              required
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
              style={{ float: "left" }}
            >
              <option value="">Select a type</option>
              <option value="Accessories">Pool Accessories</option>
              <option value="Equiments">Pool Equipments and Maintenance</option>
              <option value="Chemicals">Pool Chemicals</option>
            </select>
            <br />
            <label>Details:</label>
            <textarea
              name="details"
              autoComplete="off"
              required
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            />

            <label>Price:</label>
            <input
              type="number"
              name="price"
              required
              autoComplete="off"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <label>Description:</label>

            {description.map((desc, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={desc.key}
                  onChange={(e) =>
                    handleDescriptionChange(index, e.target.value, desc.value)
                  }
                  placeholder="Key"
                />
                <input
                  type="text"
                  value={desc.value}
                  onChange={(e) =>
                    handleDescriptionChange(index, desc.key, e.target.value)
                  }
                  placeholder="Value"
                />
                 <button type="button" onClick={() => removeDescriptionField(index)}>
              Remove
            </button>
              </div>
            ))}

            <button type="button" onClick={addDescriptionField}>
              Add Description Field
            </button>
          
            <label>Category:</label>
            <select
              name="category"
              value={category}
              required
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              style={{ float: "left" }}
            >
              <option value="">Select a type</option>
              <option value="Swimming Pool Fillers">
                Swimming Pool Fillerss
              </option>
              <option value="Swimming Pool Pump">Swimming Pool Pump</option>
              <option value="Calcium Hypochlorite Powder">
                Calcium Hypochlorite Powder
              </option>
              <option value="Swimming Pool">Swimming Pool</option>
              <option value="Swimming Pool Chemical">
                Swimming Pool Chemical
              </option>
              <option value="Swimming Pool Services">
                Swimming Pool Services
              </option>
              <option value="Swimming Pool Glass Mosaic Tiles">
                Swimming Pool Glass Mosaic Tiles
              </option>
              <option value="Swimming Pool Tiles">Swimming Pool Tiles</option>
              <option value="Swimming Pool Hose Pipe">
                Swimming Pool Hose Pipe
              </option>
              <option value="Swimming Pool Heat Pumps">
                Swimming Pool Heat Pumps
              </option>
              <option value="Swimming Pool Lighting">
                Swimming Pool Lighting
              </option>
              <option value="Swimming Pool Skimmer">
                Swimming Pool Skimmer
              </option>
              <option value="Swimming Pool Cover">Swimming Pool Cover</option>
              <option value="Swimming Pool Heat Pumps">
                Swimming Pool Heat Pumps
              </option>
              <option value="Swimming Pool Suction Nozzle">
                Swimming Pool Suction Nozzle
              </option>
              <option value="Swimming Pool Testing Kit">
                Swimming Pool Testing Kit
              </option>
              <option value="Swimming Pool Chemical Feeder">
                Swimming Pool Chemical Feeder
              </option>
              <option value="SS Swimming Pool Ladders">
                SS Swimming Pool Ladders
              </option>
              <option value="Swimming Pool Gratings">
                Swimming Pool Gratings
              </option>
              <option value="Swimming Water Cascade">
                Swimming Water Cascade
              </option>
              <option value="Swimming Pool Tiles">Swimming Pool Tiles</option>
              <option value="Swimming Pool Construction Contractors">
                Swimming Pool Construction Contractors
              </option>
              <option value="Led Underwater Light">Led Underwater Light</option>
              <option value="Swimming Pool Light">Swimming Pool Light</option>
              <option value="Life Buoy Ring">Life Buoy Ring</option>
              <option value="Pool Loungers">Pool Loungers</option>
              <option value="Mosaic Tile">Mosaic Tile</option>
              <option value="64 Mm Inlet">64 Mm Inlet</option>
              <option value="Tcca 90%">Tcca 90%</option>
              <option value="Swimming Pool Ladder">Swimming Pool Ladder</option>
              <option value="Pool Heat Pump">Pool Heat Pump</option>
              <option value="Swimming Pool Pool Podium">
                Swimming Pool Pool Podium
              </option>
              <option value="Sun Lounger">Sun Lounger</option>
            </select>
            <br />

            <button type="submit">Add Product</button>
          </form>
        </div>
      </p>
    </div>
  );
};

export default AddProductsAdmin;
