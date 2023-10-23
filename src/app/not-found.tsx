import Link from 'next/link';

const NotFound = () => (
  <div className="container mx-auto py-3">
    <h1>Not Found</h1>
    <p className="py-3">Could not find requested resource</p>
    <Link href="/">Return Home</Link>
  </div>
);

export default NotFound;
