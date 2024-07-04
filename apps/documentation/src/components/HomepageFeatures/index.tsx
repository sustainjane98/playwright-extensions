import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/Enthusiastic-amico.svg').default,
    description: (
      <>
        Playwright-extensions is very user-friendly, making web automation with
        Playwright even simpler. It adds useful commands, so you write less code
        to handle common tasks like waiting for a maybe existing element easier
        and more efficient.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/Light bulb-cuate.svg').default,
    description: (
      <>
        Playwright-extensions is very easy to use, simplifying Playwright's
        already straightforward framework. It focuses on just four main methods,
        making the logic easy to follow. The extensions build on Playwright's
        core concepts of Pages and Test Runners, which are deeply integrated,
        ensuring a smooth and intuitive experience for web automation tasks.
      </>
    ),
  },
  {
    title: 'Powered by TypeScript',
    Svg: require('@site/static/img/Mobile testing-pana.svg').default,
    description: (
      <>
        Playwright-extensions uses TypeScript to enable powerful autocomplete
        features. This provides strong typing, making methods and properties
        well-defined and easily accessible. As a result, your IDE can offer
        intelligent code completions, simplifying the coding process and
        reducing errors. This integration enhances productivity and ensures
        cleaner, more reliable code.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
