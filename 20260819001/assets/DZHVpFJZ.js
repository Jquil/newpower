function B(t=200,e=200,m="Image",i){const c=r=>String(r??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),k=(r,o=22)=>{const a=String(r??"").trim();return a?a.length>o?`${a.slice(0,o-1)}…`:a:"Case"},f=i?.title===void 0?k(m,26):i.title,s=f===!1?"":String(f??"").trim(),$=f===!1?"":c(String(f??"")),g=i?.subtitle===void 0?"Knowledge Base":i.subtitle,x=g===!1?"":c(String(g??"")),l=Math.round(t*.14),b=Math.round(t*.06),F=Math.max(40,t-l-b),M=.58,y=Math.max(s.length,1);let n=Math.max(14,Math.round(t*.1));for(;n>10&&y*n*M>F;)n-=1;let d="";if($){const r=Math.round(e*.62);if(y*n*M<=F)d=`
        <text x="${l}" y="${r}"
              font-family="ui-sans-serif, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
              font-size="${n}"
              font-weight="700"
              fill="#FFFFFF"
              fill-opacity="0.92">
          ${$}
        </text>`;else{const o=s.indexOf(" "),a=o>0?s.slice(0,o).trim():s,u=o>0?s.slice(o+1).trim():"",v=c(a),h=u?c(u):"",A=Math.max(a.length,u.length,1);let p=Math.max(12,Math.round(t*.072));for(;p>9&&A*p*M>F;)p-=1;const I=Math.round(e*.54),R=Math.round(e*.68);d=h&&u?`
        <text font-family="ui-sans-serif, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
              font-size="${p}" font-weight="700" fill="#FFFFFF" fill-opacity="0.92">
          <tspan x="${l}" y="${I}">${v}</tspan>
          <tspan x="${l}" y="${R}">${h}</tspan>
        </text>`:`
        <text x="${l}" y="${r}"
              font-family="ui-sans-serif, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
              font-size="${n}"
              font-weight="700"
              fill="#FFFFFF"
              fill-opacity="0.92">
          ${$}
        </text>`}}const S=`
    <svg width="${t}" height="${e}" viewBox="0 0 ${t} ${e}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0B4DBB"/>
          <stop offset="55%" stop-color="#0A3A8A"/>
          <stop offset="100%" stop-color="#062A66"/>
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#4F8CFF" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#22D3EE" stop-opacity="0.75"/>
        </linearGradient>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="1"/>
        </pattern>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      <rect width="100%" height="100%" rx="16" fill="url(#bg)"/>
      <rect width="100%" height="100%" rx="16" fill="url(#grid)"/>

      <circle cx="${Math.round(t*.78)}" cy="${Math.round(e*.18)}" r="${Math.round(Math.min(t,e)*.42)}" fill="#93C5FD" opacity="0.16" filter="url(#soft)"/>
      <circle cx="${Math.round(t*.18)}" cy="${Math.round(e*.78)}" r="${Math.round(Math.min(t,e)*.36)}" fill="#22D3EE" opacity="0.12" filter="url(#soft)"/>

      <rect x="0" y="0" width="${Math.max(10,Math.round(t*.03))}" height="100%" fill="url(#accent)" opacity="0.9"/>

      <path d="M${Math.round(t*.12)} ${Math.round(e*.18)} C ${Math.round(t*.32)} ${Math.round(e*.06)}, ${Math.round(t*.62)} ${Math.round(e*.06)}, ${Math.round(t*.88)} ${Math.round(e*.22)}"
            fill="none" stroke="#FFFFFF" stroke-opacity="0.12" stroke-width="${Math.max(2,Math.round(t*.008))}"/>

      <g transform="translate(${Math.round(t*.1)} ${Math.round(e*.18)})">
        <rect x="0" y="0" width="${Math.round(t*.11)}" height="${Math.round(t*.11)}" rx="${Math.round(t*.028)}" fill="#FFFFFF" fill-opacity="0.10" stroke="#FFFFFF" stroke-opacity="0.10"/>
        <path d="M${Math.round(t*.03)} ${Math.round(t*.065)} L${Math.round(t*.05)} ${Math.round(t*.035)} L${Math.round(t*.075)} ${Math.round(t*.075)}"
              fill="none" stroke="#E6F0FF" stroke-opacity="0.75" stroke-width="${Math.max(2,Math.round(t*.008))}" stroke-linecap="round" stroke-linejoin="round"/>
      </g>

      <g>
        ${d}
        ${x?`
        <text x="${Math.round(t*.14)}" y="${Math.round(e*.74)}"
              font-family="ui-sans-serif, -apple-system, Segoe UI, Roboto, Arial, sans-serif"
              font-size="${Math.max(11,Math.round(t*.055))}"
              font-weight="500"
              letter-spacing="0.8"
              fill="#E6F0FF"
              fill-opacity="0.58">
          ${x}
        </text>`:""}
      </g>
    </svg>
  `.trim();return`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(S)))}`}export{B as g};
