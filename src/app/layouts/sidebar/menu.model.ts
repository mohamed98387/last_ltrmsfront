export interface MenuItem {
  id?: number;
  label?: string;
  isAdmin?: null;
  icon?: string;
  link?: string;
  subItems?: any;
  isTitle?: boolean;
  badge?: any;
  parentId?: number;
  isLayout?: boolean;
}
