import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      ownerName,
      company,
      phone,
      whatsapp,
      location,
      vehicleType,
      vehicleNumber,
      bodyType,
      vehicleCount,
      operatingRoutes,
      notes,
    } = body;

    // Server-side validation
    if (!ownerName || typeof ownerName !== 'string' || ownerName.trim().length < 2) {
      return NextResponse.json({ success: false, message: 'Please provide a valid owner name.' }, { status: 400 });
    }

    const cleanPhone = phone?.toString().replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json({ success: false, message: 'Please provide a valid 10-digit mobile number.' }, { status: 400 });
    }

    if (!location || typeof location !== 'string' || location.trim().length < 2) {
      return NextResponse.json({ success: false, message: 'Please specify your base operating location.' }, { status: 400 });
    }

    // Log securely
    console.log('[NEW TRANSPORT PARTNER REGISTRATION]', {
      ownerName: ownerName.trim(),
      company: company?.trim() || 'N/A',
      phone: cleanPhone,
      whatsapp: whatsapp?.trim() || cleanPhone,
      location: location.trim(),
      vehicleType: vehicleType || '14 FT',
      vehicleNumber: vehicleNumber?.trim().toUpperCase() || 'Pending',
      bodyType: bodyType || 'Open Body',
      vehicleCount: vehicleCount || '1',
      operatingRoutes: operatingRoutes?.trim() || 'All Routes',
      notes: notes?.trim() || '',
      registeredAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your partner registration has been recorded. Our fleet coordinator will contact you.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[PARTNER_API_ERROR]', error);
    return NextResponse.json(
      { success: false, message: 'Failed to record partner details. Please connect via WhatsApp or phone.' },
      { status: 500 }
    );
  }
}
