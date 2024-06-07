// "use server"

// export async function get(page?: number){

//     if (!page) page = 1
//     page = page - 1

//     const resp = await fetch(`${process.env.API_BASE_URL}/empresa/${id}`, {next: {revalidate: 0}})

//     if (!resp.ok){
//         return null
//     }

//     return await resp.json()

// }