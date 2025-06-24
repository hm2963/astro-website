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

export {}; // Ensure this file is treated as a module