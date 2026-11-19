import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

export interface EmailRfqPayload {
  customer_name: string;
  company_brand: string;
  customer_email: string;
  customer_phone: string;
  product_name: string;
  order_tier: string;
  artwork_status: string;
  message: string;
  order_id?: string;
  submission_date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // =========================================================================
  // EmailJS Configuration Keys
  // =========================================================================
  private serviceId = 'service_q2cg28i';
  private adminTemplateId = 'template_nwn2b4e';
  private customerTemplateId = 'template_j10fdn6';
  private publicKey = 'GkR-YvQJQbxcD5gsg';

  /**
   * Dispatches both Admin Notification and Customer Confirmation emails
   */
  async sendRfqEmails(payload: EmailRfqPayload): Promise<{ success: boolean; error?: any }> {
    // Generate unique RFQ ID & human-readable date if not provided
    const orderId = payload.order_id || `BP-${Math.floor(100000 + Math.random() * 900000)}`;
    const submissionDate = payload.submission_date || new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short'
    });

    const templateParams = {
      ...payload,
      // Standard & Custom EmailJS aliases
      to_name: 'Brand Peoples Admin',
      from_name: payload.customer_name,
      from_email: payload.customer_email,
      to_email: payload.customer_email, // Used by EmailJS to address customer auto-reply
      reply_to: payload.customer_email,
      phone_number: payload.customer_phone,
      order_id: orderId,
      submission_date: submissionDate,
      customer_phone_clean: payload.customer_phone.replace(/[^0-9]/g, ''),
      factory_phone: '+91 96299 86444',
      factory_email: 'hello@brandpeoples.com',
      factory_instagram: 'brandpeoples.com_',
      factory_address: 'Anupparpalayam Pudur, Tiruppur, Tamil Nadu 641652, India',
      website_url: 'https://brandpeoples.com'
    };

    // If keys are placeholders, simulate successful send and log parameters
    if (this.serviceId === 'YOUR_SERVICE_ID' || this.publicKey === 'YOUR_PUBLIC_KEY') {
      console.info(
        '[EmailService] EmailJS keys are not configured yet. Configure your Service ID and Template IDs in email.service.ts.',
        templateParams
      );
      return { success: true };
    }

    try {
      // 1. Send Admin Notification to hello@brandpeoples.com
      const adminPromise = emailjs.send(
        this.serviceId,
        this.adminTemplateId,
        templateParams,
        this.publicKey
      );

      // 2. Send Customer Auto-Responder to customer's email
      const customerPromise = emailjs.send(
        this.serviceId,
        this.customerTemplateId,
        templateParams,
        this.publicKey
      );

      const results = await Promise.allSettled([adminPromise, customerPromise]);
      const hasErrors = results.some(r => r.status === 'rejected');
      if (hasErrors) {
        console.warn('[EmailService] Partial dispatch notice:', results);
      }
      return { success: true };
    } catch (err) {
      console.error('[EmailService] Failed to send EmailJS message:', err);
      return { success: false, error: err };
    }
  }
}
