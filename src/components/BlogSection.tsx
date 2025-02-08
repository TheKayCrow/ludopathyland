import { Button } from './Button';
import { blogPosts } from '../data/blog';

export function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold mb-2">Blog e Novità</h2>
        <p className="text-gray-400 mb-8">Articoli, guide e aggiornamenti dal mondo dei casinò online</p>
        
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all flex flex-col">
              <div className="flex items-center gap-2 text-sm text-purple-400 mb-2">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 flex-grow">{post.title}</h3>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm text-gray-400">{post.date}</span>
                <Button variant="outline" size="sm">Leggi Articolo</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}