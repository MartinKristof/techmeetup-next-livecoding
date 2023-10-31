import { FC } from 'react';
import { Container } from '@techmeetup/app/_components/ui/Container';

const PhotosLayout: FC<{ children: React.ReactNode }> = ({ children }) => <Container>{children}</Container>;

export default PhotosLayout;
