import React, { useState } from 'react';

const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="padding-section-medium" id='faq'>
      <div className="div-block-114">
        <div className="div-block-115">
          <div className="div-block-116">
            <h4>Frequently Asked Questions</h4>
          </div>
          <div className="div-block-117">
            <a href="#" className="link-arrow w-inline-block">
              <p>General Questions</p>
              <div className="html-embed-2 _2 w-embed">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.24264 21.4851C4.03167 21.2741 3.91314 20.988 3.91314 20.6896C3.91314 20.3912 4.03167 20.1051 4.24264 19.8941L17.5961 6.54062L13.3005 6.69972C13.1529 6.70529 13.0056 6.68172 12.8671 6.63037C12.7285 6.57902 12.6015 6.50088 12.4931 6.40042C12.3848 6.29996 12.2973 6.17915 12.2356 6.04487C12.174 5.9106 12.1394 5.7655 12.1338 5.61786C12.1226 5.31968 12.2302 5.02925 12.4331 4.81045C12.5336 4.70211 12.6544 4.61462 12.7887 4.55297C12.9229 4.49132 13.068 4.45673 13.2157 4.45115L20.375 4.18599C20.5298 4.18014 20.6841 4.20631 20.8283 4.26287C20.9725 4.31943 21.1035 4.40516 21.213 4.51469C21.3226 4.62422 21.4083 4.75518 21.4648 4.89938C21.5214 5.04359 21.5476 5.19791 21.5417 5.3527L21.2766 12.512C21.2653 12.8102 21.1361 13.0917 20.9173 13.2946C20.6985 13.4975 20.408 13.6051 20.1099 13.5939C19.8117 13.5826 19.5302 13.4534 19.3273 13.2346C19.1244 13.0158 19.0167 12.7254 19.028 12.4272L19.1871 8.13158L5.8336 21.4851C5.62263 21.696 5.33648 21.8146 5.03812 21.8146C4.73976 21.8146 4.45362 21.696 4.24264 21.4851Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </a>
            <p style={{color:'white'}}>
              For any questions not addressed here, feel free to contact us at{' '}
              <a href="mailto:info@mediledger.com" className="link-12">
                info@mediledger.com
              </a>
            </p>
          </div>
        </div>
        <div className="faq_item_list">
          {faqData.map((faq, index) => (
            <div className="faq_item" key={index}>
              <div
                className="faq_question"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="heading-20">{faq.question}</h3>
                <div className="faq_icon">
                  <div className="faq_icon-line"></div>
                  <div
                    className={`faq_icon-line is-vertical ${
                      expandedIndex === index ? 'rotate' : ''
                    }`}
                  ></div>
                </div>
              </div>
              <div
                className="faq_answer"
                style={{
                  maxHeight: expandedIndex === index ? '200px' : '0px',
                  transition: 'max-height 0.3s ease',
                  overflow: 'hidden',
                }}
              >
                <div className="padding-bottom padding-small"></div>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: 'What is the MediLedger Network?',
    answer:
      'The MediLedger Network is the leading life sciences industry network that runs solutions for data alignment, validation, and transaction settlement between trading partners. The network utilizes blockchain technology to ensure decentralization and direct business dealings between trading partners.',
  },
  {
    question: 'What is Chronicled?',
    answer:
      'Chronicled is a technology company based in San Francisco that developed the MediLedger Network. They provide ongoing support and improvements to the network in collaboration with life sciences industry leaders.',
  },
  {
    question: 'What types of hospitals can use this platform?',
    answer:
      'Our platform is designed for hospitals of all sizes, from small clinics to large multi-specialty hospitals. Any healthcare facility looking to improve their drug inventory management and supply chain processes can benefit from our solution.',
  },
  {
    question: 'How does the AI-driven predictive analytics work?',
    answer:
      'Our AI algorithms analyze historical data, current stock levels, and usage trends to predict future drug demand. This allows hospitals to reorder medicines proactively, reducing the risk of shortages and ensuring continuous availability of essential medicines.',
  },
  {
    question: 'How secure is the data on your platform?',
    answer:
      'We prioritize the security of your data. Our platform uses advanced encryption protocols to ensure that all sensitive information, including patient data and inventory details, is securely stored and transmitted.',
  },
  {
    question: 'Can the platform handle multiple locations?',
    answer:
      'Yes, our platform is designed to support hospitals with multiple locations. You can manage inventory across different sites from a single dashboard, allowing for centralized control and monitoring.',
  },
  {
    question: 'What kind of reports can I generate?',
    answer:
      'Our platform offers a range of customizable reports, including inventory levels, expiry reports, usage patterns, and supply chain efficiency. These reports help hospitals make data-driven decisions and optimize their operations.',
  },
  {
    question: 'How easy is it to integrate with our existing health systems?',
    answer:
      'We’ve designed our platform to be highly compatible with existing health information systems. Integration is straightforward and our support team is available to assist with the process to ensure a seamless transition.',
  },
  {
    question: 'What happens if there is a discrepancy in the inventory?',
    answer:
      'Our platform includes auditing features that allow you to track all changes made to the inventory. In case of discrepancies, you can easily identify and resolve issues by reviewing the transaction logs.',
  },
  {
    question: 'How do you ensure the accuracy of real-time tracking?',
    answer:
      'We use IoT-enabled devices to provide accurate, real-time tracking of drug shipments. These devices are regularly updated and maintained to ensure precision and reliability.',
  },
  {
    question: 'What support options are available?',
    answer:
      'We offer 24/7 customer support via email, phone, and live chat. Our dedicated support team is here to help you with any technical issues, integration questions, or general inquiries.',
  },
  {
    question: 'How can I request a demo?',
    answer:
      'You can request a demo by filling out the contact form on our website or by calling our support team. We’ll arrange a time that suits you to walk through the platform’s features and answer any questions you may have.',
  },
  {
    question: 'Is training provided for new users?',
    answer:
      'Yes, we provide comprehensive training for all new users. Our training sessions cover everything from basic navigation to advanced features, ensuring that your team can use the platform effectively.',
  },
  {
    question: 'Can I customize the platform to meet specific needs?',
    answer:
      'Yes, our platform is highly customizable. Whether you need specific features or tailored reports, we can work with you to modify the platform to meet your unique requirements.',
  },
];

export default Faq;
