export const RECONHEADERDATA = [
  "recon name",
  "created date",
  "source A % reconciled",
  "source B % reconciled",
  // "rulesets",
  // "rules",
];

export const SOURCEHEADERDATA = ["name", "created date", "status", "files"];
export const TRANSFORMATIONHEADERDATA = ["name", "created date"];

export const FILETABLEHEADERS = ["name", "uploaded date", "records"];

export const SAMPLESOURCESDATA = [
  {
    id: "123456",
    name: "DBS LEDGER",
    createdAt: "2024-02-04T06:32:49.272Z",
    status: "ready",
    files: "50",
  },
];

export const ROWDATA = [
  {
    foundationId: "123456",
    reconDate: "14 Jan 2024",
    sourceA: "Aspire 20dec 2023",
    sourceB: "Aspire 23dec 2023",
    percentageReconciled: "50",
    downloadUrl: "/",
  },
  {
    foundationId: "234567",
    reconDate: "15 Jan 2024",
    sourceA: "Aspire 25dec 2023",
    sourceB: "Aspire 27dec 2023",
    percentageReconciled: "80",
    downloadUrl: "/",
  },
  {
    foundationId: "345678",
    reconDate: "18 Jan 2024",
    sourceA: "Aspire 21nov 2023",
    sourceB: "Aspire 23oct 2023",
    percentageReconciled: "90",
    downloadUrl: "/",
  },
];

export const sourceA = [
  { value: "Account Number", label: "Account Number" },
  { value: "Business Date", label: "Business Date" },
  { value: "Transaction Date", label: "Transaction Date" },
  { value: "Value Date", label: "Value Date" },
  { value: "Transaction Code", label: "Transaction Code" },
  { value: "Transaction", label: "Transaction" },
  { value: "Debit", label: "Debit" },
  { value: "Credit", label: "Credit" },
  { value: "Ordering Party Name", label: "Ordering Party Name" },
  { value: "Beneficiary Name", label: "Beneficiary Name" },
];

export const sourceB = [
  { value: "Account Number", label: "Account Number" },
  { value: "Business Date", label: "Business Date" },
  { value: "Transaction Date", label: "Transaction Date" },
  { value: "Value Date", label: "Value Date" },
  { value: "Transaction Code", label: "Transaction Code" },
  { value: "Transaction", label: "Transaction" },
  { value: "Debit", label: "Debit" },
  { value: "Credit", label: "Credit" },
  { value: "Ordering Party Name", label: "Ordering Party Name" },
  { value: "Beneficiary Name", label: "Beneficiary Name" },
];

export const OPERATOROPTIONS = [
  { value: "eq", label: "=" },
  // { value: "neq", label: "≠" },
  // { value: "lt", label: "<" },
  // { value: "lte", label: "≤" },
  // { value: "gt", label: ">" },
  // { value: "gte", label: "≥" },
];

export const columnsToSelectMapper = (columnStrings: string[]) => {
  return columnStrings.map((column: string) => ({
    label: column,
    value: column,
  }));
};

export const sourceToDropDownMapper = (sourceList: any[]) => {
  return sourceList.map((source) => ({
    label: source.sourceName,
    value: source.id.toString(),
  }));
};

export const MOCKRULESETS = {
  rulesets: [
    {
      rulesetName: "Sweep1",
      rules: [
        {
          sourceA: "Account Name",
          sourceB: "Transaction Id",
          operator: "eq",
        },
        {
          sourceA: "Date",
          sourceB: "Transaction Date",
          operator: "eq",
        },
      ],
    },
    {
      rulesetName: "Sweep2",
      rules: [
        {
          sourceA: "Account id",
          sourceB: "Transaction ref",
          operator: "eq",
        },
      ],
    },
  ],
};

const rulesets = [
  {
    rulesetName: "adsf",
    rules: [
      {
        sourceA: {
          label: "Account Number",
          value: "Account Number",
        },
        sourceB: {
          label: "Transaction ID",
          value: "Transaction ID",
        },
        operator: {
          value: "eq",
          label: "=",
        },
      },
    ],
  },
  {
    rulesetName: "asdf",
    rules: [
      {
        sourceA: {
          label: "Beneficiary Name",
          value: "Beneficiary Name",
        },
        sourceB: {
          label: "Category",
          value: "Category",
        },
        operator: {
          value: "eq",
          label: "=",
        },
      },
      {
        sourceA: {
          label: "Transaction Code",
          value: "Transaction Code",
        },
        operator: {
          value: "eq",
          label: "=",
        },
        sourceB: {
          label: "Card holder",
          value: "Card holder",
        },
      },
    ],
  },
];

