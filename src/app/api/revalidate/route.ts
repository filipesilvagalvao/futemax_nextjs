import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function POST(req: Request) {
  try {
    const url = new URL(req.url)
    const provided = url.searchParams.get('secret') || (await req.json()).secret || req.headers.get('x-revalidate-secret')
    const secret = process.env.REVALIDATE_SECRET

    if (!secret || !provided || provided !== secret) {
      return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
    }

    // Ajuste o caminho abaixo para a rota que precisa ser revalidada
    await revalidatePath('/jogos-de-hoje')

    return NextResponse.json({ revalidated: true })
  } catch (err) {
    return NextResponse.json({ revalidated: false, error: String(err) }, { status: 500 })
  }
}
