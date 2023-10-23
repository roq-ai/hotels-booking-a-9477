interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Property Manager'],
  tenantName: 'Company',
  applicationName: 'Hotels Booking Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage own user information',
    'Book a property',
    'Create a review for a property',
    'View available properties',
  ],
  ownerAbilities: ['Manage user information', 'Manage company details', 'Manage properties', 'Manage bookings'],
  getQuoteUrl: 'https://app.roq.ai/proposal/bb7565b1-f1e9-4fb0-b0b3-0bceb27e42e0',
};
