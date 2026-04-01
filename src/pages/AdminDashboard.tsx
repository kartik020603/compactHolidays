import { useState, useEffect } from 'react';
import { Settings, Lock, Plus, Trash2, Edit3, Image } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface Story {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  imageUrl?: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [stories, setStories] = useState<Story[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  
  const ADMIN_STORIES_PER_PAGE = 5;

  // Form State
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const fetchStories = async () => {
    try {
      const res = await fetch(`/api/stories?page=${currentPage}&limit=${ADMIN_STORIES_PER_PAGE}`);
      const data = await res.json();
      if (data && Array.isArray(data.stories)) {
        setStories(data.stories);
        setTotalPages(data.totalPages || 1);
        setTotalCount(data.totalCount || 0);
      }
    } catch (error) {
      console.error('Failed to fetch', error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, [currentPage]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1234') { // Simple PIN for demo purposes
      setIsAuthenticated(true);
    } else {
      alert('Invalid PIN');
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentId('');
    setTitle('');
    setAuthor('');
    setDate('');
    setContent('');
    setImageUrl('');
  };

  const handleEdit = (story: Story) => {
    setIsEditing(true);
    setCurrentId(story.id);
    setTitle(story.title);
    setAuthor(story.author);
    setDate(story.date);
    setContent(story.content);
    setImageUrl(story.imageUrl || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this story?')) {
      try {
        await fetch(`/api/stories/${id}`, { method: 'DELETE' });
        fetchStories(); // Refresh list
      } catch (e) {
        console.error('Failed to delete', e);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (isEditing) {
        const res = await fetch(`/api/stories/${currentId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, author, date, content, imageUrl })
        });
        if (res.ok) {
           fetchStories();
           resetForm();
        }
      } else {
        const res = await fetch('/api/stories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title, author, date, content, imageUrl })
        });
        if (res.ok) {
           setCurrentPage(1); // Go to first page to see new story
           fetchStories();
           resetForm();
        }
      }
    } catch (e) {
      console.error('Failed to save', e);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="w-full h-[80vh] flex flex-col items-center justify-center bg-[var(--color-surface)]">
        <FadeIn direction="up">
           <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-[var(--color-outline-variant)]/10 text-center max-w-md mx-auto">
              <div className="w-20 h-20 bg-[var(--color-primary-container)] rounded-[2rem] mx-auto flex items-center justify-center mb-6">
                 <Lock className="w-10 h-10 text-[var(--color-primary)]" />
              </div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] tracking-tighter mb-2">Admin Access</h2>
              <p className="text-[var(--color-on-surface-variant)] italic font-serif mb-8">Enter PIN to manage stories (Demo PIN: 1234)</p>
              
              <form onSubmit={handleLogin} className="space-y-4">
                 <input 
                   type="password" 
                   value={pin}
                   onChange={(e) => setPin(e.target.value)}
                   className="w-full px-6 py-4 bg-[var(--color-surface)] border border-[var(--color-outline-variant)]/20 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] text-center text-xl tracking-widest"
                   placeholder="****"
                 />
                 <button type="submit" className="w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-2xl uppercase tracking-widest hover:bg-[var(--color-accent)] transition-all">
                    Unlock Dashboard
                 </button>
              </form>
           </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="w-full bg-[var(--color-surface)] py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
         <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-[var(--color-primary-container)] rounded-[1.5rem] flex items-center justify-center shadow-lg">
               <Settings className="w-8 h-8 text-[var(--color-primary)]" />
            </div>
            <div>
               <h1 className="text-4xl font-bold text-[var(--color-primary)] tracking-tighter">Admin Control Center</h1>
               <p className="text-[var(--color-on-surface-variant)] font-serif italic text-lg">Manage "Our Stories" content seamlessly.</p>
            </div>
         </div>
         
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form Section */}
            <div className="lg:col-span-1 bg-white p-8 rounded-[3rem] shadow-xl border border-[var(--color-outline-variant)]/10">
               <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6 flex items-center gap-2">
                 {isEditing ? <Edit3 className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                 {isEditing ? 'Edit Story' : 'New Story'}
               </h3>
               
               <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2">Title</label>
                    <input required value={title} onChange={e => setTitle(e.target.value)} className="w-full px-4 py-3 bg-[var(--color-surface-container-low)] border-none rounded-2xl focus:ring-2 focus:ring-[var(--color-accent)]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2">Author</label>
                      <input required value={author} onChange={e => setAuthor(e.target.value)} className="w-full px-4 py-3 bg-[var(--color-surface-container-low)] border-none rounded-2xl focus:ring-2 focus:ring-[var(--color-accent)]" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2">Date</label>
                      <input required value={date} onChange={e => setDate(e.target.value)} placeholder="e.g. March 2025" className="w-full px-4 py-3 bg-[var(--color-surface-container-low)] border-none rounded-2xl focus:ring-2 focus:ring-[var(--color-accent)]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2 flex items-center gap-2"><Image className="w-4 h-4" /> Image URL (Optional)</label>
                    <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="https://unsplash.com/..." className="w-full px-4 py-3 bg-[var(--color-surface-container-low)] border-none rounded-2xl focus:ring-2 focus:ring-[var(--color-accent)]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] mb-2">Content (Hinglish Supported)</label>
                    <textarea required value={content} onChange={e => setContent(e.target.value)} rows={5} className="w-full px-4 py-3 bg-[var(--color-surface-container-low)] border-none rounded-2xl focus:ring-2 focus:ring-[var(--color-accent)]" />
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                     <button type="submit" className="flex-1 py-4 bg-[var(--color-accent)] text-white font-bold rounded-2xl shadow-lg transition-transform hover:scale-105 active:scale-95">
                        {isEditing ? 'Save Changes' : 'Publish Story'}
                     </button>
                     {isEditing && (
                        <button type="button" onClick={resetForm} className="px-6 py-4 bg-[var(--color-surface)] text-[var(--color-primary)] font-bold rounded-2xl hover:bg-gray-100 transition-colors">
                           Cancel
                        </button>
                     )}
                  </div>
               </form>
            </div>
            
            {/* List Section */}
            <div className="lg:col-span-2 space-y-4">
               {stories.length === 0 ? (
                  <div className="p-12 bg-white rounded-[3rem] text-center border border-dashed border-gray-300">
                     <p className="text-xl text-[var(--color-on-surface-variant)] italic font-serif">No stories published yet.</p>
                  </div>
               ) : (
                 <div className="space-y-4">
                   {stories.map(story => (
                      <div key={story.id} className="bg-white p-6 rounded-[2rem] border border-[var(--color-outline-variant)]/10 shadow-sm flex flex-col sm:flex-row gap-6 items-center hover:shadow-md transition-shadow">
                         {story.imageUrl && (
                            <img src={story.imageUrl} alt="Thumbnail" className="w-24 h-24 object-cover rounded-xl" />
                         )}
                         <div className="flex-1">
                            <h4 className="text-xl font-bold text-[var(--color-primary)] mb-1">{story.title}</h4>
                            <p className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">{story.author} • {story.date}</p>
                            <p className="text-[var(--color-on-surface-variant)] italic font-serif text-sm line-clamp-2">"{story.content}"</p>
                         </div>
                         <div className="flex sm:flex-col gap-2">
                            <button onClick={() => handleEdit(story)} className="p-3 bg-[var(--color-surface)] text-[var(--color-primary)] rounded-xl hover:bg-[var(--color-primary-container)] transition-colors">
                               <Edit3 className="w-5 h-5" />
                            </button>
                            <button onClick={() => handleDelete(story.id)} className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors">
                               <Trash2 className="w-5 h-5" />
                            </button>
                         </div>
                      </div>
                   ))}

                   {/* Pagination UI */}
                   {totalCount > ADMIN_STORIES_PER_PAGE && (
                      <div className="pt-10 flex flex-col items-center">
                         <p className="text-sm text-[var(--color-on-surface-variant)] mb-4 font-serif italic">
                            Showing page {currentPage} of {totalPages} ({totalCount} total stories)
                         </p>
                         <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, idx) => (
                               <button
                                 key={idx}
                                 onClick={() => {
                                   setCurrentPage(idx + 1);
                                   window.scrollTo({ top: 0, behavior: 'smooth' });
                                 }}
                                 className={`w-10 h-10 rounded-xl font-bold flex items-center justify-center transition-all ${currentPage === idx + 1 ? 'bg-[var(--color-primary)] text-white shadow-lg scale-110' : 'bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary-container)] border border-[var(--color-outline-variant)]/10'}`}
                               >
                                 {idx + 1}
                               </button>
                            ))}
                         </div>
                      </div>
                   )}
                 </div>
               )}
            </div>
         </div>
      </div>
    </div>
  );
}
