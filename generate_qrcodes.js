const QRCode = require('qrcode');
const fs = require('fs');

const baseUrl = 'http://yossamap.github.io?qrid='; // Replace with your actual base URL

const qrData = [];
for (let i = 1; i <= 3; i++) {
  const uniqueId = `QR_CODE_${i}`;
  const url = `${baseUrl}${uniqueId}`;
  QRCode.toFile(`qr_code_${i}.png`, url, function (err) {
    if (err) throw err;
    console.log(`QR code ${i} generated.`);
  });
  qrData.push({ ID: uniqueId, URL: url, QRCode: `qr_code_${i}.png` });
}

fs.writeFileSync('qr_codes.json', JSON.stringify(qrData, null, 2));
console.log('QR codes data saved.');
