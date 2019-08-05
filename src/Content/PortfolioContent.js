import POP1 from '../Resources/POP1.png';
import POP2 from '../Resources/POP2.png';
import POP3 from '../Resources/POP3.png';
import MusubiTime1 from '../Resources/MusubiTime1.png';
import MusubiTime2 from '../Resources/MusubiTime2.png';
import MusubiTime3 from '../Resources/MusubiTime3.png';
import Portfolio from '../Resources/Portfolio.png';
import Diced1 from '../Resources/Diced1.png';
import Diced2 from '../Resources/Diced2.png';
import Diced3 from '../Resources/Diced3.png';
import YAPIKnownIssues1 from '../Resources/YAPIKnownIssues1.png';
import YAPIKnownIssues2 from '../Resources/YAPIKnownIssues2.png';

const portfolioContent = [
  {
    app: 'This Portfolio!',
    role: 'Designer, Developer',
    technologies: 'ReactJS, Material-UI Component Library',
    imgs: [Portfolio],
    description:
      'The portfolio you are currently viewing was built entirely from scratch using React and the Material UI component library. You can view the source code via the link to the GitHub Repository below.',
    link: 'https://www.github.com/adregia/Ahmed-Dregia-Portfolio',
    linkDescription: 'GitHub'
  },
  {
    app: 'YAPI POP',
    role: 'Software Development/Testing',
    technologies: 'ReactJS, Material-UI Component Library, PubNub, Twilio',
    imgs: [POP1, POP2, POP3],
    description:
      'A remote interface for automating the various functions of dental offices, including accessing and manipulating patient data from a SQL database. You can learn more about the product at the link below.',
    link: 'https://www.yapiapp.com/',
    linkDescription: 'Website'
  },
  {
    app: 'Musubi Time (WIP)',
    role: 'Designer, Developer',
    technologies: 'HTML, Javascript, Bootstrap, Braintree',
    imgs: [MusubiTime1, MusubiTime2, MusubiTime3],
    description:
      'This contract project will serve as an online retailer for selling Spam Musubi in the Utah area.',
    link: null,
    linkDescription: null
  },
  {
    app: 'Diced (WIP)',
    role: 'Designer, Developer',
    technologies: 'Flutter, TensorFlow, Firebasease',
    imgs: [Diced1, Diced2, Diced3],
    description:
      'This personal project is intended to be a data-science and ML-backed application for tracking and adjusting nutritional habits depending on the goals of the user, paired with a recommendation engine for health-conducive recipes and meal delivery services.',
    link: null,
    linkDescription: null
  },
  {
    app: 'Jira Search Integration',
    role: 'Designer, Developer',
    technologies: 'Bulma, Javascript, Node.JS',
    imgs: [YAPIKnownIssues1, YAPIKnownIssues2],
    description:
      'This project was established as a means of delivering Jira bug tickets as a searchable repository to non-technical departments within the company. It includes product-specific filters and terminology for those unfamiliar with Jira.',
    link: null,
    linkDescription: null
  }
];

export default portfolioContent;
