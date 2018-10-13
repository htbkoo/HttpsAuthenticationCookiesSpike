import Link from 'next/link';

const Index = () => (
    <div>
        <Link href="/about">
            <button>Go to About Page</button>
        </Link>
        <p>Hello World</p>
    </div>
);

export default Index;