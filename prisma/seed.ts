import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding travel stories...')

  const stories = [
    {
      title: 'The Unforgettable Taj Mahal Experience',
      author: 'Rajiv Mehra',
      date: 'March 2025',
      content: 'Compact Holidays completely transformed our Agra trip. We were worried about the crowds, but their VIP arrangements made everything seamless. The Sunrise tour is highly recommended! Ekdum apne ghar jaisi feeling.',
      imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Last Minute Visa Success',
      author: 'Neha Gupta',
      date: 'February 2025',
      content: 'I had to travel to Europe for an urgent business meeting. The passport and visa process looked daunting, but the team handled it effortlessly. Jo passport kahin nahi bante, unhone banwa diye. Real experts!',
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Best Tour in Rajasthan',
      author: 'Amit Sharma',
      date: 'January 2025',
      content: 'The Rajasthan tour packages are the best. We visited Jaipur, Udaipur, and Jaisalmer. The hotels were premium and the driver was friendly. Highly recommend!',
      imageUrl: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Seamless Flight Booking',
      author: 'Vikram Singh',
      date: 'December 2024',
      content: 'I booked my international flight through Compact Holidays. Their service is really fast and I got a great discount. No hidden charges.',
      imageUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Divine Varanasi Experience',
      author: 'Sita Ram',
      date: 'November 2024',
      content: 'Varanasi trip with family was very peaceful. Compact Holidays managed everything including the boat ride and hotel. Very helpful team.',
      imageUrl: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?auto=format&fit=crop&w=800&q=80',
    }
  ]

  for (const story of stories) {
    await prisma.story.create({
      data: story,
    })
  }

  console.log('Seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
