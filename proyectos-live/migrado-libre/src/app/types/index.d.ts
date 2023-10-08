 interface Product {
  id: string;
  title: string;
  condition: string;
  thumbnail_id: string;
  catalog_product_id: string;
  listing_type_id: string;
  permalink: string;
  buying_mode: string;
  site_id: string;
  category_id: string;
  domain_id: string;
  thumbnail: string;
  currency_id: string;
  order_backend: number;
  price: number;
  original_price: null;
  sale_price: null;
  sold_quantity: number;
  available_quantity: number;
  official_store_id: number;
  use_thumbnail_id: boolean;
  accepts_mercadopago: boolean;
  tags: string[];
  shipping: Shipping;
  stop_time: Date;
  seller: Seller;
  seller_address: SellerAddress;
  address: Address;
  attributes: Attribute[];
  installments: Installments;
  winner_item_id: null;
  catalog_listing: boolean;
  discounts: null;
  promotions: unknown[];
  inventory_id: string;
}

 interface Address {
  state_id: string;
  state_name: string;
  city_id: string;
  city_name: string;
}

 interface Attribute {
  id: string;
  name: string;
  value_id: null | string;
  value_name: string;
  attribute_group_id: string;
  attribute_group_name: string;
  value_struct: null;
  values: Value[];
  source: number;
  value_type: string;
}

 interface Value {
  id: null | string;
  name: string;
  struct: null;
  source: number;
}

 interface Installments {
  quantity: number;
  amount: number;
  rate: number;
  currency_id: string;
}

 interface Seller {
  id: number;
  nickname: string;
  car_dealer: boolean;
  real_estate_agency: boolean;
  _: boolean;
  registration_date: Date;
  tags: string[];
  car_dealer_logo: string;
  permalink: string;
  seller_reputation: SellerReputation;
  eshop: Eshop;
}

 interface Eshop {
  eshop_id: number;
  seller: number;
  nick_name: string;
  eshop_status_id: number;
  site_id: string;
  eshop_experience: number;
  eshop_rubro: null;
  eshop_locations: unknown[];
  eshop_logo_url: string;
}

 interface SellerReputation {
  level_id: string;
  power_seller_status: string;
  transactions: Transactions;
  metrics: Metrics;
}

 interface Metrics {
  sales: Sales;
  claims: Cancellations;
  delayed_handling_time: Cancellations;
  cancellations: Cancellations;
}

 interface Cancellations {
  period: string;
  rate: number;
  value: number;
}

 interface Sales {
  period: string;
  completed: number;
}

 interface Transactions {
  canceled: number;
  completed: number;
  period: string;
  ratings: Ratings;
  total: number;
}

 interface Ratings {
  negative: number;
  neutral: number;
  positive: number;
}

 interface SellerAddress {
  comment: string;
  address_line: string;
  id: null;
  latitude: null;
  longitude: null;
  country: City;
  state: City;
  city: City;
}

 interface City {
  id: string;
  name: string;
}

 interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
  benefits: null;
  promise: null;
}
