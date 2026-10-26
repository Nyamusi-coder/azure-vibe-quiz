export type Question = {
  domain: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  wrongHint?: string;
  africanTip: string;
};

export const questions: Question[] = [
  {
    domain: "Cloud Concepts",
    question:
      "A startup in Nairobi wants to host a web application without managing the underlying servers or operating system updates. Which cloud service model should they choose?",
    options: ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Serverless Computing"],
    answer: 1,
    explanation:
      "PaaS provides a managed environment for building and deploying apps without managing the underlying infrastructure.",
    africanTip:
      "Think of PaaS like renting a fully furnished stall at the Maasai Market. You bring your goods (your code), but you don't have to build the stall or provide the electricity.",
  },
  {
    domain: "Resource Management",
    question: "What is the primary purpose of an Azure Resource Group?",
    options: [
      "To provide a physical server location",
      "To act as a logical container for Azure resources",
      "To manage user identities and passwords",
      "To bill different departments separately",
    ],
    answer: 1,
    explanation: "A resource group is a logical container that holds related resources for an Azure solution.",
    africanTip:
      "It's like a labeled folder on your phone holding all photos from a specific wedding. The folder doesn't change the photos, it just keeps them organized.",
  },
  {
    domain: "Azure Architecture",
    question: "Which Azure service provides a fully managed NoSQL database?",
    options: ["Azure SQL Database", "Azure Cosmos DB", "Azure Blob Storage", "Azure Virtual Machines"],
    answer: 1,
    explanation: "Azure Cosmos DB is Microsoft's globally distributed, multi-model NoSQL database service.",
    africanTip:
      "Similar to how M-Pesa handles millions of unstructured, rapid-fire transaction records across East Africa without a rigid, traditional table structure.",
  },
  {
    domain: "Cloud Concepts",
    question: "What guarantees that an Azure service will be available a certain percentage of the time?",
    options: ["Service Level Agreement (SLA)", "Total Cost of Ownership (TCO)", "CapEx", "Azure Advisor"],
    answer: 0,
    explanation:
      "An SLA is a formal commitment by Microsoft regarding the uptime and connectivity of a specific Azure service.",
    africanTip:
      "Like a boda boda rider promising to get you to work on time every day; if they fail, you get a discount. An SLA is that promise in writing, with service credits if Microsoft misses it.",
  },
  {
    domain: "Cloud Concepts",
    question:
      "Which cloud deployment model allows an organization to use both on-premises infrastructure and public cloud resources?",
    options: ["Public Cloud", "Private Cloud", "Hybrid Cloud", "Community Cloud"],
    answer: 2,
    explanation:
      "A hybrid cloud combines on-premises (private) and public cloud resources, allowing data and apps to be shared between them.",
    africanTip:
      "Like a farmer who keeps some maize in their own granary at home but also stores extra at the NCPB depot. They use both and move stock between them as needed.",
  },
];
