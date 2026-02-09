import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
}

const SEOHead = ({ title, description, image }: SEOHeadProps) => {
  const location = useLocation();

  useEffect(() => {
    const defaultTitle = "Ubuntu Harvests | Ethical Agricultural Trade from Nigeria";
    const defaultDescription =
      "Premium, ethically sourced Nigerian agricultural produce. Connecting African farmers to global markets through sustainability, transparency, and community empowerment.";
    const defaultImage = "/placeholder.svg";

    document.title = title || defaultTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = "name") => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMetaTag("description", description || defaultDescription);
    updateMetaTag("og:title", title || defaultTitle, "property");
    updateMetaTag("og:description", description || defaultDescription, "property");
    updateMetaTag("og:image", image || defaultImage, "property");
    updateMetaTag("og:url", window.location.href, "property");
    updateMetaTag("og:type", "website", "property");
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title || defaultTitle);
    updateMetaTag("twitter:description", description || defaultDescription);
    updateMetaTag("twitter:image", image || defaultImage);
  }, [location.pathname, title, description, image]);

  return null;
};

export default SEOHead;
