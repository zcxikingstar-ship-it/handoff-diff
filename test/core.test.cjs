const {test}=require('node:test');const assert=require('node:assert/strict');const C=require('../core.js');
test('finds email changes',()=>{const r=C.inspect('To a@x.com','To b@x.com');assert.deepEqual(r.critical.email,{removed:['a@x.com'],added:['b@x.com']});});
test('finds URL changes',()=>{const r=C.inspect('https://a.test/x','https://b.test/x');assert.equal(r.critical.url.added[0],'https://b.test/x');});
test('finds money and percent changes',()=>{const r=C.inspect('Pay $100 and 10%','Pay $120 and 12%');assert.deepEqual(r.critical.amount.added,['$120','12%']);});
test('finds date changes',()=>{const r=C.inspect('2026-10-01','2026-10-02');assert.equal(r.critical.date.removed[0],'2026-10-01');});
test('returns visible add and remove tokens',()=>{const r=C.inspect('hello old world','hello new world');assert.ok(r.diff.some(x=>x.kind==='removed'&&x.text==='old'));assert.ok(r.diff.some(x=>x.kind==='added'&&x.text==='new'));});
test('identical text has no critical changes',()=>assert.equal(C.inspect('same','same').changes,0));
test('rejects oversize inputs',()=>assert.throws(()=>C.inspect('x'.repeat(C.MAX_CHARS+1),'')));
test('report says review boundary',()=>assert.match(C.report(C.inspect('a','b')),/Review every change/));
