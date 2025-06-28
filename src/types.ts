export interface CallToAction {
  text?: string;
  href?: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  target?: '_blank' | '_self' | '_parent' | '_top' | string;
  type?: 'button' | 'submit' | 'reset'; // If not 'button', 'submit', or 'reset', it's treated as a link (<a>)
  class?: string; // For additional CSS classes
  // Allow any other HTML attributes for buttons or anchors
  [key: string]: any;
}

export interface MetaData {
  title?: string;
  description?: string;
  ignoreTitleTemplate?: boolean;
  canonical?: string | URL;
  robots?: {
    index?: boolean;
    follow?: boolean;
  };
  openGraph?: {
    url?: string | URL;
    site_name?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
    }>;
    type?: string;
    locale?: string;
  };
  twitter?: {
    handle?: string;
    site?: string;
    cardType?: string;
  };
}

export interface Image {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Video {
  src: string;
  type?: string;
  width?: number;
  height?: number;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  classes?: Record<string, string | Record<string, string>>;
  bg?: string;
  text?: string; // Generic text prop that might be used by some widgets
}

export interface ItemGridItem {
  title?: string;
  description?: string;
  icon?: string;
  img?: Image;
  callToAction?: CallToAction;
  classes?: {
    container?: string;
    panel?: string;
    icon?: string;
    title?: string;
    description?: string;
    action?: string; // Note: ItemGrid.astro uses itemClasses?.actionClass, so this might need to be actionClass
  };
}

export interface ItemGrid extends Widget {
  items?: Array<ItemGridItem>;
  columns?: 1 | 2 | 3 | 4;
  defaultIcon?: string;
  itemTextColor?: string;
  overrideIconClass?: string;
}

export interface Features extends Widget {
  title?: string;
  subtitle?: string;
  tagline?: string;
  items?: Array<ItemGridItem>; // Re-uses ItemGridItem for consistency
  columns?: 1 | 2 | 3 | 4;
  defaultIcon?: string; // Added to match ItemGrid
  itemTextColor?: string;
  overrideIconClass?: string;
  // Highlight specific properties if needed, or use classes from Widget
}

export interface Faqs extends Widget {
  title?: string;
  subtitle?: string;
  tagline?: string;
  items?: Array<ItemGridItem>; // Re-uses ItemGridItem
  columns?: 1 | 2; // Typically 1 for accordion, but allow 2 for other layouts
  // classes for FAQs can be more specific if needed, or rely on ItemGrid's classes
}

export {}; // Ensure this file is treated as a module