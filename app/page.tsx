import { Footer } from '@/components/Footer'
import { Banner } from '@/components/landing-page/Banner'
import { Hero } from '@/components/landing-page/Hero'
import { Navbar } from '@/components/landing-page/Navbar'
import { Services } from '@/components/landing-page/Services'
import { Trending } from '@/components/landing-page/Trending'
import { WeddingGallery } from '@/components/landing-page/WeddingGallery'
import { WeddingTrends } from '@/components/landing-page/WeddingTrends'
import { WeddingTypes } from '@/components/landing-page/WeddingTypes'

export default function Home() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<Hero />
			<Services />
			<Trending />
			<WeddingTypes />
			<WeddingGallery />
			<WeddingTrends />
			<Banner />
			<Footer />
		</div>
	)
}
