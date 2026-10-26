export type Question = {
  domain: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  wrongHint: string;
  africanTip: string;
};

export const questions: Question[] = [
  {
    domain: "Cloud Concepts",
    question:
      "A startup only wants to pay for computing power when customers are actually using its app. Which cloud benefit does this describe?",
    options: ["Capital expenditure (CapEx)", "Consumption-based pricing", "High availability", "Fault tolerance"],
    answer: 1,
    explanation:
      "Consumption-based (pay-as-you-go) pricing means you pay only for the resources you use. There is no big upfront purchase, which makes it an operational expense (OpEx).",
    wrongHint:
      "CapEx is upfront spending on hardware. High availability and fault tolerance are about uptime, not how you are billed.",
    africanTip:
      "Think of buying airtime bundles: you top up and pay for exactly what you use, instead of buying your own cell tower.",
  },
  {
    domain: "Cloud Concepts",
    question:
      "Under the shared responsibility model, which item is ALWAYS the customer's responsibility, no matter the service type (IaaS, PaaS, or SaaS)?",
    options: ["Physical datacenter security", "Operating system patching", "Information and data", "Network hardware"],
    answer: 2,
    explanation:
      "Customers always own their data, devices, accounts, and identities. Microsoft handles physical security and hardware. OS patching moves to Microsoft in PaaS and SaaS.",
    wrongHint:
      "Physical security and network hardware are always Microsoft's job. OS patching is only yours in IaaS.",
    africanTip:
      "Like a matatu: the SACCO keeps the vehicle roadworthy, but you are responsible for your own phone and wallet on board.",
  },
  {
    domain: "Azure Architecture",
    question:
      "What is the main purpose of Azure Availability Zones?",
    options: [
      "To reduce your monthly Azure bill",
      "To protect apps from a whole datacenter failing inside a region",
      "To organise resources by department",
      "To give users single sign-on",
    ],
    answer: 1,
    explanation:
      "Availability Zones are physically separate datacenters within one Azure region, each with its own power, cooling, and networking. Spreading your app across zones keeps it running if one datacenter goes down.",
    wrongHint:
      "Zones are about resilience, not cost, organisation (that's resource groups/tags), or identity (that's Microsoft Entra ID).",
    africanTip:
      "Mobile money agents work the same way: if one agent in town is closed or out of float, you walk to another nearby and your money is still safe.",
  },
  {
    domain: "Azure Architecture",
    question:
      "Which statement about Azure resource groups is TRUE?",
    options: [
      "A resource can belong to several resource groups at once",
      "Resource groups can be nested inside each other",
      "Deleting a resource group deletes all resources inside it",
      "Every resource in a group must be in the same region",
    ],
    answer: 2,
    explanation:
      "A resource group is a logical container. When you delete it, everything inside is deleted too, which is handy for cleaning up test environments.",
    wrongHint:
      "Each resource lives in exactly one group, groups cannot be nested, and resources in a group can be in different regions.",
    africanTip:
      "Like a chama's shared folder of records: shred the folder and every receipt inside goes with it, so be careful.",
  },
  {
    domain: "Resource Management",
    question:
      "Your company must ensure that resources can only be created in the 'South Africa North' region. Which Azure service enforces this?",
    options: ["Azure Policy", "Resource locks", "Azure Advisor", "Tags"],
    answer: 0,
    explanation:
      "Azure Policy creates and enforces rules on resources, such as allowed locations or VM sizes. Non-compliant deployments are blocked or flagged.",
    wrongHint:
      "Locks prevent deletion/changes, Advisor only gives recommendations, and tags are labels for organisation and billing.",
    africanTip:
      "Like county by-laws: they set the rules everyone must follow, e.g. where kiosks are allowed to be built.",
  },
];
