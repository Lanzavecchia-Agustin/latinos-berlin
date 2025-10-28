import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const [emailCount, counter] = await Promise.all([
      prisma.email.count(),
      prisma.counter.findUnique({ where: { id: 1 } })
    ])

    const total = emailCount + (counter?.count || 0)

    return NextResponse.json({
      emailCount,
      likeCount: counter?.count || 0,
      total
    })
  } catch (error) {
    console.error('Error al obtener el total:', error)
    return NextResponse.json(
      { error: 'Error al obtener el total' },
      { status: 500 }
    )
  }
}