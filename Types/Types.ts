type SectionType = {
  title: string;
  image: string;
};

export type SidebarProps = {
  sections: SectionType[];
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export type IDProps = {
  title: string;
  description: string;
  image?: string;
};

export type IconsType = {
  icon: string;
  description: string;
};

export type CardProps = {
  title: string;
  description: string;
};

export type Expenditure = {
  category: string;
  amounts: number[];
};

export type ExpenditureGraphProps = {
  expenditures: Expenditure[];
};

export type ModalType = {
  isOpen: boolean;
  onClose: () => void;
};
