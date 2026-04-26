import Image from "next/image";
import ProductMockup from "./ProductMockup";

const imageCards = [
  {
    src: "/hero-business-owner.jpg",
    alt: "Business owner reviewing growth systems on a laptop",
    label: "Owner workflow",
  },
  {
    src: "/generated/hero-operator-desktop.webp",
    alt: "Operator workspace with automation dashboard",
    label: "Automation desk",
  },
  {
    src: "/generated/section-operator-desktop.webp",
    alt: "Growth operator managing business systems",
    label: "System review",
  },
];

export default function VisualMosaic() {
  return (
    <div className="visual-mosaic">
      <div className="visual-photo visual-photo-large">
        <Image
          src={imageCards[0].src}
          alt={imageCards[0].alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 48vw"
        />
        <span>{imageCards[0].label}</span>
      </div>

      <div className="visual-stack">
        {imageCards.slice(1).map((image) => (
          <div className="visual-photo" key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 24vw"
            />
            <span>{image.label}</span>
          </div>
        ))}
      </div>

      <div className="visual-dashboard">
        <ProductMockup compact />
      </div>
    </div>
  );
}
