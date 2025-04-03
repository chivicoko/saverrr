import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
        "name": "Saverrr.",
        "short_name": "Saverrr.",
        "description": "Saverrr. services helps you improve your finances through savings and investments.",
        "icons":[
            {"src":"/icon-16x16.png","sizes":"16x16","type":"image/png"},
            {"src":"/icon-32x32.png","sizes":"32x32","type":"image/png"},
            {"src":"/icon-192x192.png","sizes":"192x192","type":"image/png"},
            {"src":"/icon-512x512.png","sizes":"512x512","type":"image/png"}
        ],
        "scope": "/",
        "start_url": "/",
        "theme_color":"#550022",
        "background_color":"#ffffff",
        "display":"standalone"
    }
}