
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Save to database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || '',
        message: message.trim(),
        status: 'new',
        formType: 'contact'
      }
    })

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: submission.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form submission error:', error)
    
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS if needed
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 })
}
