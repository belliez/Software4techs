import {readdir,readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
const paths=['','technician-toolbox/','ipos/','support/'];
for(const route of paths){const html=await readFile('out/'+route+'index.html','utf8');assert(html.includes('id="main"'));for(const match of html.matchAll(/href="(\/[^"#?]*)/g)){const p=match[1];if(p.endsWith('/'))assert(paths.includes(p.slice(1)),'Broken page '+p);}}
const entries=await readdir('out',{recursive:true});assert(!entries.some(p=>/\.(exe|zip|msi|pfx|pem)$/i.test(p)),'Private release material in public export');
for(const p of entries.filter(p=>/\.(html|js|txt|json)$/i.test(p))){const body=await readFile('out/'+p,'utf8');assert(!/https?:[^"'\s<>]+\.(exe|msi|zip)(?:["'?#\s<]|$)/i.test(body),'Direct binary link in '+p);}
console.log('Verified all product pages and public export contents');