const dataA = {
  1: {
    "Account Number": "11",
    "Business Date": "17-Sep-22",
    "Transaction Date": "17-Sep-22",
    "Value Date": "17-Sep-22",
    "Transaction Code": "ICT",
    "Transaction Detail":
      "FAST PAYMENT Payment CWJIM IRGPPSG170922Z0058687 DBS:885123123456:IDEAL OTHR SGD 1250",
    Debit: "1250",
    Credit: "",
    "Ordering Party Name": "Sam",
    "Beneficiary Name": "ABC Studio",
  },
  2: {
    "Account Number": "22",
    "Business Date": "17-Sep-22",
    "Transaction Date": "17-Sep-22",
    "Value Date": "17-Sep-22",
    "Transaction Code": "ICT",
    "Transaction Detail":
      "FAST PAYMENT Payment SHJAK IRGPPSG170922Z0058687 DBS:885123123456:IDEAL OTHR SGD 1250",
    Debit: "1250",
    Credit: "",
    "Ordering Party Name": "Sam",
    "Beneficiary Name": "ABC Studio",
  },
  3: {
    "Account Number": "33",
    "Business Date": "18-Sep-22",
    "Transaction Date": "18-Sep-22",
    "Value Date": "18-Sep-22",
    "Transaction Code": "ICT",
    "Transaction Detail":
      "FAST PAYMENT 123 Agency Payment OTHER TC SGD 280 885123654321",
    Debit: "",
    Credit: "280",
    "Ordering Party Name": "TC",
    "Beneficiary Name": "123 Agency",
  },
  4: {
    "Account Number": "123456789-SGD",
    "Business Date": "18-Sep-22",
    "Transaction Date": "18-Sep-22",
    "Value Date": "18-Sep-22",
    "Transaction Code": "ICT",
    "Transaction Detail":
      "FAST PAYMENT 123 Agency Payment OTHER TC SGD 280 885123654321",
    Debit: "",
    Credit: "280",
    "Ordering Party Name": "TC",
    "Beneficiary Name": "cc",
  },
  5: {
    "Account Number": "123456789-SGD",
    "Business Date": "22-Sep-22",
    "Transaction Date": "22-Sep-22",
    "Value Date": "22-Sep-22",
    "Transaction Code": "bbb",
    "Transaction Detail":
      "FAST PAYMENT Payment HDKBA IRGPPSG170922Z0058687 DBS:885123123456:IDEAL OTHR SGD 1250",
    Debit: "3749",
    Credit: "",
    "Ordering Party Name": "Sam",
    "Beneficiary Name": "bb",
  },
  6: {
    "Account Number": "3142358",
    "Business Date": "18-Sep-22",
    "Transaction Date": "18-Sep-22",
    "Value Date": "18-Sep-22",
    "Transaction Code": "aaa",
    "Transaction Detail":
      "FAST PAYMENT poiuy transfer OTHER TC SGD 280 885123654325",
    Debit: "",
    Credit: "123",
    "Ordering Party Name": "qwerty",
    "Beneficiary Name": "aa",
  },
};

const dataB = {
  1: {
    "Transaction ID": "11",
    Type: "Debit",
    "Amount (SGD)": "1250",
    Sender: "ABC Studio",
    Counterparty: "Sam",
    Reference: "Payment CWJIM",
    Category: "Transfer",
    "Internal Notes": "",
    "Card holder": "",
    "Card name": "",
    "Card number ending with": "",
    Timestamp: "17/09/2022 00:00:00",
  },
  2: {
    "Transaction ID": "22",
    Type: "Debit",
    "Amount (SGD)": "1250",
    Sender: "ABC Studio",
    Counterparty: "Sam",
    Reference: "Payment SHJAK",
    Category: "Transfer",
    "Internal Notes": "",
    "Card holder": "",
    "Card name": "",
    "Card number ending with": "",
    Timestamp: "17/09/2022 00:00:00",
  },
  3: {
    "Transaction ID": "33",
    Type: "Credit",
    "Amount (SGD)": "280",
    Sender: "TC",
    Counterparty: "123 Studio",
    Reference: "Payment",
    Category: "Transfer",
    "Internal Notes": "",
    "Card holder": "",
    "Card name": "",
    "Card number ending with": "",
    Timestamp: "18/09/2022 00:00:00",
  },
  4: {
    "Transaction ID": "3142387",
    Type: "Credit",
    "Amount (SGD)": "280",
    Sender: "TC",
    Counterparty: "123 Studio",
    Reference: "Payment",
    Category: "Transfer",
    "Internal Notes": "",
    "Card holder": "",
    "Card name": "",
    "Card number ending with": "",
    Timestamp: "18/09/2022 00:00:00",
  },
  5: {
    "Transaction ID": "31423589",
    Type: "Debit",
    "Amount (SGD)": "3749",
    Sender: "Sam",
    Counterparty: "TC",
    Reference: "Payment HDKBA",
    Category: "Transfer",
    "Internal Notes": "",
    "Card holder": "",
    "Card name": "",
    "Card number ending with": "",
    Timestamp: "24/09/2022 00:00:00",
  },
  6: {
    "Transaction ID": "3242357",
    Type: "Credit",
    "Amount (SGD)": "123",
    Sender: "qwerty",
    Counterparty: "poiuy",
    Reference: "transfer",
    Category: "aa",
    "Internal Notes": "",
    "Card holder": "aaa",
    "Card name": "",
    "Card number ending with": "",
    Timestamp: "20/09/2022 00:00:00",
  },
};

// applyRulesToData(dataA, dataB, rulesets);

// console.log(dataA);
// console.log(dataB);

type RuleSource = {
  label: string;
  value: string;
};

type RuleOperator = {
  value: string;
  label: string;
};

type Rule = {
  sourceA: RuleSource;
  operator: RuleOperator;
  sourceB?: RuleSource;
};

export type Ruleset = {
  rulesetName: string;
  rules: Rule[];
};

export type ReconSummary = {
  sourceATotal: number;
  sourceAReconciled: number;
  sourceBTotal: number;
  sourceBReconciled: number;
};
