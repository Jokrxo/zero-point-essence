import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import perseusImg from "@/assets/products/Perseus.jpg";
import polarisImg from "@/assets/products/Polaris.jpg";
import epiphanyImg from "@/assets/products/Epiphany.jpg";
import orionImg from "@assets/Stella Lumen Product Catalogue_page-0008_1760006988521.jpg";
import betelgeuseImg from "@assets/Stella Lumen Product Catalogue_page-0009_1760006988521.jpg";
import sirusImg from "@/assets/products/Sirius.jpg";
import tzArietisImg from "@/assets/products/TZ-Arietis.jpg";
import daraImg from "@/assets/products/Dara.jpg";
import rigelBusinessImg from "@/assets/products/Rigel.jpg";
import canopusImg from "@/assets/products/Canopus.jpg";
import venusImg from "@/assets/products/Venus.jpg";
import rigelPersonalImg from "@/assets/products/Rigel-Personal.png";
import kielzImg from "@/assets/products/Kielz.jpg";

const categories = [
  {
    id: "01",
    name: "Risk & Audit",
    products: [
      {
        name: "Perseus",
        image: perseusImg,
        description: "PERSEUS is a Risk Management System that effortlessly converges the three pillars of risk management and automates reports that provide risk intelligence, track implementation of a risk management strategy and, track the implementation of a combined assurance strategy.",
        benefits: [
          "Risk Profiling",
          "Risk Management, and",
          "Combined Assurance",
        ],
        additionalInfo: "Effective and comprehensive management of any organizational risks involves a seamless connection and implementation of the following three risk management pillars:",
        features: [
          "Integrating all elements of risk management",
          "Effective and automated analysis of risks, risk management and assurance strategies",
          "The solution enables senior management to hone in on areas of urgency and importance",
          "Dynamic reporting platform",
          "Focused governance over risks by Risk Committees, Executives and Audit Committees"
        ]
      },
      {
        name: "Polaris",
        image: polarisImg,
        description: "POLARIS is an internal audit software that manages internal audit assignments from start to finish, premised on Global Internal Audit Standards.",
        benefits: [
          "Planning of all internal audit assignments",
          "Allocating teams to assignments",
          "Remote access for executing and reviewing assignments",
          "Storage of audit files",
          "Facilitating for quality review mechanisms of assignments",
          "Audit trail of all audit steps"
        ],
        additionalInfo: "The system ensures that all steps of an assignment are completed and internal evidence or documents are uploaded unto the system for future reference. The system facilitates for:"
      },
      {
        name: "Epiphany",
        image: epiphanyImg,
        description: "A fundamental principle is that Risk Management Maturity Gap Analysis has to be conducted primarily as a self-evaluation exercise rather than an independently imposed process.",
        subtitle: "EPIPHANY is an evaluation tool over the six pillars of risk maturity:",
        benefits: [
          "Philosophy",
          "Governance",
          "Responsibility",
          "Competency",
          "Integrity and Ethical Values",
          "Resources and Systems"
        ],
        features: [
          "Consolidating reporting on all six pillars of Risk Maturity",
          "Enabling self-assessment by key parties in Risk Management",
          "Providing clear five-point scale assessment criteria",
          "Enabling qualitative assessment through free commentary from key parties",
          "Providing easy to read results in graphic form for each pillar"
        ]
      },
      {
        name: "Orion",
        image: orionImg,
        description: "ORION is a maturity evaluation system of the internal audit function. The system identifies gaps that underpin the development of a Quality Assurance and Improvement Programme guided by 15 principles in the Global Internal Audit Standards. BETELGEUSE is designed for day to day management of performance.",
        subtitle: "Orion evaluates the following:",
        benefits: [
          "Purpose of Internal Auditing",
          "Ethics and Professionalism",
          "Governing the Internal Audit Function",
          "Managing the Internal Audit Function; and",
          "Performing Internal Audit Services"
        ],
        additionalInfo: "Orion, through a set on inbuilt questionnaire and maturity criteria, assists internal audit functions to perform regular and periodic evaluations."
      },
      {
        name: "Betelgeuse",
        image: betelgeuseImg,
        description: "BETELGEUSE is a performance management system based on the concept of the balanced scorecard. Whilst BETELGEUSE evaluates the performance of the internal audit function, ORION evaluates its maturity.",
        benefits: [
          "Organisational performance",
          "Effectiveness of the Chief Audit Executive",
          "Effectiveness of the internal audit secretarial function",
          "Evaluation of achievement of internal audit coverage plans",
          "Evaluation of adherence to internal audit budget"
        ],
        additionalInfo: "The system allows audit committees and management to evaluate the internal audit function on the following areas:"
      }
    ]
  },
  {
    id: "02",
    name: "Public Sector",
    products: [
      {
        name: "Sirus",
        image: sirusImg,
        description: "SIRUS is a system that manages and integrates procurement stages related to the acquisition of goods and services in a manner that facilitates efficiency, transparency, and compliance with policies and regulations.",
        subtitle: "SIRUS provides the following:",
        benefits: [
          "Automation of the procurement cycle",
          "Transparency",
          "Real-time status tracking of procurement",
          "Automation in calculation of scores",
          "Effective evaluation and adjudication of bids"
        ]
      },
      {
        name: "TZ Arietis",
        image: tzArietisImg,
        description: "TZ ARIETIS is a financial reporting system designed for municipalities. It helps municipal oversight bodies with proper interpretation of municipal financial performance whilst integrating all municipal financial reports and financial statements in real-time.",
        subtitle: "TZ ARIETIS offers the following benefits:",
        benefits: [
          "Helps with interpretation of municipal budgets",
          "Automates National Treasury reporting from municipalities' underlying systems",
          "Facilitates for monthly financial discipline and provides compliance dashboards overall and by account categories",
          "Automates CFO reports with analysis tables and graphics",
          "Automates GRAP compliant Financial Statements"
        ],
        additionalInfo: "TZ ARIETIS is also a governance system over financial oversight and reporting, ensuring that financial reports are accurate and reliable."
      }
    ]
  },
  {
    id: "03",
    name: "Governance",
    products: [
      {
        name: "Dara",
        image: daraImg,
        description: "DARA – is a system that measures the maturity of organisations to govern inline with good governance principles as advocated in King IV.",
        subtitle: "The tool facilitates for evaluation of the following key pillars of governance:",
        benefits: [
          "Leadership, Ethics & Corporate Citizenship Responsible corporate citizenship",
          "Strategy, Performance & Reporting",
          "Governing Structures & Delegation",
          "Governance Functional Areas",
          "Stakeholder Relationships"
        ],
        features: [
          "Aggregating dashboards",
          "Quick view of maturity in various areas to direct action"
        ]
      }
    ]
  },
  {
    id: "04",
    name: "Business Financial Management",
    products: [
      {
        name: "Rigel Business",
        image: rigelBusinessImg,
        description: "Rigel Business is an advanced and yet simple to use solution for the management of a small and medium company finances. The system eliminates the need for a bookkeeper or an accountant for the management of transactions of a business. In single steps, the solution updates all your accounts, the ledgers and the financial statements real-time.",
        subtitle: "Rigel Business components include:",
        benefits: [
          "All financial modules in one platform",
          "Automated Annual Financial Statements",
          "Automated Monthly Management Accounts",
          "Automated Key Performance Information",
          "Automated transaction listing / general ledger",
          "Automated trial balance",
          "Automated VAT Calculations",
          "Automated Project Management Accounts",
          "Customer Invoice / Quotation Generation",
          "Payroll management including the preparation of payslips",
          "Accounts summary reports"
        ]
      },
      {
        name: "Canopus",
        image: canopusImg,
        description: "Our CANOPUS solution provides a comprehensive SMME business maturity analysis. With easy to follow questionnaire, the user is able to see what development gaps exist in the business.",
        subtitle: "The tool provides maturity assessment in the following areas:",
        benefits: [
          "Financial Management",
          "Marketing",
          "ICT",
          "Legal and Governance",
          "Compliance",
          "Product",
          "Human Resources",
          "Business Continuity"
        ],
        additionalInfo: "A very useful tool in the hands of: the business owner for self-evaluation, a funder to determine the level of maturity at which the business is at, a business trainer or mentor to determine the capacity building requirements for the business, a funder in order to target funding into the areas that the business needs improvement on."
      },
      {
        name: "Venus",
        image: venusImg,
        description: "If you are looking for a winning business plan to send to funders, VENUS is the solution.",
        subtitle: "The system prompts you to answer the following questions about your business that funding organisations will require:",
        benefits: [
          "Company information",
          "Type and amount of finance you are looking for",
          "Information about your products / services",
          "Competitor analysis and your marketing strategy",
          "Costs for running your business"
        ],
        additionalInfo: "The system will translate your natural language of the business you want funded into a technical language required by funders, generating a comprehensive business plan with financial projections. The system translates all your inputs into a comprehensive business plan that you can export to Microsoft Word for refinement to suit your specific appeal."
      }
    ]
  },
  {
    id: "05",
    name: "Personal Finance",
    products: [
      {
        name: "Rigel Personal",
        image: rigelPersonalImg,
        description: "Rigel Personal is an application that enables you to have your personal finances at your fingertips. It allows you to budget for your income and expenditure, capture your actual transactions and view the differences on a real-time basis.",
        subtitle: "The benefits include:",
        benefits: [
          "Understanding your spending in patterns",
          "Understanding the tax implications of your income and expenditures",
          "Keeping control of your debt",
          "Understanding your personal insurances, including your personal covers"
        ]
      }
    ]
  },
  {
    id: "06",
    name: "School Financial Management",
    products: [
      {
        name: "Kielz",
        image: kielzImg,
        description: "KIELZ is a comprehensive school financial management and learner tracking system that enables school administrators to manage school finances and account for learners enrolled. The system eliminates the need for a bookkeeper or an accountant for the management of transactions of a school.",
        subtitle: "KIEZ benefits include:",
        benefits: [
          "A cloud based platform that requires no investment on IT infrastructure",
          "Provides aggregated reporting from school, circuit, district, province and national level",
          "Provides a learner tracking functionality that enables the school and the departments to answer questions on the whereabouts of learners for each cohort intake",
          "All Financial Modules in ONE Platform (Revenue, Expenditure, Assets, Inventory, Payroll, Bank Recon)",
          "Provides real-time financial reports that School Management, and the Department would love to see",
          "Access Financial Statements at a click of a button",
          "Automates learner fee statements",
          "Automates governing body employees pay slips"
        ],
        additionalInfo: "Let the teachers teach and let KIELZ facilitate school financial management."
      }
    ]
  },
  {
    id: "07",
    name: "Education",
    products: []
  }
];

