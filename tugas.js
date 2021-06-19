let regexEmail = /^[a-z]+\.?[a-z]+\.?[a-z]+[0-9]*@[a-z]+\.[a-z]+\.?\w+$/i;

console.log(regexEmail.test('J@gamil.com'), 'J@gamil.com (minimal 3 huruf)' );
console.log(regexEmail.test('aa@gamil.com'), 'aa@gamil.com (minimal 3 huruf)'  );
console.log(regexEmail.test('ada@gmail.com'), 'ada@gmail.com'  );
console.log(regexEmail.test('ada@gmailcom'), 'ada@gmailcom (setelah @ harus ada blablabla.blabla)'  );
console.log(regexEmail.test('ada93@gmail.com'), 'ada93@gmail.com'  );
console.log(regexEmail.test('ada93*@gmail.com'), 'ada93*@gmail.com (ada simbolnya)'  );
console.log(regexEmail.test('ad^a93@gmail.com'), 'ad^a93@gmail.com (ada simbolnya)'  );
console.log(regexEmail.test('8ada93@gmail.com'), '8ada93@gmail.com (awalnya harus huruf)'  );
console.log(regexEmail.test('ada93gmail.com'), 'ada93gmail.com (harus ada \'@\'nya  )');
console.log(regexEmail.test('arkan.fauzan.ayyasyi93@gmail.com'), 'arkan.fauzan.ayyasyi93@gmail.com'  );
console.log(regexEmail.test('arkan.fauzanayyasyi93@gmail.com'), 'arkan.fauzanayyasyi93@gmail.com'  );
console.log(regexEmail.test('ar.kan@gmail.com'), 'ar.kan@gmail.com');
console.log(regexEmail.test('ar.kan72b@gmail.com'), 'ar.kan72b@gmail.com (setelah angka gaboleh ada huruf)');
console.log(regexEmail.test('ar.kan@yahoo.co.id'), 'ar.kan@yahoo.co.id');

console.log('-------------------------------------------------------------');


let regexTeleponIndo = /^(\+62|0|62){1,1}[0-9]{10,12}$/;

console.log(regexTeleponIndo.test("+62822132582"), "+62822132582 (minimal 10 digit)");
console.log(regexTeleponIndo.test("+628221325823"), "+628221325823 sipp");
console.log(regexTeleponIndo.test("+62822132582311"), "+62822132582311 sipp");
console.log(regexTeleponIndo.test("+628221325823111"), "+628221325823111 (maksimal 12 digit)");

console.log();

console.log(regexTeleponIndo.test("62822132582"), "62822132582 (minimal 10 digit)");
console.log(regexTeleponIndo.test("628221325823"), "628221325823 sipp");
console.log(regexTeleponIndo.test("62822132582311"), "62822132582311 sipp");
console.log(regexTeleponIndo.test("628221325823111"), "628221325823111 (maksimal 12 digit)");

console.log();

console.log(regexTeleponIndo.test("0822132582"), "0822132582 (minimal 10 digit)");
console.log(regexTeleponIndo.test("08221325823"), "08221325823 sipp");
console.log(regexTeleponIndo.test("0822132582311"), "0822132582311 sipp");
console.log(regexTeleponIndo.test("08221325823111"), "08221325823111 (maksimal 12 digit)");

console.log();

console.log(regexTeleponIndo.test("822132582"), "822132582 depannya harus 0/62/+62");
console.log(regexTeleponIndo.test("8221325823"), "8221325823 depannya harus 0/62/+62");
console.log(regexTeleponIndo.test("822132582311"), "822132582311 depannya harus 0/62/+62");
console.log(regexTeleponIndo.test("8221325823111"), "822132582311 depannya harus 0/62/+62");
