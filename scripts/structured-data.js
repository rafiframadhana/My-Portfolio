const schemaData = {
    "@context": "https://schema.org",  
    "@type": "WebSite",
    "name": "Rafif Ramadhana | Portfolio",
    "url": "https://rafiframadhana.site/", 
    "image": "https://rafiframadhana.site/images/favicon/favicon-96x96.png"
  };
  
  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.textContent = JSON.stringify(schemaData);
  document.head.appendChild(scriptTag);
  