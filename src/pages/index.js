import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

const terminalLines = [
  {prompt: '$', text: 'cookbook chapters --list', typed: true},
  {prompt: '>', text: '20 chapters · 3 parts · growing', typed: false},
  {prompt: '$', text: 'cookbook diagram networking.md', typed: true},
  {prompt: '>', text: 'rendering mermaid… done', typed: false},
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>devops · sre · platform</span>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <p className={styles.heroTagline}>{siteConfig.tagline}</p>
            <div className={styles.heroButtons}>
              <Link className={styles.primaryButton} to="/foundations/sdlc-devops-foundations">
                Start reading
              </Link>
              <Link className={styles.secondaryButton} to="/interview-questions">
                Interview prep
              </Link>
            </div>
          </div>
          <div className={styles.terminal} aria-hidden="true">
            <div className={styles.terminalBar}>
              <span className={styles.dot} data-c="red" />
              <span className={styles.dot} data-c="yellow" />
              <span className={styles.dot} data-c="green" />
              <span className={styles.terminalTitle}>cookbook — zsh</span>
            </div>
            <div className={styles.terminalBody}>
              {terminalLines.map((line, i) => (
                <div key={i} className={styles.terminalLine}>
                  <span className={styles.terminalPrompt}>{line.prompt}</span>
                  <span className={line.typed ? styles.terminalCmd : styles.terminalOut}>
                    {line.text}
                  </span>
                </div>
              ))}
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span className={styles.cursor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A living, versioned cookbook of DevOps, networking, and infrastructure concepts — with diagrams, interview prep, and real examples.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
