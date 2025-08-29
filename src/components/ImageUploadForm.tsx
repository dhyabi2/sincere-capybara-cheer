import React, { useState } from 'react';
import { useWallet } from '@/contexts/WalletContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { ImagePlus } from 'lucide-react';

const ImageUploadForm = () => {
  const { wallet } = useWallet();
  const { toast } = useToast();
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wallet) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to upload images",
        variant: "destructive"
      });
      return;
    }

    if (!image) {
      toast({
        title: "No image selected",
        description: "Please select an image to upload",
        variant: "destructive"
      });
      return;
    }

    // TODO: Implement image upload logic
    toast({
      title: "Success!",
      description: "Image uploaded successfully",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <label htmlFor="image" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Image
        </label>
        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={() => document.getElementById('image')?.click()}
        >
          <ImagePlus className="mr-2 h-4 w-4" />
          {image ? image.name : 'Upload Image'}
        </Button>
        <Input
          id="image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <label htmlFor="caption" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Caption
        </label>
        <Textarea
          id="caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Add a caption to your image..."
        />
      </div>
      <Button type="submit" className="w-full max-w-sm">
        Upload
      </Button>
    </form>
  );
};

export default ImageUploadForm;