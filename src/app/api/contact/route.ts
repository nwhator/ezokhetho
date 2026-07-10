import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, service, message, phone, preferredDate, preferredTime } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailContent = `
New ${service || 'Contact'} Request from Ezokhetho Website

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${preferredDate ? `Preferred Date: ${preferredDate}` : ''}
${preferredTime ? `Preferred Time: ${preferredTime}` : ''}
Service: ${service || 'General Inquiry'}

Message:
${message}
    `.trim()

    // Using Gmail SMTP via a service like nodemailer would be ideal
    // For now, we'll use a simple approach - you'll need to configure this with your email service
    // This is a placeholder - you'll need to integrate with SendGrid, Resend, Nodemailer, etc.
    
    console.log('Email to send:', emailContent)
    console.log('To: your-gmail@gmail.com')

    // Example using a generic email service - replace with your actual email service
    // const response = await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'Ezokhetho <onboarding@resend.dev>',
    //     to: ['your-gmail@gmail.com'],
    //     subject: `New ${service || 'Contact'} Request: ${name}`,
    //     text: emailContent,
    //   }),
    // })

    // For now, simulate success - REPLACE WITH ACTUAL EMAIL SERVICE
    return NextResponse.json({ success: true, message: 'Request submitted successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}