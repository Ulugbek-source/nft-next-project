import { getRequest } from '@/server/getRequest'
import CreatorContent from './CreatorContent'

const Creator = async () => {
	const creators = await getRequest('/user')

	return <CreatorContent creators={creators.data} />
}

export default Creator
