interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQSection({
  items,
  title = 'Frequently Asked Questions',
  subtitle,
}: FAQSectionProps) {
  return (
    <section className="section section--white" aria-labelledby="faq-heading">
      <div className="container">
        <div className="section__header">
          <h2 id="faq-heading">{title}</h2>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="faq-list">
          {items.map((item) => (
            <article key={item.question} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export type { FAQItem };
