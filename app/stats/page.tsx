import { Fragment, Suspense } from 'react';
import GithubContributions from '../about/github-contributions/github-contributions';
import Header from '../components/header';
import NowPlaying from '../components/spotify/now-playing';
import SpotifySkeleton from '../components/spotify/spotify-skeleton';
import TopTracks from '../components/spotify/top-tracks';

export const metadata = {
  title: 'Stats',
  description: 'My Stats - Abhishek Tripathi',
};

export default function StatsPage() {
  return (
    <div>
      <Header title="Stats" />
      <div className="space-y-2 md:space-y-5 mb-5">
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Here are some personal stats that I managed to gather over different
          APIs.
        </p>
      </div>

      <section className="space-y-3">
        <GithubContributions />
        <Suspense
          fallback={
            <Fragment>
              <SpotifySkeleton />
            </Fragment>
          }
        >
          <TopTracks />
        </Suspense>
        <NowPlaying />
      </section>
    </div>
  );
}
