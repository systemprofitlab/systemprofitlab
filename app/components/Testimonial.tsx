type TestimonialProps = {
  quote: string;
  name: string;
};

export default function Testimonial({ quote, name }: TestimonialProps) {
  return (
    <figure className="testimonial">
      <blockquote>{quote}</blockquote>
      <figcaption>{name}</figcaption>
    </figure>
  );
}
