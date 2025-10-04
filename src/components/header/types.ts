export type NavLinkItem = {
  kind: 'link';
  label: string;
  href: string;
  icon?: string;
};

export type NavDropdownItem = {
  kind: 'dropdown';
  label: string;
  id: 'language';
};

export type NavActionItem = {
  kind: 'action';
  label: string;
  id: 'logout';
  icon?: string;
};

export type NavItem = NavLinkItem | NavDropdownItem | NavActionItem;
