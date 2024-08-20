import { Expenditure, IDProps, IconsType } from "@/Types/Types";

export const sections = [
  { title: "Explore", image: "explore.svg" },
  { title: "Add", image: "add.svg" },
  { title: "User", image: "user.svg" },
  { title: "Profile", image: "profile.svg" },
];

export const id: IDProps[] = [
  {
    title: "The Card is just the start",
    description:
      "Everything you need to control spend and optimize finance operations, all on a single platform.",
    image: "/HomeCard.webp",
  },
  {
    title: "Global Corporate Card",
    description:
      "Control your spend globally with unlimited cards and full visibility",
    image: "/mobile.webp",
  },
  {
    title: "Expense Management",
    description:
      "Automate expense reporting and control employee expenses at scale",
    image: "/rsvp.webp",
  },
  {
    title: "Accounting automation",
    description:
      "Stay compliant, eliminate errors, and close your books faster.",
    image: "/restate.webp",
  },
  {
    title: "Accounts Payable",
    description:
      "Pay bills faster with automated approvals, anywhere you spend",
    image: "/restate.webp",
  },
];

export const data = [
  { label: "Cashback", value: 181.45, color: "bg-blue-500" },
  { label: "Number of trips", value: 3, color: "bg-green-500" },
  { label: "Average trip cost", value: 1360.26, color: "bg-yellow-500" },
  { label: "Biggest trip", value: 2207.48, color: "bg-red-500" },
];

export const icons: IconsType[] = [
  {
    icon: "/next.svg",
    description: "Set spend controls and empower employees",
  },
  {
    icon: "/vercel.svg",
    description: "Simplify payments and increase efficiency",
  },
  {
    icon: "/next.svg",
    description: "Automate accounting tasks and close faster",
  },
  {
    icon: "/vercel.svg",
    description: "Get valuable insights and maximize every dollar",
  },
];

export const cards = [
  { name: "OneBiteBig", holder: "Liddy Dione", utilization: "0%" },
  { name: "Elsie", holder: "James Smith", utilization: "0%" },
  { name: "Education Stipend", holder: "Linda Davis", utilization: "0%" },
  { name: "Romantic (Temporary)", holder: "Linda Davis", utilization: "0%" },
  { name: "Harold A", holder: "Lenny Dione", utilization: "0%" },
  { name: "Mark Goldberger", holder: "Linda Davis", utilization: "0%" },
  { name: "Heavy Metal Card", holder: "Lenny Dione", utilization: "0%" },
  { name: "Jacob Schwartz", holder: "James Smith", utilization: "0%" },
  { name: "Cory Greenberg", holder: "James Smith", utilization: "0%" },
  { name: "Transportation", holder: "Linda Davis", utilization: "0%" },
];

export const expenditures: Expenditure[] = [
  { category: "Groceries", amounts: [200, 450, 700, 2250, 3200] },
  { category: "Rent", amounts: [3000, 4050, 5100, 6150, 7200] },
  { category: "Entertainment", amounts: [2150, 3200, 4250, 5300, 5350] },
  { category: "Transportation", amounts: [150, 300, 450, 600, 750] },
  { category: "Utilities", amounts: [100, 200, 300, 400, 500] },
];

export const cardData = [
  {
    id: 1,
    dpid: "dpid://138/v2",
    title:
      "Treatment with a selective histone deacetylase 1 and 2 inhibitor in aged mice rejuvenates multiple organ systems",
    author: "Alessandra Tammaro",
    date: "5/02/2024",
  },
  {
    id: 2,
    dpid: "dpid://139/v1",
    title: "CRISPR-Cas9 gene editing reverses Huntington's disease in mice",
    author: "John Smith",
    date: "6/03/2024",
  },
  {
    id: 3,
    dpid: "dpid://140/v3",
    title: "Novel mRNA vaccine shows promise against multiple cancer types",
    author: "Emily Chen",
    date: "7/04/2024",
  },
  {
    id: 4,
    dpid: "dpid://141/v1",
    title:
      "Artificial photosynthesis breakthrough could lead to more efficient solar energy",
    author: "Michael Johnson",
    date: "8/05/2024",
  },
  {
    id: 5,
    dpid: "dpid://142/v2",
    title:
      "Quantum entanglement achieved at room temperature in macroscopic objects",
    author: "Sophia Rodriguez",
    date: "9/06/2024",
  },
  {
    id: 6,
    dpid: "dpid://143/v1",
    title: "New AI model predicts protein folding with unprecedented accuracy",
    author: "David Lee",
    date: "10/07/2024",
  },
  {
    id: 7,
    dpid: "dpid://144/v3",
    title:
      "Biodegradable plastic alternative created from algae shows promise for reducing ocean pollution",
    author: "Laura Martinez",
    date: "11/08/2024",
  },
];
