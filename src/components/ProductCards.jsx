import React from "react";

const ProductCards = ({ searchQuery, product }) => {
  // const category = useParams()
  // const [products, setProducts] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [filter, setFilter] = useState([]);

  // const apiUrl = 'https://dummyjson.com/products';

  // useEffect(() => {
  //   // const apiUrl = category ? `https://dummyjson.com/products?category=${category}` : "https://dummyjson.com/products";
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data.products);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log("Error while fetching data", err);
  //       setIsLoading(false);
  //     });
  // }, [searchQuery, category]);

  // useEffect(() => {
  //   filterProducts(products, searchQuery,category);
  // }, [products, searchQuery, category]);

  // const filterProducts = (products, query, category) => {
  //   const filtered = products.filter(
  //     (product) =>
  //       product.title.toLowerCase().includes(query?.toLowerCase()) ||
  //       product.description.toLowerCase().includes(query?.toLowerCase())
  //   );
  //   setFilter(filtered);
  // };

  // const sliceProduct = searchQuery ? filter.slice(0, 10) : products.slice(0, 10);

  return (
    <div
      key={product.id}
      className="max-w-[300px] h-[500px] rounded-lg overflow-hidden shadow-2xl hover:cursor-pointer hover:drop-shadow-2xl hover:scale-[1.02] hover:bg-black/20"
    >
      <img
        className="w-full h-[250px] object-fill hover:scale-110"
        src={product.images[0]}
        alt={product.title}
      />
      <div className="p-6 flex flex-col justify-between">
        <p className="font-bold text-xl mb-2">{product.title}</p>
        <p className="text-gray-700 text-base">{product.description}</p>
        <div className="flex justify-between">
          <p>${product.price}</p>
          <p>{product.discountPercentage}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
