import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          SillyAndroid
        </Heading>
        <p className="hero__subtitle">安卓安装即玩的 AI 角色扮演应用</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            🚀 快速开始
          </Link>
          <Link
            className="button button--outline button--lg"
            style={{marginLeft: '12px', color: 'white', borderColor: 'white'}}
            href="https://github.com/你的仓库地址">
            📦 下载 APK
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="首页"
      description="SillyAndroid - 基于 SillyTavern 的安卓即玩应用">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
