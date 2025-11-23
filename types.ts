import React from 'react';

export type PlanType = 'small_business' | 'enterprise';
export type BillingCycle = 'monthly' | 'semi_annual' | 'annual';

export interface Plan {
  id: string;
  name: string;
  priceBase: number; // Monthly base price
  features: string[];
  isPopular?: boolean;
  accentColor?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
   image?: string;
}

export interface NavItem {
  label: string;
  path: string;
}