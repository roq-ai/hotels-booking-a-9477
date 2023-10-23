import { BookingInterface } from 'interfaces/booking';
import { ReviewInterface } from 'interfaces/review';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface PropertyInterface {
  id?: string;
  name: string;
  location: string;
  price: number;
  availability?: boolean;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  review?: ReviewInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
    review?: number;
  };
}

export interface PropertyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  location?: string;
  company_id?: string;
}
