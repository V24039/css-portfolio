export interface ILinksValue {
  id: number;
  element: string;
  href: string;
}

export enum LinkElements {
  LINKEDIN = "LinkedIn",
  GITHUB = "GitHub",
}

export const links: ILinksValue[] = [
  {
    id: 0,
    element: LinkElements.LINKEDIN,
    href: "https://www.linkedin.com/in/venu-soganadgi",
  },
  {
    id: 1,
    element: LinkElements.GITHUB,
    href: "https://github.com/V24039",
  },
];
