export type Consultant = {
  id: string;
  name: string;
  role: string;
  rating: number;
  experience: number; // years
  price: number; // per minute
};

export type Filters = {
  query?: string;
  skill?: string;
  category?: string | null;
  experience?: number | null;
  rating?: number | null;
  priceRange?: string | null;
  onlineOnly?: boolean;
  sort?: string | null;
};
