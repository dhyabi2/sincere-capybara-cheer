import { WalletNav } from '@/components/WalletNav';
import ImageUploadForm from '@/components/ImageUploadForm';
import { ImageFeed } from '@/components/ImageFeed';

const ImageSharingApp = () => {
  return (
    <div className="min-h-screen bg-background">
      <WalletNav />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <ImageUploadForm />
          <ImageFeed />
        </div>
      </main>
    </div>
  );
};

export default ImageSharingApp;