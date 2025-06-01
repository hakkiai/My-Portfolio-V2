import Header from '../components/header';
import PageContainer from '../components/layouts/page-container';

export const metadata = {
  title: 'Thoughts',
  description: 'My Thoughts - Abhishek Tripathi',
};

export default function ThoughtsPage() {
  return (
    <PageContainer>
      <Header title="Thoughts" />
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
        <p className="text-gray-600">
          I'm currently working on some interesting articles. Stay tuned!
        </p>
      </div>
    </PageContainer>
  );
}
