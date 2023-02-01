export interface Goods {
  name: string;
  price: number;
}
export interface AdItem {
  company: string;
  goods: Goods[];
}

export interface AdDataComponentType {
  data: AdItem
}