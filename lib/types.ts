export interface Lead {
  id?: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  createdAt?: Date;
  status?: "new" | "contacted" | "converted";
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export type ServiceType =
  | "Customs Clearance"
  | "International Freight Forwarding"
  | "Inland Transportation"
  | "Warehousing"
  | "Cargo Insurance"
  | "Palletization"
  | "Fumigation"
  | "Packaging & Labeling"
  | "RFID Seal"
  | "Other";
