import 'dotenv/config';
import otp from 'otpauth';

export function generateTOTP() {
  const totp = new otp.TOTP({
    issuer: process.env.TOTP_ISSUER,
    label: process.env.TOTP_LABEL,
    algorithm: 'SHA512',
    digits: 6,
    period: 30,
    secret: process.env.TOTP_SECRET,
  });
  const token = totp.generate();
  return token;
}
