export const waitlistTemplate = (email: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You're on the Buddi Waitlist!</title>
</head>
<body style="margin:0;padding:0;background-color:#000000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="padding:40px 40px 32px;background-color:#000000;border-bottom:1px solid #222222;">
              <span style="font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">
                Budd<span style="color:#FFF200;">i</span>
              </span>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td style="padding:48px 40px 32px;background-color:#000000;">
              <h1 style="margin:0 0 16px;font-size:36px;font-weight:700;color:#ffffff;line-height:1.2;">
                You're on the<br/>
                <span style="color:#FFF200;">Buddi Waitlist!</span>
              </h1>
              <p style="margin:0;font-size:16px;color:#aaaaaa;line-height:1.6;">
                Hey there — thanks for signing up. You're now among the first to know when Buddi launches.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background-color:#222222;"></div>
            </td>
          </tr>

          <!-- What to expect -->
          <tr>
            <td style="padding:32px 40px;">
              <h2 style="margin:0 0 20px;font-size:18px;font-weight:600;color:#ffffff;">
                What to expect
              </h2>
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding:12px 0;vertical-align:top;">
                    <span style="display:inline-block;width:8px;height:8px;background:#FFF200;border-radius:50%;margin-right:12px;margin-top:6px;vertical-align:top;"></span>
                    <span style="color:#cccccc;font-size:15px;line-height:1.6;">Early access to our platform before the public launch</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;vertical-align:top;">
                    <span style="display:inline-block;width:8px;height:8px;background:#FFF200;border-radius:50%;margin-right:12px;margin-top:6px;vertical-align:top;"></span>
                    <span style="color:#cccccc;font-size:15px;line-height:1.6;">Exclusive offers and promotions for pet lovers</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;vertical-align:top;">
                    <span style="display:inline-block;width:8px;height:8px;background:#FFF200;border-radius:50%;margin-right:12px;margin-top:6px;vertical-align:top;"></span>
                    <span style="color:#cccccc;font-size:15px;line-height:1.6;">Updates on new products and vet care features</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <div style="height:1px;background-color:#222222;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:32px 40px;background-color:#000000;">
              <p style="margin:0 0 8px;font-size:13px;color:#555555;">
                This email was sent to <span style="color:#888888;">${email}</span> because you signed up at buddi.com.
              </p>
              <p style="margin:0;font-size:13px;color:#555555;">
                © 2026 Buddi. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
