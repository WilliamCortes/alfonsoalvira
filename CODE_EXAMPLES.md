# 💻 CÓDIGO & EJEMPLOS DE IMPLEMENTACIÓN AVANZADA
**Don Alfonso Alvira - SEO Enhancement Guide**

---

## 1. EJEMPLOS DE SCHEMA.ORG COMPLETO

### LocalBusiness Schema Completo Optimizado

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://alfonsoalvira.vendo365.com",
  "name": "Don Alfonso Alvira - Terapeuta Especialista en Columna Vertebral",
  "alternateName": "Don Alfonso Alvira Sobandero Villavicencio",
  "image": "https://alfonsoalvira.vendo365.com/alfonso_la_cabana.jpg",
  "description": "Terapeuta especialista en columna vertebral con 43 años de experiencia en Villavicencio, Meta. Alineación manual, tratamiento de cuajo, tronchaduras y terapias especializadas sin medicamentos ni cirugía.",
  "url": "https://alfonsoalvira.vendo365.com",
  "telephone": "+573202168589",
  "contactPoint": {
    "@type": "ContactPoint",
    "name": "WhatsApp",
    "telephone": "+573202168589",
    "contactType": "Customer Service",
    "areaServed": ["CO"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Cra 20A #38A-08, Barrio Morichal",
    "addressLocality": "Villavicencio",
    "addressRegion": "Meta",
    "postalCode": "500001",
    "addressCountry": "CO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "4.1379943",
    "longitude": "-73.6262459"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "$$",
  "areaServed": [
    {
      "@type": "City",
      "name": "Villavicencio",
      "containedIn": {
        "@type": "State",
        "name": "Meta",
        "containedIn": {
          "@type": "Country",
          "name": "Colombia"
        }
      }
    },
    {
      "@type": "City",
      "name": "Santa Isabel",
      "containedIn": {
        "@type": "State",
        "name": "Tolima"
      }
    },
    {
      "@type": "City",
      "name": "Ibagué"
    },
    {
      "@type": "City",
      "name": "La Plata"
    }
  ],
  "serviceType": [
    "Alineación de Columna Vertebral",
    "Tratamiento de Tronchaduras",
    "Terapia Manual Especializada",
    "Tratamiento de Cuajo",
    "Terapia para Desgarres",
    "Terapia para Matriz"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "120",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/alfonsoalvira",
    "https://www.instagram.com/alfonsoalvira",
    "https://wa.me/573202168589"
  ],
  "founder": {
    "@type": "Person",
    "name": "Alfonso Alvira Yasno",
    "jobTitle": "Terapeuta Especialista en Columna Vertebral",
    "birthDate": "1943-XX-XX"
  }
}
```

### FAQPage Schema Completo

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Quién es Don Alfonso Alvira y qué experiencia tiene?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Don Alfonso Alvira es un terapeuta especialista en columna vertebral con 43 años de experiencia en Villavicencio, Meta. Reconocido tradicionalmente como sobandero, soy especialista en terapias manuales de columna, tratamiento de cuajo (técnica llanera), tronchaduras (desalineaciones articulares) y manejo integral del cuerpo. Mi enfoque es encontrar el origen del problema y tratarlo de manera definitiva."
      }
    },
    {
      "@type": "Question",
      "name": "¿Dónde atiende el terapeuta Don Alfonso en Villavicencio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mi consultorio principal está en Villavicencio, Meta, en el Barrio Morichal (Cra 20A #38A-08). También realizo atenciones itinerantes en Santa Isabel (Tolima), Alto del Fisol, Ibagué y La Plata. Para agendar una cita, contáctame por WhatsApp al +57 320 216 8589."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuáles son las especialidades del terapeuta Don Alfonso?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Especialista en: alineación de columna vertebral, dolor de espalda (lumbago), ciática, tronchaduras (articulaciones desplazadas), lastimaduras, desgarres musculares, tendinitis, esguinces y torceduras, problemas de matriz y ginecológicos, cuajo (técnica tradicional llanera) y recuperación post-lesión. Utilizo únicamente terapia manual especializada, sin medicamentos invasivos ni cirugía."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas sesiones se necesitan para ver resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muchos pacientes experimentan mejoría significativa desde la primera sesión. Mi método integral consiste en 3 terapias consecutivas: Día 1 (diagnóstico e intervención inicial), Día 2 (profundización y consolidación), Día 3 (consolidación final y recomendaciones de cuidado). Esta estructura está específicamente diseñada para máximos resultados sostenibles."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro el tratamiento de terapia manual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, la terapia manual especializada es completamente segura cuando la realiza un terapeuta experienciado como yo. En 43 años he tratado a miles de personas sin complicaciones serias. Siempre evalúo cuidadosamente a cada paciente antes de iniciar el tratamiento. En casos que requieran especialización médica complementaria, refiero apropiadamente a profesionales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre sobandero y terapeuta especialista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El término 'sobandero' es una tradición llanera que se ha transmitido durante generaciones. 'Terapeuta especialista' es el término moderno para la misma práctica. Aunque yo sea reconocido como sobandero tradicional, mi trabajo ahora se considera terapia manual especializada. Ambos términos describen el mismo enfoque integral: usar las manos para encontrar, diagnosticar y corregir problemas del cuerpo humano."
      }
    }
  ]
}
```

---

## 2. META TAGS ACTUALIZADOS PARA COPIAR-PEGAR

### Para index.html (Head Section)

```html
<!-- Basic Meta Tags -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Don Alfonso Alvira - Terapeuta especialista en columna vertebral en Villavicencio, Meta. 43 años de experiencia en alineación manual, tronchaduras, cuajo. Terapias manuales sin cirugía. Agenda por WhatsApp." />
<meta name="keywords" content="terapeuta columna villavicencio, don alfonso alvira, especialista manual meta, terapia de columna, cuajo villavicencio, alineación vertebral, tronchaduras, sobandero villavicencio, terapeuta tradicional meta" />
<meta name="robots" content="index, follow" />
<meta name="language" content="es" />
<meta name="author" content="Don Alfonso Alvira" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />

<!-- Geographic Meta Tags (LOCAL SEO) -->
<meta name="geo.position" content="4.1379943;-73.6262459" />
<meta name="ICBM" content="4.1379943, -73.6262459" />
<meta name="geo.placename" content="Villavicencio, Meta, Colombia" />
<meta name="geo.region" content="CO-Meta" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://alfonsoalvira.vendo365.com/" />
<meta property="og:title" content="Terapeuta Especialista en Columna | Don Alfonso Alvira - Villavicencio | 43 años" />
<meta property="og:description" content="Especialista en columna vertebral con 43 años de experiencia en Villavicencio, Meta. Terapias manuales especializadas, alineación de articulaciones, cuajo y más. Sin medicamentos ni cirugía. Agenda tu cita por WhatsApp." />
<meta property="og:image" content="https://alfonsoalvira.vendo365.com/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/jpeg" />
<meta property="og:locale" content="es_CO" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://alfonsoalvira.vendo365.com/" />
<meta name="twitter:title" content="Terapeuta Especialista en Columna Villavicencio - Don Alfonso Alvira" />
<meta name="twitter:description" content="43 años como especialista en columna vertebral, alineación manual y terapias especializadas en Villavicencio, Meta. Soluciones reales sin cirugía." />
<meta name="twitter:image" content="https://alfonsoalvira.vendo365.com/og-image.jpg" />
<meta name="twitter:creator" content="@alfonsoalvira" />

<!-- Additional SEO -->
<meta name="canonical" href="https://alfonsoalvira.vendo365.com/" />
<link rel="alternate" hreflang="es" href="https://alfonsoalvira.vendo365.com/" />
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```

---

## 3. KEYWORDS EXPANSION LIST

### Para Futuro Blog Post

#### Keyword Clusters para Contenido:

```markdown
## CLUSTER 1: Terapeuta Especialista
- Terapeuta columna villavicencio
- Especialista alineación vertebral
- Terapia manual especializada meta
- Terapeuta especializado columna
- Especialista columna vertebral

## CLUSTER 2: Problemas Tratados
- Dolor de espalda villavicencio
- Lumbago tratamiento especializado
- Ciática especialista
- Hernia discal alineación
- Baja espalda dolor

## CLUSTER 3: Técnicas Específicas
- Alineación vertebral villavicencio
- Tronchaduras especialista meta
- Cuajo tradicional llanero
- Terapia cuajo villavicencio
- Alineación articulaciones

## CLUSTER 4: Geografía Expandida
- Terapeuta columna meta
- Especialista alineación santa isabel
- Terapia manual ibague
- Curandero villavicencio (relacionado)
- Masaje terapéutico especializado

## CLUSTER 5: Soluciones
- Terapia columna sin cirugía
- Alineación natural columna
- Recuperación lesiones musculares
- Tratamiento no invasivo columna
- Medicina tradicional llanera
```

---

## 4. ESTRUCTURA DE CONTENIDO PARA BLOG POSTS

### Post 1: "¿Terapeuta vs Sobandero? La Evolución de la Terapia Manual en Villavicencio"

```markdown
# ¿Terapeuta vs Sobandero? La Evolución de la Terapia Manual en Villavicencio

## Keywords Target
- Terapeuta columna villavicencio (H2)
- Sobandero vs terapeuta (H2)
- Especialista en columna (Body)
- Don alfonso alvira (Body)

## Estructura Propuesta

### H1: ¿Terapeuta vs Sobandero? La Evolución de la Terapia Manual en Villavicencio

### Introducción (100 palabras)
- Mencionar que ambos términos describen lo mismo
- Ubicación geográfica (Villavicencio)
- Introduce Don Alfonso como ejemplo

### H2: ¿Qué es exactamente un Sobandero?
- Definición tradicional
- Tecnología utilizada
- Historia de la tradición llanera
- Keywords: "sobandero villavicencio", "tradición llanera"

### H2: ¿Qué es un Terapeuta Especialista?
- Definición moderna
- Legitimidad profesional
- Diferencias terminológicas
- Keywords: "terapeuta especialista", "terapeuta columna"

### H2: Don Alfonso Alvira: El Puente Entre Tradición y Modernidad
- Case study
- 43 años de experiencia
- Cómo combina ambas perspectivas
- Keywords: "don alfonso alvira", "especialista columna villavicencio"

### H2: Condiciones que Trata un Terapeuta Especialista
- Listar: columna, tronchaduras, etc.
- Explicar cada una
- Keywords naturales

### H2: ¿Debería Visitar un Sobandero o Terapeuta?
- Responder la pregunta
- Diferenciar cuando usar cada término
- CTA a cita

### Conclusión (100 palabras)
- Resumen de puntos
- CTA fuerte

## Metadata
- Title: "¿Terapeuta vs Sobandero? Don Alfonso Alvira Explica | Villavicencio"
- Meta: "Descubre las diferencias entre terapeuta y sobandero. Don Alfonso Alvira, 43 años de experiencia en Villavicencio."
- URL slug: "/blog/terapeuta-vs-sobandero-villavicencio"
```

---

## 5. JAVASCRIPT HELPER PARA DYNAMIC KEYWORDS

Si quieres automatizar ciertos textos con keywords dinámicos:

```jsx
// utils/seoHelpers.ts

export const SEOKeywords = {
  primary: {
    specialty: "Terapeuta Especialista en Columna",
    location: "Villavicencio, Meta",
    fullName: "Don Alfonso Alvira",
    experience: "43 años",
    traditional: "sobandero",
  },
  
  services: [
    "Alineación de Columna Vertebral",
    "Tratamiento de Tronchaduras",
    "Terapia Manual Especializada",
    "Tratamiento de Cuajo",
    "Terapia para Desgarres",
    "Terapia para Matriz",
  ],
  
  longTail: [
    "Alineación vertebral villavicencio",
    "Especialista en columna villavicencio",
    "Terapeuta manual meta",
    "Cuajo tratamiento tradicional",
    "Tronchaduras especialista",
  ],
  
  getHeroTitle: () => 
    `${SEOKeywords.primary.specialty} en ${SEOKeywords.primary.location}: Recupera Movilidad con ${SEOKeywords.primary.experience}`,
  
  getMetaDescription: () =>
    `${SEOKeywords.primary.fullName} - Terapeuta especialista en columna vertebral en ${SEOKeywords.primary.location}. ${SEOKeywords.primary.experience} de experiencia.`,
};

// Uso en componentes
<h1>{SEOKeywords.getHeroTitle()}</h1>
```

---

## 6. REACT COMPONENT PARA SEO CONTENT

```tsx
// components/SEOSection.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOSectionProps {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  schema?: object;
}

const SEOSection: React.FC<SEOSectionProps> = ({
  title,
  description,
  keywords,
  canonical,
  schema,
}) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        {canonical && <link rel="canonical" href={canonical} />}
        {schema && (
          <script type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        )}
      </Helmet>
    </>
  );
};

export default SEOSection;

// Uso:
<SEOSection
  title="Terapeuta Especialista en Columna Villavicencio"
  description="Don Alfonso Alvira..."
  keywords={["terapeuta columna villavicencio", "especialista..."]}
  schema={localBusinessSchema}
/>
```

---

## 7. CLI EMAIL PARA GOOGLE BUSINESS PROFILE

Ejemplo de cómo actualizar información:

```
TITULO: Terapeuta Especialista en Columna - Villavicencio
DESCRIPCION: Don Alfonso Alvira, especialista en columna vertebral con 43 años. Alineación, cuajo, tronchaduras. Sin cirugía.
SERVICIOS: 
- Alineación Vertebral
- Tratamiento Tronchaduras  
- Terapia Manual
- Cuajo Tradicional
- Lastimaduras
- Problemas Matriz
- Recuperación Post-Lesión

HORARIO:
Lunes-Viernes: 8:00-18:00
Sábado: 8:00-16:00
Domingo: Cerrado

ATENCIÓN: Villavicencio (principal), Santa Isabel, Alto del Fisol, Ibagué, La Plata
```

---

## 8. TRACKING SNIPPET PARA CONVERSIONES

```html
<!-- Agregar a Google Analytics 4 para trackear citas agendadas -->

<!-- Event: Cita Agendada por WhatsApp -->
<script>
  function trackWhatsAppClick() {
    gtag('event', 'whatsapp_click', {
      'event_category': 'engagement',
      'event_label': 'agendar_cita_whatsapp',
      'value': 1
    });
  }

  // Agregar onclick a botón WhatsApp
  // <button onClick={trackWhatsAppClick}>Agendar por WhatsApp</button>
</script>

<!-- Event: Form Submit para consulta -->
<script>
  function trackConsultSubmit(service) {
    gtag('event', 'consultation_request', {
      'event_category': 'conversion',
      'event_label': service,
      'service': service
    });
  }
</script>

<!-- Heatmap para entender comportamiento usuario -->
<!-- (Opcional: Agregar Hotjar o Microsoft Clarity) -->
```

---

## 9. ROBOTS.TXT OPTIMIZADO

```txt
# robots.txt - Don Alfonso Alvira

User-agent: *
Allow: /
Allow: /blog/*
Allow: /servicios/*
Allow: /preguntas-frecuentes/*

Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /*.json$
Disallow: /search?

# Google specific
User-agent: Googlebot
Allow: /

# Paritally block bots we don't like
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Crawl-delay: 10

# Sitemap
Sitemap: https://alfonsoalvira.vendo365.com/sitemap.xml
```

---

## 10. SITEMAP.XML ACTUALIZADO

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://alfonsoalvira.vendo365.com/</loc>
    <lastmod>2026-02-26</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://alfonsoalvira.vendo365.com/about</loc>
    <lastmod>2026-02-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://alfonsoalvira.vendo365.com/servicios</loc>
    <lastmod>2026-02-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://alfonsoalvira.vendo365.com/contacto</loc>
    <lastmod>2026-02-26</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://alfonsoalvira.vendo365.com/preguntas-frecuentes</loc>
    <lastmod>2026-02-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

## PRÓXIMOS PASOS TÉCNICOS

1. **Validar en Google Structured Data Testing Tool**
   - URL: https://search.google.com/structured-data/testing-tool
   - Copiar-pegar el schema JSON

2. **Submit a Google Search Console**
   - Upload sitemap.xml
   - Request index de nuevas páginas
   - Monitor click-through rate

3. **Test Mobile**
   - Google Mobile-Friendly Test
   - PageSpeed Insights
   - Lighthouse

4. **Monitor Rankings**
   - Google Search Console
   - Ahrefs / SEMrush (tracking keywords)
   - Monitoreo mensual

---

**Documento completado:** 26 de Febrero 2026
**Última revisión:** Sistema listo para deployment
