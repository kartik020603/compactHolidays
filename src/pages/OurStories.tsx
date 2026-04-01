import { useState, useEffect } from 'react';
import { BookOpen, User, Calendar, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface Story {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  imageUrl?: string;
}

const DEFAULT_STORIES: Story[] = [
  {
    id: '1',
    title: 'The Unforgettable Taj Mahal Experience',
    author: 'Rajiv Mehra',
    date: 'March 2025',
    content: 'Compact Holidays completely transformed our Agra trip. We were worried about the crowds, but their VIP arrangements made everything seamless. The Sunrise tour is highly recommended! Ekdum apne ghar jaisi feeling.',
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Last Minute Visa Success',
    author: 'Neha Gupta',
    date: 'February 2025',
    content: 'I had to travel to Europe for an urgent business meeting. The passport and visa process looked daunting, but the team handled it effortlessly. Jo passport kahin nahi bante, unhone banwa diye. Real experts!',
    imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
  }
];

export default function OurStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [expandedStoryId, setExpandedStoryId] = useState<string | null>(null);
  
  const STORIES_PER_PAGE = 3;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/stories?page=${currentPage}&limit=${STORIES_PER_PAGE}`)
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data.stories)) {
          setStories(data.stories);
          setTotalPages(data.totalPages || 1);
          setTotalCount(data.totalCount || 0);
        } else {
          // Fallback to static if API fails but we want something to show
          setStories(DEFAULT_STORIES);
          setTotalPages(1);
          setTotalCount(DEFAULT_STORIES.length);
        }
      })
      .catch(err => {
        console.error('Failed to fetch stories:', err);
        setStories(DEFAULT_STORIES);
        setTotalPages(1);
        setTotalCount(DEFAULT_STORIES.length);
      })
      .finally(() => setLoading(false));
  }, [currentPage]);

  const startIndex = (currentPage - 1) * STORIES_PER_PAGE;
  const currentStories = stories; // Already sliced by server

  return (
    <div className="w-full bg-[var(--color-surface)]">
      {/* Hero Section */}
      <section className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary-container)]/30 to-[var(--color-surface)]" />
        <div className="relative z-10 text-center px-4 max-w-4xl pt-32">
          <FadeIn direction="down">
             <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.4em] mb-8 border border-[var(--color-primary-container)]">
               <BookOpen className="w-4 h-4" /> Community Logs
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-primary)] mb-6 tracking-tighter loading-tight">
               Our <span className="text-[var(--color-accent)] italic font-serif">Stories</span>
             </h1>
             <p className="text-xl text-[var(--color-on-surface-variant)] max-w-2xl mx-auto leading-relaxed italic font-serif">
               "Real journeys, shared by our trusted travelers. Aapka apna travel parivar."
             </p>
          </FadeIn>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {loading ? (
           <div className="flex justify-center items-center h-64">
              <div className="w-12 h-12 border-4 border-[var(--color-primary-container)] border-t-[var(--color-primary)] rounded-full animate-spin"></div>
           </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {currentStories.map((story, i) => (
            <FadeIn key={story.id} delay={0.1 * i} direction="up" fullWidth>
               <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-[var(--color-surface-container)] hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
                  {story.imageUrl ? (
                    <div className="h-64 overflow-hidden">
                       <img src={story.imageUrl} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                  ) : (
                    <div className="h-64 bg-[var(--color-primary-container)]/30 flex items-center justify-center">
                       <BookOpen className="w-16 h-16 text-[var(--color-primary)] opacity-50" />
                    </div>
                  )}
                  <div className="p-8 flex-1 flex flex-col">
                     <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-variant)] mb-4">
                        <span className="flex items-center gap-1"><User className="w-3 h-3 text-[var(--color-primary)]" /> {story.author}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[var(--color-primary)]" /> {story.date}</span>
                     </div>
                     <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4 tracking-tighter">{story.title}</h3>
                     <p className={`text-[var(--color-on-surface-variant)] leading-relaxed italic font-serif mb-8 flex-1 ${expandedStoryId === story.id ? '' : 'line-clamp-3'}`}>"{story.content}"</p>
                     
                     <button 
                        onClick={() => setExpandedStoryId(expandedStoryId === story.id ? null : story.id)}
                        className="flex items-center gap-2 text-[var(--color-accent)] font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all mt-auto group/btn"
                     >
                        {expandedStoryId === story.id ? 'Show Less' : 'Read More'} <ArrowRight className={`w-4 h-4 transition-transform ${expandedStoryId === story.id ? '-rotate-90' : ''}`} />
                     </button>
                  </div>
               </div>
            </FadeIn>
          ))}
            </div>
            
            {/* Pagination Controls */}
            {totalCount > 0 && (
              <div className="mt-20 flex flex-col items-center">
                 <p className="text-[var(--color-on-surface-variant)] mb-6 font-serif italic">
                    Showing {startIndex + 1} - {Math.min(startIndex + STORIES_PER_PAGE, totalCount)} out of {totalCount} stories
                 </p>
                 <div className="flex gap-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                       <button
                         key={idx}
                         onClick={() => {
                           setCurrentPage(idx + 1);
                           window.scrollTo({ top: 0, behavior: 'smooth' });
                         }}
                         className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-colors ${currentPage === idx + 1 ? 'bg-[var(--color-primary)] text-white shadow-lg' : 'bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary-container)]'}`}
                       >
                         {idx + 1}
                       </button>
                    ))}
                 </div>
              </div>
            )}
            
            {totalCount === 0 && (
               <div className="text-center py-20">
                  <p className="text-2xl text-[var(--color-primary)] font-bold">No stories found. Check back later!</p>
               </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
