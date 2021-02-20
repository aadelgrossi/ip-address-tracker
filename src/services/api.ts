import axios from 'axios'

export const fetchInfo = async (query: string): Promise<IpfyResponse> => {
  const apiKey = process.env.IPIFY_API_KEY

  const { data } = await axios.get<IpfyResponse>(
    `https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${query}`
  )

  return data
}
