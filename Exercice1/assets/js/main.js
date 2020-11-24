// Carte Bancaire\\
let cleave = new Cleave('.input-card', {
    creditCard: true,
});
// Téléphone \\
let phoneNumber = new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: 'fr',
    delimiters: '.',
    blocks: [2, 2, 2, 2, 2]
});
// Date \\
let orderDate = new Cleave('.input-element', {
    date: true,
    delimiter: '/',
    datePattern: ['d', 'm', 'Y']
});