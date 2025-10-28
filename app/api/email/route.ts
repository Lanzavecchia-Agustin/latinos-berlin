import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email es requerido' },
        { status: 400 }
      )
    }

    const newEmail = await prisma.email.create({
      data: { email }
    })

    return NextResponse.json({ success: true, data: newEmail })
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Este email ya está registrado' },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Error al guardar el email' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const count = await prisma.email.count()
    return NextResponse.json({ count })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Error al obtener el conteo' },
      { status: 500 }
    )
  }
}