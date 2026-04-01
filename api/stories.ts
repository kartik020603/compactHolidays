import prisma from './lib/prisma.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 3;
      const skip = (page - 1) * limit;

      const [stories, totalCount] = await Promise.all([
        prisma.story.findMany({
          orderBy: { createdAt: 'desc' },
          skip,
          take: limit,
        }),
        prisma.story.count(),
      ]);

      return res.status(200).json({
        stories,
        totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit),
      });
    } catch (error) {
      console.error('API Error:', error);
      return res.status(500).json({ error: 'Failed to fetch stories' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { title, author, date, content, imageUrl } = req.body;
      const newStory = await prisma.story.create({
        data: {
          title,
          author,
          date,
          content,
          imageUrl: imageUrl || null,
        },
      });
      return res.status(201).json(newStory);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to create story' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
