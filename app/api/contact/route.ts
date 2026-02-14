import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY!);

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    const { error } = await supabase.from("leads").insert([
      { name, email, service, message },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, error: "Database error" },
        { status: 500 }
      );
    }
    try {
      await resend.emails.send({
        from: "SerangDev.com <system@serangdev.com>",
        to: "hello@serangdev.com",
        subject: "Lead Baru dari Website",
        html: `
          <h2>Lead Baru Masuk</h2>
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Layanan:</strong> ${service || "-"}</p>
          <p><strong>Pesan:</strong><br/> ${message}</p>
        `,
      });
    } catch (err) {
      console.error("Owner email failed:", err);
    }

    try {
      await resend.emails.send({
        from: "SerangDev.com <system@serangdev.com>",
        to: email,
        subject: "Terima kasih telah menghubungi SerangDev 🚀",
        html: `
        <div style="font-family: Arial, sans-serif; background:#f4f6f9; padding:40px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:12px; overflow:hidden;">
                  
                  <!-- HEADER -->
                  <tr>
                    <td style="background-color:#ffffff; padding:30px; text-align:center;">
                      <img src="https://serangdev.com/serangdev-Hcolor.webp" width="150" alt="SerangDev" />
                    </td>
                  </tr>

                  <!-- BODY -->
                  <tr>
                    <td style="padding:40px;">
                      <h2 style="margin-top:0;">Halo ${name},</h2>
                      <p>Terima kasih telah mengirimkan pesan.</p>
                      <p>Tim kami sedang meninjau pesan Anda dan akan segera menghubungi Anda kembali secepatnya.</p>

                      <div style="margin:30px 0; text-align:center;">
                        <a href="https://wa.me/6281234567890"
                          style="background:#25D366; color:#ffffff; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:bold;">
                          Chat WhatsApp Sekarang
                        </a>
                      </div>

                      <p>Jika ini mendesak, Anda bisa langsung menghubungi kami melalui WhatsApp.</p>
                    </td>
                  </tr>

                  <!-- FOOTER -->
                  <tr>
                    <td style="background:#111827; color:#9ca3af; padding:20px; text-align:center; font-size:12px;">
                      © ${new Date().getFullYear()} SerangDev<br/>
                      Website Development Specialist<br/>
                      https://serangdev.com
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </div>
        `,
      });
    } catch (err) {
      console.error("Auto reply failed:", err);
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("Fatal API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
