'use client';
import { useEffect, useState } from 'react';
import { launch, regular, offersEnd } from '../lib/catalog';
export default function Offer(){
 const [now,setNow]=useState(null);
 useEffect(()=>{function update(){setNow(Date.now())}update();const handle=setInterval(update,15000);window.addEventListener('focus',update);return()=>{clearInterval(handle);window.removeEventListener('focus',update)}},[]);
 if(now===null)return <p>One-off licence for the current major version.</p>;
 const promo=now<offersEnd;
 const url=promo?launch:regular;
 return <div className="offer"><div className="offerline"><strong>{promo?'£29':'£49'}</strong><span>One-off licence</span></div>{promo&&<p>Black Friday launch price through 30 November 2026. £49 from 1 December.</p>}{url?<><a className="button" href={url}>Buy Technician Toolbox <span>↗</span></a><small>Checkout and purchase access via Whop.</small></>:<p className="availability">Checkout is being prepared. Sales open when the signed release is available.</p>}</div>
}
