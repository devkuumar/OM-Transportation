import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      company,
      phone,
      whatsapp,
      email,
      pickup,
      delivery,
      pickupDate,
      vehicleType,
      loadType,
      cargoType,
      approxWeight,
      dimensions,
      vehicleCount,
      notes,
      honeypot,
    } = body;

    // 1. Anti-spam honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Enquiry received' }, { status: 200 });
    }

    // 2. Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ success: false, message: 'Please provide a valid name.' }, { status: 400 });
    }

    const cleanPhone = phone?.toString().replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json({ success: false, message: 'Please provide a valid 10-digit mobile number.' }, { status: 400 });
    }

    if (!pickup || typeof pickup !== 'string' || pickup.trim().length < 2) {
      return NextResponse.json({ success: false, message: 'Please specify the pickup location.' }, { status: 400 });
    }

    if (!delivery || typeof delivery !== 'string' || delivery.trim().length < 2) {
      return NextResponse.json({ success: false, message: 'Please specify the delivery location.' }, { status: 400 });
    }

    // 3. Log securely for business enquiry management (without exposing sensitive tokens)
    console.log('[NEW TRANSPORT REQUEST]', {
      name: name.trim(),
      company: company?.trim() || 'N/A',
      phone: cleanPhone,
      whatsapp: whatsapp?.trim() || cleanPhone,
      email: email?.trim() || 'N/A',
      pickup: pickup.trim(),
      delivery: delivery.trim(),
      pickupDate: pickupDate || 'Unspecified',
      vehicleType: vehicleType || 'To Be Recommended',
      loadType: loadType || 'full',
      cargoType: cargoType?.trim() || 'General Cargo',
      approxWeight: approxWeight?.trim() || 'Unspecified',
      dimensions: dimensions?.trim() || 'Standard',
      vehicleCount: vehicleCount || '1',
      notes: notes?.trim() || '',
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your transport enquiry has been successfully registered. Our team will contact you shortly.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[QUOTE_API_ERROR]', error);
    return NextResponse.json(
      { success: false, message: 'An internal error occurred. Please call or WhatsApp us directly.' },
      { status: 500 }
    );
  }
}
