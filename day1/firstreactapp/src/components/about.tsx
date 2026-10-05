function About() {
    const orgName = "Cognizant";
    const orgAddress = "123 Main Street, City, Country";
    const productList = ["Pepsi", "Coke", "Sprite", "Fanta","Lays"];
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page of my first React app.</p>
      <p>Organization: {orgName}</p>
        <p>Address: {orgAddress}</p>
        <p>Product List:</p>

            <select>
                {productList.map((product, index) => (
                    <option key={index} value={product}>
                        {product}
                    </option>
                ))}
            </select>
        
        
    </div>
  )
}

export default About;