function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__panel">
          <div className="contact__content">
            <p className="section-heading__eyebrow">Contact</p>

            <h2 className="contact__title">
              Let&apos;s build something worth shipping.
            </h2>

            <p className="contact__description">
              I&apos;m open to development opportunities, freelance projects,
              and conversations about useful digital products.
            </p>

            <div className="contact__details">
              <div>
                <p className="contact__label">Email</p>

                <a
                  className="contact__link"
                  href="mailto:nickboyce.tech@icloud.com"
                >
                  nickboyce.tech@icloud.com
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="name">Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
              ></textarea>
            </div>

            <button
              className="button button--primary contact-form__submit"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact