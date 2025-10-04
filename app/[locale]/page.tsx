import {
	Auctions,
	Categories,
	Collections,
	Creator,
	Hero,
	NFT,
} from '@/modules'

export default function Home() {
	return (
		<main>
			<Hero />
			<Collections />
			<Creator />
			<Categories />
			<NFT />
			<Auctions />
		</main>
	)
}
