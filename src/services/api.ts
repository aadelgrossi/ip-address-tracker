import axios from 'axios'

export const fetchInfo = async (query: string): Promise<IpfyResponse> => {
  const { data } = await axios.get<IpfyResponse>(
    `https://geo.ipify.org/api/v1?apiKey=${process.env.IPIFY_API_KEY}&domain=${query}`
  )

  return data
}
