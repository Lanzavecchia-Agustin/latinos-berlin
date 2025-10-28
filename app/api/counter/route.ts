import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const counter = await prisma.counter.upsert({
      where: { id: 1 },
      update: { count: { increment: 1 } },
      create: { id: 1, count: 1 }
    })

    return NextResponse.json({ success: true, count: counter.count })
  } catch (error) {
    console.error('Error al incrementar el contador:', error)
    return NextResponse.json(
      { error: 'Error al incrementar el contador' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const counter = await prisma.counter.findUnique({
      where: { id: 1 }
    })

    return NextResponse.json({ count: counter?.count || 0 })
  } catch (error) {
    console.error('Error al obtener el contador:', error)
    return NextResponse.json(
      { error: 'Error al obtener el contador' },
      { status: 500 }
    )
  }
}