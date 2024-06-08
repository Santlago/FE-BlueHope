"use server"

export async function get(page?: number, size?: number) {
    if (!page) page = 1
    page = page - 1

    // Default size value if not provided
    if (!size) size = 10

    const queryParam = new URLSearchParams()
    queryParam.append('page', page.toString())
    queryParam.append('size', size.toString())

    const url = `${process.env.API_BASE_URL}/desafio?${queryParam.toString()}`
    const resp = await fetch(url, { next: { revalidate: 0 } })
    const json = await resp.json()
    return json
}
