import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface FeedItemProps {
  image: string;
  caption: string;
  rating: number;
}

export const FeedItem: React.FC<FeedItemProps> = ({ image, caption, rating }) => {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <img src={image} alt={caption} className="w-full h-auto rounded-lg" />
        <p className="mt-2 text-sm text-gray-600">{caption}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium">Rating:</span>
          <span className="text-lg font-bold">{rating}/10</span>
        </div>
      </CardFooter>
    </Card>
  );
};