import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Security Services',
      href: getPermalink('/security'),
      links: [
        {
          text: 'Penetration Testing Services',
          href: getPermalink('/security/pentest'),
        },
        {
          text: 'Vulnerability Management Services',
          href: getPermalink('/security/vm'),
        },
        {
          text: 'Cloud Security Managed Services',
          href: getPermalink('/security/cloud-security'),
        },
        {
          text: 'Web Application Firewall',
          href: getPermalink('/security/waf'),
        },
        {
          text: 'DevSecOps',
          href: getPermalink('/security/devsecops'),
        },
        {
          text: 'Endpoint Security',
          href: getPermalink('/security/endpoint-security'),
        },
        {
          text: 'Risk and Compliance Services',
          href: getPermalink('/security/risk'),
        },
      ],
    },
    {
      text: 'Cloud Services',
      href: getPermalink('/cloud'),
      links: [
        {
          text: 'Cloud Migration',
          href: getPermalink('/cloud/migration'),
        },
        {
          text: 'Cloud Architecture and Optimization',
          href: getPermalink('/cloud/architecture'),
        },
        {
          text: 'DevOps',
          href: getPermalink('/cloud/devops'),
        },
        {
          text: 'Data, Analytics, AI & ML',
          href: getPermalink('/cloud/analytics'),
        },
        {
          text: 'Application Development & Modernization',
          href: getPermalink('/cloud/application-development-modernization'),
        },
        {
          text: 'Operations, Reliability & Performance',
          href: getPermalink('/cloud/ops'),
        },
      ],
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Company',
      links: [
        {
          text: 'About Us',
          href: getPermalink('/company'), // Assuming '/company' is the about us page
        },
      ],
    },
    {
      text: 'Quote your Pentest',
      href: getPermalink('/quote-your-pentest'),
    },
  ],
  actions: [
    { text: 'Contact Us', href: getPermalink('/get-in-touch/'), variant: 'primary' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Security',
      links: [
        { text: 'Penetration Testing', href: getPermalink('/security/pentest') },
        { text: 'Vulnerability Management', href: getPermalink('/security/vm') },
        { text: 'Cloud Security', href: getPermalink('/security/cloud-security') },
        { text: 'Web Application Firewall', href: getPermalink('/security/waf') },
        { text: 'DevSecOps', href: getPermalink('/security/devsecops') },
        { text: 'Endpoint Security', href: getPermalink('/security/endpoint-security') },
        { text: 'Risk and Compliance', href: getPermalink('/security/risk') },
      ],
    },
    {
      title: 'Cloud',
      links: [
        { text: 'Cloud Migration', href: getPermalink('/cloud/migration') },
        { text: 'Architecture & Optimization', href: getPermalink('/cloud/architecture') },
        { text: 'DevOps', href: getPermalink('/cloud/devops') },
        { text: 'Data, Analytics, AI & ML', href: getPermalink('/cloud/analytics') },
        { text: 'Application Development & Modernization', href: getPermalink('/cloud/application-development-modernization') },
        { text: 'Operations, Reliability & Performance', href: getPermalink('/cloud/ops') },
      ],
    },
    {
      title: 'Resources',
      links: [{ text: 'Blog', href: getBlogPermalink() }],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/company') }, // Assuming '/company' is the about us page
        { text: 'Contact', href: getPermalink('/get-in-touch/') }, // Assuming '/get-in-touch' is the contact page
      ],
    },
  ],
  secondaryLinks: [], // This will be handled differently in the new layout
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/prplbx' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/prplbx/' },
  ],
  contactInfo: {
    address: 'PurpleBox, Inc. Atlanta, GA',
    email: 'contact@prplbx.com',
    phone: '770-852-0562',
  },
  footNote: `
    © ${new Date().getFullYear()} PurpleBox, Inc. All rights reserved.
  `,
  privacyLink: {
    text: 'Privacy Policy',
    href: getPermalink('/privacy-policy-2'),
  },
};
