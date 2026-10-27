import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import blogPostList from '@generated/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json';
import styles from './index.module.css';

const topics = [
  { icon: '✳', title: 'LLMs', text: 'Prompting, inference, fine-tuning, and model experiments.', color: 'purple' },
  { icon: '⌘', title: 'AI Agents', text: 'Agent workflows, orchestration, tools, and MCP.', color: 'green' },
  { icon: '▤', title: 'RAG', text: 'Embeddings, retrieval pipelines, and vector databases.', color: 'orange' },
  { icon: '⌁', title: 'Open Source', text: 'Useful AI projects you can run, inspect, and build on.', color: 'blue' },
];

const publishedPosts = blogPostList.items.filter(post => !post.unlisted);
const getDayNumber = post => Number(post.permalink.match(/day-(\d+)/i)?.[1]) || 0;
const experiments = publishedPosts
  .slice(0, 3)
  .map(post => {
    const dayNumber = getDayNumber(post);
    return {
      ...post,
      dayNumber,
      day: dayNumber ? `DAY ${String(dayNumber).padStart(3, '0')}` : null,
    };
  });

const currentDay = Math.min(
  365,
  publishedPosts.reduce((latest, post) => Math.max(latest, getDayNumber(post)), 0),
);

function SectionTitle({ icon, title, description, href, linkText = 'View all →' }) {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.sectionTitleLeft}>
        <span className={styles.sectionIcon}>{icon}</span>
        <div>
          <h2>{title}</h2>
          {description && <p>{description}</p>}
        </div>
      </div>
      {href && <Link className={styles.textLink} to={href}>{linkText}</Link>}
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className={styles.illustration} aria-label="CSS illustration of a laptop, AI books, plant, and coffee mug" role="img">
      <div className={styles.orbit} />
      <div className={styles.plant}><i /><i /><i /><span /></div>
      <div className={styles.books}>
        <span>LLMs</span><span>AI AGENTS</span><span>RAG</span><span>OPEN SOURCE</span>
      </div>
      <div className={styles.laptop}>
        <div className={styles.screen}>
          <span>{'< />'}</span><b>✳</b>
        </div>
        <div className={styles.laptopBase} />
      </div>
      <div className={styles.cup}><span>BUILD<br />LEARN<br />SHARE</span></div>
      <div className={styles.handNote}>Better AI<br />together ↙</div>
      <div className={styles.artCaption}>Curiosity in. Knowledge out.</div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const progress = (currentDay / 365) * 100;
  const toBlogPath = permalink =>
    siteConfig.baseUrl && permalink.startsWith(siteConfig.baseUrl)
      ? `/${permalink.slice(siteConfig.baseUrl.length)}`
      : permalink;

  return (
    <Layout
      title="365 Days of AI"
      description="A daily journal of open-source AI tools, hands-on experiments, and practical learnings."
    >
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}><i /> 365 DAYS · ONE JOURNEY</span>
            <h1><span>365</span> Days of AI</h1>
            <h2>Learning, building, and sharing in public.</h2>
            <p className={styles.lead}>
              A daily journal exploring open-source AI tools, building small experiments,
              and sharing what works, what breaks, and what I learn along the way.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} to="/blog">Browse Daily Log <span>→</span></Link>
              <Link className={styles.secondaryButton} to="/docs/intro">Explore Roadmap</Link>
            </div>
            <p className={styles.heroNote}><span /> Practical experiments. Honest notes. Open knowledge.</p>
          </div>
          <HeroIllustration />
        </section>

        <section className={styles.stats} aria-label="Challenge overview">
          <div><span className={styles.statIcon}>▣</span><p><strong>365</strong><small>Days of learning</small></p></div>
          <div><span className={styles.statIcon}>▤</span><p><strong>Daily</strong><small>Hands-on notes</small></p></div>
          <div><span className={styles.statIcon}>{'< />'}</span><p><strong>Open</strong><small>Source-first mindset</small></p></div>
          <div><span className={styles.statIcon}>✧</span><p><strong>Build</strong><small>Learn by doing</small></p></div>
          <blockquote>“Small steps every day<br />create powerful results.”</blockquote>
        </section>

        <div className={styles.columns}>
          <div className={styles.mainColumn}>
            <section className={styles.panel}>
              <SectionTitle icon="✧" title="Explore topics" description="A few of the areas I'm learning by building." href="/blog/tags" linkText="All topics →" />
              <div className={styles.topicGrid}>
                {topics.map(topic => (
                  <Link key={topic.title} to="/blog/tags" className={`${styles.topicCard} ${styles[topic.color]}`}>
                    <span className={styles.topicIcon}>{topic.icon}</span>
                    <h3>{topic.title}</h3>
                    <p>{topic.text}</p>
                    <span className={styles.cardLink}>Explore topic ↗</span>
                  </Link>
                ))}
              </div>
            </section>

            <section className={styles.panel}>
              <SectionTitle icon="▤" title="Recent experiments" description="Tools tested, ideas explored, and lessons learned." href="/blog" linkText="All daily posts →" />
              <div className={styles.experimentList}>
                {experiments.map((item, index) => (
                  <article className={styles.experiment} key={item.permalink}>
                    <div className={`${styles.experimentArt} ${styles[['purple', 'green', 'blue'][index % 3]]}`}><span>{item.dayNumber || '✳'}</span><small>AI LAB</small></div>
                    <div className={styles.experimentInfo}>
                      {item.day && <span className={styles.day}>{item.day}</span>}
                      <h3><Link to={toBlogPath(item.permalink)}>{item.title}</Link></h3>
                      <small className={styles.meta}>◷ &nbsp; Published {item.date.slice(0, 10)}</small>
                    </div>
                    <Link to={toBlogPath(item.permalink)} className={styles.arrow} aria-label={`Read ${item.title}`}>↗</Link>
                  </article>
                ))}
              </div>
              {experiments.length === 0 && (
                <p className={styles.placeholderNote}>Your daily experiments will appear here when you publish your first post.</p>
              )}
            </section>
          </div>

          <aside className={styles.sidebar}>
            <section className={styles.panel}>
              <SectionTitle icon="◉" title="The challenge" />
              <p className={styles.sideDescription}>One year of consistent exploration, one experiment at a time.</p>
              <div className={styles.progressLabels}>
                <span>Day {currentDay} of 365</span>
                <strong>{currentDay === 365 ? 'Complete' : currentDay ? 'In progress' : 'Not started'}</strong>
              </div>
              <div
                className={styles.progress}
                role="progressbar"
                aria-label="365-day journey progress"
                aria-valuemin={0}
                aria-valuemax={365}
                aria-valuenow={currentDay}
              >
                <span style={{width: `${progress}%`}} />
              </div>
              <ul className={styles.checkList}>
                <li><i>✓</i> Explore open-source AI tools</li>
                <li><i>✓</i> Build practical experiments</li>
                <li><i>✓</i> Share code and learnings</li>
                <li><i>✓</i> Learn in public</li>
              </ul>
            </section>

            <section className={styles.panel}>
              <SectionTitle icon="◇" title="Popular tags" href="/blog/tags" />
              <p className={styles.sideDescription}>Browse by technology or concept.</p>
              <div className={styles.popularTags}>
                <Link className={styles.tag0} to="/blog/tags">Browse published tags →</Link>
              </div>
            </section>

            <section className={styles.panel}>
              <SectionTitle icon="⌘" title="Tools on my radar" href="/blog/tags" linkText="Explore →" />
              <p className={styles.sideDescription}>Projects worth trying hands-on.</p>
              <div className={styles.tools}>
                <div><b>◉</b><small>Ollama</small></div>
                <div><b>⛓</b><small>LangChain</small></div>
                <div><b>♟</b><small>LlamaIndex</small></div>
                <div><b>✣</b><small>CrewAI</small></div>
              </div>
            </section>

            <a className={styles.suggestion} href="https://github.com/kondekarshubham123/365-days-of-ai" target="_blank" rel="noreferrer">
              <span>✧</span><div><strong>Have a topic idea?</strong><small>Suggest a tool or experiment.</small></div><b>→</b>
            </a>
          </aside>
        </div>

        <section className={styles.bottomBanner}>
          <div><span>✳</span><div><h2>Make curiosity a daily habit.</h2><p>Follow the journey, try the experiments, and build something of your own.</p></div></div>
          <Link to="/blog" className={styles.primaryButton}>Start exploring <span>→</span></Link>
        </section>
      </main>
    </Layout>
  );
}