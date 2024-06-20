import unsplashApi from '@/api/unspash'
import { ref } from 'vue'

const useImage = (query: string) => {
  const img = ref('')
  const loadImage = async (query: string) => {
    img.value = ''
    const data = await unsplashApi.search.getPhotos({
      query,
      orientation: 'landscape'
    })
    setTimeout(() => {
      img.value = data.response?.results[1].urls.full || ''
    }, 500)
  }
  loadImage(query)

  return { img, loadImage }
}
export default useImage
