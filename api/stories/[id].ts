import prisma from '../lib/prisma.js';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      await prisma.story.delete({
        where: { id: String(id) },
      });
      return res.status(200).json({ message: 'Story deleted' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete story' });
    }
  }

  if (req.method === 'PUT') {
    try {
      const { title, author, date, content, imageUrl } = req.body;
      const updatedStory = await prisma.story.update({
        where: { id: String(id) },
        data: {
          title,
          author,
          date,
          content,
          imageUrl: imageUrl || null,
        },
      });
      return res.status(200).json(updatedStory);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update story' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
