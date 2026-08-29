import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const Parts = [
  {
    tag: 'part 01',
    title: 'Foundations',
    count: '6 chapters',
    description:
      'Culture, Linux, networking, on-prem, cloud, and design patterns — the ground everything else stands on.',
    to: '/foundations/sdlc-devops-foundations',
  },
  {
    tag: 'part 02',
    title: 'Building & Shipping',
    count: '10 chapters',
    description:
      'Scripting, Git, CI/CD, artifacts, IaC, config management, containers, mesh, serverless, GitOps.',
    to: '/building-and-shipping/scripting-automation',
  },
  {
    tag: 'part 03',
    title: 'Running in Production',
    count: '4 chapters',
    description:
      'Web servers, observability, security, and release strategy — keeping it alive once it ships.',
    to: '/running-in-production/web-server-setup',
  },
];

function Part({tag, title, count, description, to}) {
  return (
    <Link to={to} className={styles.card}>
      <span className={styles.cardTag}>{tag}</span>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <span className={styles.cardCount}>{count}</span>
      <p className={styles.cardDescription}>{description}</p>
      <span className={styles.cardArrow} aria-hidden="true">→</span>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.grid}>
          {Parts.map((props, idx) => (
            <Part key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
