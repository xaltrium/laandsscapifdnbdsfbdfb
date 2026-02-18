export enum ServiceType {
  PAVING = 'Paving & Patios',
  LANDSCAPING = 'General Landscaping',
  FENCING = 'Fencing & Decking',
  TURFING = 'Turfing & Artificial Grass',
  DRIVEWAYS = 'Driveways',
  DESIGN = 'Garden Design'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  service: ServiceType;
  description: string;
}

export interface AIResponse {
  confirmationMessage: string;
  proTip: string;
}
