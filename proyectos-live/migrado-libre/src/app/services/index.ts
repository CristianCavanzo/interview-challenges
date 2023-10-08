import axios from "axios";

export const getProducts = async () => {
  const {data} = await axios<{
    results: Product[];
  }>({
    url: `${process.env.NEXT_PUBLIC_URL_API}/sites/MLA/search?seller_id=${process.env.NEXT_PUBLIC_SELLER_ID}`,
  });

  return data.results;
};
