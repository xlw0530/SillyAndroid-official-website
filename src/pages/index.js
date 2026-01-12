import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// 首页特性列表配置
const FeatureList = [
  {
    title: '🎯 安装即玩',
    description: (
      <>
        告别繁琐的 Termux 命令行操作，告别浏览器访问的麻烦。
        下载 APK，安装，更新资源，开始你的角色扮演之旅。
      </>
    ),
  },
  {
    title: '🍺 基于蠢酒馆',
    description: (
      <>
        完整保留 SillyTavern 的强大功能，支持多种 AI 后端接入，
        丰富的角色卡和世界书生态。
      </>
    ),
  },
  {
    title: '📱 原生体验',
    description: (
      <>
        使用 React Native 开发，提供流畅的安卓原生应用体验，
        离线可用，随时随地开启对话。
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>

          {/* 左侧按钮：酒馆教程 */}
          <Link
            className="button button--secondary button--lg"
            to="/docs/setup-complete">
            📖 酒馆教程
          </Link>

          {/* 右侧按钮：下载页面 (指向刚才新建的 download.md) */}
          <Link
            className="button button--outline button--lg"
            style={{marginLeft: '20px', color: 'white', borderColor: 'white'}}
            to="/docs/download">
            🚀 立即下载
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
      title={`首页`}
      description="SillyAndroid - 安卓端的 SillyTavern 启动器">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