export default function ProductCatalogue() {
  return (
    <section className="py-20 bg-background" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4" data-testid="text-products-title">
            Product Catalogue
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-subtitle">
            Comprehensive software solutions for risk management, governance, finance, and organizational excellence
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id} className="space-y-6" data-testid={`section-category-${category.id}`}>
              <div className="flex items-center gap-4">
                <Badge variant="outline" className="text-lg px-4 py-1 font-heading bg-burgundy/10 text-burgundy border-burgundy/30">
                  {category.id}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-heading font-bold" data-testid={`text-category-${category.id}`}>
                  {category.name}
                </h3>
              </div>

              {category.products.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {category.products.map((product, idx) => (
                    <Card key={idx} className="hover-elevate overflow-hidden" data-testid={`card-product-${category.id}-${idx}`}>
                      {'image' in product && product.image && (
                        <div className="relative aspect-square w-full overflow-hidden bg-muted">
                          <img 
                            src={product.image} 
                            alt={`${product.name} product`}
                            className="w-full h-full object-contain p-4"
                            data-testid={`img-product-${category.id}-${idx}`}
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl font-heading" data-testid={`text-product-name-${category.id}-${idx}`}>
                          {product.name}
                        </CardTitle>
                        <CardDescription className="text-base" data-testid={`text-product-description-${category.id}-${idx}`}>
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {'additionalInfo' in product && product.additionalInfo && (
                          <p className="text-sm text-muted-foreground">
                            {product.additionalInfo}
                          </p>
                        )}
                        
                        {'subtitle' in product && product.subtitle && (
                          <p className="text-sm font-medium">
                            {product.subtitle}
                          </p>
                        )}
                        
                        {'benefits' in product && product.benefits && product.benefits.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold mb-2">Key Benefits:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {product.benefits.map((benefit, bIdx) => (
                                <li key={bIdx}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {'features' in product && product.features && product.features.length > 0 && (
                          <div>
                            <h4 className="text-sm font-semibold mb-2">Features:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {product.features.map((feature, fIdx) => (
                                <li key={fIdx}>{feature}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="border-dashed">
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground">Coming Soon</p>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
