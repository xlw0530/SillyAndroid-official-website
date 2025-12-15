import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
